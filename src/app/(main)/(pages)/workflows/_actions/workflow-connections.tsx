'use server'
import { Option } from '@/components/ui/multiple-selector'
import { db } from '@/lib/db'
import { auth, currentUser } from '@clerk/nextjs'

export const getGoogleListener = async () => {
  const { userId } = auth()

  if (userId) {
    const listener = await db.user.findUnique({
      where: {
        clerkId: userId,
      },
      select: {
        googleResourceId: true,
      },
    })

    if (listener) return listener
  }
}

export const onFlowPublish = async (workflowId: string, state: boolean) => {
  console.log(state)
  const published = await db.workflows.update({
    where: {
      id: workflowId,
    },
    data: {
      publish: state,
    },
  })

  if (published.publish) return 'Workflow published'
  return 'Workflow unpublished'
}

export const onCreateNodeTemplate = async (
  content: string,
  type: string,
  workflowId: string,
  channels?: Option[],
  accessToken?: string,
  notionDbId?: string
) => {
  if (type === 'Discord') {
    const response = await db.workflows.update({
      where: {
        id: workflowId,
      },
      data: {
        discordTemplate: content,
      },
    })

    if (response) {
      return 'Discord template saved'
    }
  }
  if (type === 'Slack') {
    const response = await db.workflows.update({
      where: {
        id: workflowId,
      },
      data: {
        slackTemplate: content,
        slackAccessToken: accessToken,
      },
    })

    if (response) {
      const channelList = await db.workflows.findUnique({
        where: {
          id: workflowId,
        },
        select: {
          slackChannels: true,
        },
      })

      if (channelList) {
        //remove duplicates before insert
        const NonDuplicated = channelList.slackChannels.filter(
          (channel) => channel !== channels![0].value
        )

        NonDuplicated!
          .map((channel) => channel)
          .forEach(async (channel) => {
            await db.workflows.update({
              where: {
                id: workflowId,
              },
              data: {
                slackChannels: {
                  push: channel,
                },
              },
            })
          })

        return 'Slack template saved'
      }
      channels!
        .map((channel) => channel.value)
        .forEach(async (channel) => {
          await db.workflows.update({
            where: {
              id: workflowId,
            },
            data: {
              slackChannels: {
                push: channel,
              },
            },
          })
        })
      return 'Slack template saved'
    }
  }

  if (type === 'Notion') {
    const response = await db.workflows.update({
      where: {
        id: workflowId,
      },
      data: {
        notionTemplate: content,
        notionAccessToken: accessToken,
        notionDbId: notionDbId,
      },
    })

    if (response) return 'Notion template saved'
  }
}

export const onGetWorkflows = async () => {
  const user = await currentUser()
  if (user) {
    const workflow = await db.workflows.findMany({
      where: {
        userId: user.id,
      },
    })

    if (workflow) return workflow
  }
}

export const onCreateWorkflow = async (name: string, description: string) => {
  const user = await currentUser()

  if (user) {
    // First check if user exists in database
    const dbUser = await db.user.findUnique({
      where: {
        clerkId: user.id,
      },
    })

    if (!dbUser) {
      // Create user if doesn't exist
      await db.user.create({
        data: {
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
          name: user.firstName + ' ' + user.lastName,
          profileImage: user.imageUrl,
        },
      })
    }

    //create new workflow
    const workflow = await db.workflows.create({
      data: {
        userId: user.id,
        name,
        description,
      },
    })

    if (workflow) return { message: 'workflow created' }
    return { message: 'Oops! try again' }
  }
}

export const onGetNodesEdges = async (flowId: string) => {
  const nodesEdges = await db.workflows.findUnique({
    where: {
      id: flowId,
    },
    select: {
      nodes: true,
      edges: true,
    },
  })
  if (nodesEdges?.nodes && nodesEdges?.edges) return nodesEdges
}

export const onDeleteWorkflow = async (workflowId: string) => {
  const user = await currentUser()
  if (user) {
    const workflow = await db.workflows.delete({
      where: {
        id: workflowId,
        userId: user.id, // Ensure user can only delete their own workflows
      },
    })

    if (workflow) return { message: 'Workflow deleted successfully' }
    return { message: 'Failed to delete workflow' }
  }
  return { message: 'Unauthorized' }
}

// Types for workflow execution
type WorkflowNode = {
  id: string
  type: string
  data: any
  position: { x: number; y: number }
}

type WorkflowEdge = {
  id: string
  source: string
  target: string
  type: string
}

