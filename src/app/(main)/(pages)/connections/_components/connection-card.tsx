'use client'

import { ConnectionTypes } from '@/lib/types'
import React, { useState } from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2 } from 'lucide-react'

type Props = {
  type: ConnectionTypes
  icon: string
  title: ConnectionTypes
  description: string
  callback?: () => void
  connected: Record<ConnectionTypes, boolean>
}

const ConnectionCard = ({
  description,
  type,
  icon,
  title,
  connected,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleConnect = () => {
    setIsLoading(true)
    // Add any pre-connection logic here
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="flex w-full items-center justify-between overflow-hidden bg-gradient-to-br from-background to-muted/50 p-2 transition-all duration-300 hover:shadow-lg">
        <CardHeader className="flex flex-col gap-4">
          <motion.div 
            className="flex flex-row gap-2"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={icon}
              alt={title}
              height={30}
              width={30}
              className="object-contain"
            />
          </motion.div>
          <div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <div className="flex flex-col items-center gap-2 p-4">
          <AnimatePresence mode="wait">
            {connected[type] ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2 rounded-lg border-2 border-primary/20 bg-primary/10 px-4 py-2 font-medium text-primary"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-primary"
                />
                Connected
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Link
                  href={
                    title === 'Discord'
                      ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                      : title === 'Notion'
                      ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                      : title === 'Slack'
                      ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                      : '#'
                  }
                  onClick={handleConnect}
                  className="group relative flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Connect
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: isHovered ? 5 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </>
                  )}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  )
}

export default ConnectionCard
