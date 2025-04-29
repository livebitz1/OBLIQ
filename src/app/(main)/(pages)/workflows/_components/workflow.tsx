'use client'

import React from 'react'
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
import { onFlowPublish } from '../_actions/workflow-connections'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MoreVertical, Play, Pause, Trash } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Props = {
  id: string
  name: string
  description: string
  publish: boolean
  createdAt: string
}

const Workflow = ({ description, id, name, publish, createdAt }: Props) => {
  const onPublishFlow = async (checked: boolean) => {
    const response = await onFlowPublish(id, checked)
    if (response) toast.message(response)
  }

  return (
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
            <DropdownMenuItem>
              <Play className="mr-2 h-4 w-4" />
              Run Now
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      
      <CardContent>
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
        <Button variant="ghost" size="sm">
          View History
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Workflow