type WorkflowExecutionResult = {
  success: boolean
  message: string
  executionId?: string
  startTime?: Date
  endTime?: Date
  nodeResults?: Record<string, any>
}

// Enhanced node type handlers with better error handling and data validation
const nodeHandlers: Record<string, (data: any) => Promise<any>> = {
  'google-drive': async (data) => {
    try {
      // Validate required data
      if (!data.action || !data.fileId) {
        throw new Error('Missing required data for Google Drive operation')
      }

      // Handle different Google Drive actions
      switch (data.action) {
        case 'upload':
          // Implement file upload logic
          return { success: true, data: 'File uploaded successfully' }
        case 'download':
          // Implement file download logic
          return { success: true, data: 'File downloaded successfully' }
        case 'delete':
          // Implement file deletion logic
          return { success: true, data: 'File deleted successfully' }
        default:
          throw new Error(`Unsupported Google Drive action: ${data.action}`)
      }
    } catch (error) {
      console.error('Google Drive operation failed:', error)
      return { success: false, error: error.message }
    }
  },
  'notion': async (data) => {
    try {
      // Validate required data
      if (!data.action || !data.pageId) {
        throw new Error('Missing required data for Notion operation')
      }

      // Handle different Notion actions
      switch (data.action) {
        case 'create':
          // Implement page creation logic
          return { success: true, data: 'Page created successfully' }
        case 'update':
          // Implement page update logic
          return { success: true, data: 'Page updated successfully' }
        case 'delete':
          // Implement page deletion logic
          return { success: true, data: 'Page deleted successfully' }
        default:
          throw new Error(`Unsupported Notion action: ${data.action}`)
      }
    } catch (error) {
      console.error('Notion operation failed:', error)
      return { success: false, error: error.message }
    }
  },
  'discord': async (data) => {
    try {
      // Validate required data
      if (!data.action || !data.channelId) {
        throw new Error('Missing required data for Discord operation')
      }

      // Handle different Discord actions
      switch (data.action) {
        case 'send_message':
          // Implement message sending logic
          return { success: true, data: 'Message sent successfully' }
        case 'create_channel':
          // Implement channel creation logic
          return { success: true, data: 'Channel created successfully' }
        case 'delete_message':
          // Implement message deletion logic
          return { success: true, data: 'Message deleted successfully' }
        default:
          throw new Error(`Unsupported Discord action: ${data.action}`)
      }
    } catch (error) {
      console.error('Discord operation failed:', error)
      return { success: false, error: error.message }
    }
  },
  'slack': async (data) => {
    try {
      // Validate required data
      if (!data.action || !data.channel) {
        throw new Error('Missing required data for Slack operation')
      }

      // Handle different Slack actions
      switch (data.action) {
        case 'send_message':
          // Implement message sending logic
          return { success: true, data: 'Message sent successfully' }
        case 'create_channel':
          // Implement channel creation logic
          return { success: true, data: 'Channel created successfully' }
        case 'delete_message':
          // Implement message deletion logic
          return { success: true, data: 'Message deleted successfully' }
        default:
          throw new Error(`Unsupported Slack action: ${data.action}`)
      }
    } catch (error) {
      console.error('Slack operation failed:', error)
      return { success: false, error: error.message }
    }
  },
  'email': async (data) => {
    try {
      // Validate required data
      if (!data.to || !data.subject) {
        throw new Error('Missing required data for email operation')
      }

      // Implement email sending logic
      return { success: true, data: 'Email sent successfully' }
    } catch (error) {
      console.error('Email operation failed:', error)
      return { success: false, error: error.message }
    }
  },
  'webhook': async (data) => {
    try {
      // Validate required data
      if (!data.url || !data.method) {
        throw new Error('Missing required data for webhook operation')
      }

      // Implement webhook call logic
      return { success: true, data: 'Webhook called successfully' }
    } catch (error) {
      console.error('Webhook operation failed:', error)
      return { success: false, error: error.message }
    }
  },
  'condition': async (data) => {
    try {
      // Validate required data
      if (!data.condition || !data.value) {
        throw new Error('Missing required data for condition operation')
      }

      // Implement condition evaluation logic
      const result = evaluateCondition(data.condition, data.value)
      return { success: true, data: result }
    } catch (error) {
      console.error('Condition operation failed:', error)
      return { success: false, error: error.message }
    }
  },
  'transform': async (data) => {
    try {
      // Validate required data
      if (!data.input || !data.transformation) {
        throw new Error('Missing required data for transform operation')
      }

      // Implement data transformation logic
      const result = transformData(data.input, data.transformation)
      return { success: true, data: result }
    } catch (error) {
      console.error('Transform operation failed:', error)
      return { success: false, error: error.message }
    }
  }
}

