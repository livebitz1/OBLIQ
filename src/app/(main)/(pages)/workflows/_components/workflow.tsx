'use client'

import React, { useState } from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { toast } from 'sonner'
import { onFlowPublish, onDeleteWorkflow, onRunWorkflow } from '../_actions/workflow-connections'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MoreVertical, Play, Pause, Trash } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Progress } from '@/components/ui/progress'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

// Helper function to format date
const formatDate = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - new Date(date).getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days} day${days === 1 ? '' : 's'} ago`
  if (hours > 0) return `${hours} hour${hours === 1 ? '' : 's'} ago`
  if (minutes > 0) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`
  return 'Just now'
}

type Props = {
  id: string
  name: string
  description: string
  publish: boolean
  createdAt: string
}

const Workflow = ({ description, id, name, publish, createdAt }: Props) => {
  const [isExecuting, setIsExecuting] = useState(false)
  const [executionProgress, setExecutionProgress] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [executionResult, setExecutionResult] = useState<any>(null)
  const [currentNode, setCurrentNode] = useState<string | null>(null)

  const onPublishFlow = async (checked: boolean) => {
    const response = await onFlowPublish(id, checked)
    if (response) toast.message(response)
  }

  const handleDelete = async () => {
    const response = await onDeleteWorkflow(id)
    if (response.message === 'Workflow deleted successfully') {
      toast.success('Workflow deleted successfully')
      // Refresh the page to update the workflow list
      window.location.reload()
    } else {
      toast.error(response.message)
    }
  }

  const handleRunNow = async () => {
    setIsExecuting(true)
    setExecutionProgress(0)
    setShowResults(false)
    setExecutionResult(null)
    setCurrentNode(null)

    try {
      const response = await onRunWorkflow(id, (progress, nodeId) => {
        setExecutionProgress(progress)
        setCurrentNode(nodeId)
      })
      
      setExecutionResult(response)
      
      if (response.success) {
        toast.success('Workflow executed successfully')
        setShowResults(true)
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      toast.error('Failed to execute workflow')
    } finally {
      setIsExecuting(false)
      setCurrentNode(null)
    }
  }

  return (
    <>
      <Card className="group hover:shadow-lg transition-all duration-200">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold">{name}</CardTitle>
            <CardDescription className="line-clamp-2">{description}</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleRunNow} disabled={isExecuting}>
                <Play className="mr-2 h-4 w-4" />
                {isExecuting ? 'Running...' : 'Run Now'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete}>
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        
        <CardContent>
          {isExecuting && (
            <div className="mb-4">
              <Progress value={executionProgress} className="h-2" />
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-muted-foreground">
                  Executing workflow... {executionProgress}%
                </p>
                {currentNode && (
                  <p className="text-sm text-muted-foreground">
                    Current node: {currentNode}
                  </p>
                )}
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/googleDrive.png"
              alt="Google Drive"
              height={24}
              width={24}
              className="object-contain"
            />
            <Image
              src="/notion.png"
              alt="Notion"
              height={24}
              width={24}
              className="object-contain"
            />
            <Image
              src="/discord.png"
              alt="Discord"
              height={24}
              width={24}
              className="object-contain"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Badge variant={publish ? "success" : "secondary"}>
              {publish ? "Active" : "Inactive"}
            </Badge>
            <div className="flex items-center gap-2">
              <Label htmlFor={`workflow-${id}`} className="text-sm text-muted-foreground">
                {publish ? "Enabled" : "Disabled"}
              </Label>
              <Switch
                id={`workflow-${id}`}
                onCheckedChange={onPublishFlow}
                defaultChecked={publish}
              />
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between border-t pt-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/workflows/editor/${id}`}>
              Edit Workflow
            </Link>
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setShowResults(true)}>
            View History
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Workflow Execution Results</DialogTitle>
          </DialogHeader>
          
          {executionResult && (
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant={executionResult.success ? "success" : "destructive"}>
                    {executionResult.success ? "Success" : "Failed"}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {executionResult.startTime && formatDate(executionResult.startTime)}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Node Results</h4>
                  {Object.entries(executionResult.nodeResults || {}).map(([nodeId, result]: [string, any]) => (
                    <div key={nodeId} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Node {nodeId}</span>
                        <Badge variant={result.success ? "success" : "destructive"}>
                          {result.success ? "Success" : "Failed"}
                        </Badge>
                      </div>
                      <pre className="text-sm bg-muted p-2 rounded">
                        {JSON.stringify(result, null, 2)}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Workflow
