'use client'

import React, { useState } from 'react'
import WorkflowButton from './_components/workflow-button'
import Workflows from './_components'
import { Input } from '@/components/ui/input'
import { Search, Filter, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Props = {}

const Page = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  return (
    <div className="flex flex-col relative min-h-screen">
      <div className="sticky top-0 z-[10] bg-background/50 backdrop-blur-lg border-b">
        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Workflows</h1>
            <WorkflowButton />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search workflows..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-[180px] justify-between">
                  {statusFilter === 'all' ? 'All Workflows' : statusFilter === 'active' ? 'Active' : 'Inactive'}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setStatusFilter('all')}>All Workflows</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('active')}>Active</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('inactive')}>Inactive</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-[180px] justify-between">
                  {sortBy === 'newest' ? 'Newest First' : sortBy === 'oldest' ? 'Oldest First' : 'Name'}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSortBy('newest')}>Newest First</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('oldest')}>Oldest First</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('name')}>Name</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-6">
        <Workflows 
          searchQuery={searchQuery}
          statusFilter={statusFilter}
          sortBy={sortBy}
        />
      </div>
    </div>
  )
}

export default Page