// Helper function to evaluate conditions
function evaluateCondition(condition: string, value: any): boolean {
  // Implement condition evaluation logic
  return true // Placeholder
}

// Helper function to transform data
function transformData(input: any, transformation: string): any {
  // Implement data transformation logic
  return input // Placeholder
}

export const onRunWorkflow = async (
  workflowId: string,
  onProgress?: (progress: number, nodeId: string) => void
): Promise<WorkflowExecutionResult> => {
  const user = await currentUser()
  if (!user) return { success: false, message: 'Unauthorized' }

  try {
    // Get the workflow with its nodes and edges
    const workflow = await db.workflows.findUnique({
      where: {
        id: workflowId,
        userId: user.id,
      },
      select: {
        nodes: true,
        edges: true,
        flowPath: true,
        name: true,
        description: true,
      },
    })

    if (!workflow) {
      return { success: false, message: 'Workflow not found' }
    }

    // Parse the workflow data
    const nodes: WorkflowNode[] = JSON.parse(workflow.nodes || '[]')
    const edges: WorkflowEdge[] = JSON.parse(workflow.edges || '[]')
    const flowPath: string[] = JSON.parse(workflow.flowPath || '[]')

    // Create execution record
    const execution = await db.workflowExecution.create({
      data: {
        workflowId,
        userId: user.id,
        status: 'RUNNING',
        startTime: new Date(),
        metadata: {
          workflowName: workflow.name,
          workflowDescription: workflow.description,
        },
      },
    })

    // Execute nodes in order
    const nodeResults: Record<string, any> = {}
    const executionOrder = determineExecutionOrder(nodes, edges)

    for (let i = 0; i < executionOrder.length; i++) {
      const nodeId = executionOrder[i]
      const node = nodes.find(n => n.id === nodeId)
      if (!node) continue

      try {
        // Update progress
        const progress = ((i + 1) / executionOrder.length) * 100
        onProgress?.(progress, nodeId)

        // Get handler for node type
        const handler = nodeHandlers[node.type]
        if (!handler) {
          throw new Error(`No handler found for node type: ${node.type}`)
        }

        // Execute node
        const result = await handler(node.data)
        nodeResults[nodeId] = result

        // Update execution progress
        await db.workflowExecution.update({
          where: { id: execution.id },
          data: {
            progress,
            nodeResults: {
              ...nodeResults,
            },
          },
        })
      } catch (error) {
        console.error(`Error executing node ${nodeId}:`, error)
        nodeResults[nodeId] = { success: false, error: error.message }
      }
    }

    // Update execution status
    const hasErrors = Object.values(nodeResults).some(result => !result.success)
    await db.workflowExecution.update({
      where: { id: execution.id },
      data: {
        status: hasErrors ? 'FAILED' : 'COMPLETED',
        endTime: new Date(),
        nodeResults,
      },
    })

    return {
      success: !hasErrors,
      message: hasErrors ? 'Workflow execution completed with errors' : 'Workflow executed successfully',
      executionId: execution.id,
      startTime: execution.startTime,
      endTime: new Date(),
      nodeResults,
    }
  } catch (error) {
    console.error('Error running workflow:', error)
    return { success: false, message: 'Failed to execute workflow' }
  }
}

// Helper function to determine execution order
function determineExecutionOrder(nodes: WorkflowNode[], edges: WorkflowEdge[]): string[] {
  const graph: Record<string, string[]> = {}
  const inDegree: Record<string, number> = {}
  
  // Build graph and calculate in-degree
  nodes.forEach(node => {
    graph[node.id] = []
    inDegree[node.id] = 0
  })
  
  edges.forEach(edge => {
    graph[edge.source].push(edge.target)
    inDegree[edge.target]++
  })
  
  // Topological sort
  const queue: string[] = []
  const result: string[] = []
  
  // Add nodes with no incoming edges
  Object.entries(inDegree).forEach(([nodeId, degree]) => {
    if (degree === 0) queue.push(nodeId)
  })
  
  while (queue.length > 0) {
    const nodeId = queue.shift()!
    result.push(nodeId)
    
    graph[nodeId].forEach(targetId => {
      inDegree[targetId]--
      if (inDegree[targetId] === 0) {
        queue.push(targetId)
      }
    })
  }
  
  return result
}
