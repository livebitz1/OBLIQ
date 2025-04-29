'use client'

import React, { useEffect, useState } from 'react'
import Workflow from './workflow'
import { onGetWorkflows } from '../_actions/workflow-connections'
import MoreCredits from './more-creadits'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

type Workflow = {
  id: string
  name: string
  description: string
  publish: boolean
  createdAt: string
}

type Props = {
  searchQuery: string
  statusFilter: string
  sortBy: string
}

const Workflows = ({ searchQuery, statusFilter, sortBy }: Props) => {
  const [workflows, setWorkflows] = useState<Workflow[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWorkflows = async () => {
      try {
        const data = await onGetWorkflows()
        setWorkflows(data || [])
      } catch (error) {
        console.error('Error fetching workflows:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchWorkflows()
  }, [])

  const filteredWorkflows = workflows.filter(workflow => {
    const matchesSearch = workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         workflow.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && workflow.publish) ||
                         (statusFilter === 'inactive' && !workflow.publish)
    return matchesSearch && matchesStatus
  })

  const sortedWorkflows = [...filteredWorkflows].sort((a, b) => {
    if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    if (sortBy === 'oldest') return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    return a.name.localeCompare(b.name)
  })

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-[200px] w-full" />
          </div>
        ))}
      </div>
    )
  }
  
  return (
    <div className="relative">
      <MoreCredits />
      
      {sortedWorkflows.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedWorkflows.map((flow) => (
            <Workflow
              key={flow.id}
              {...flow}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold">No Workflows Found</h3>
          <p className="text-muted-foreground mt-2">
            {searchQuery ? 'No workflows match your search' : 'Create your first workflow to automate your tasks'}
          </p>
        </div>
      )}
    </div>
  )
}

export default Workflows
