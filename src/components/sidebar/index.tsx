'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { menuOptions } from '@/lib/constant'
import clsx from 'clsx'
import { Separator } from '@/components/ui/separator'
import { Database, GitBranch, LucideMousePointerClick, ChevronLeft, ChevronRight } from 'lucide-react'
import { ModeToggle } from '../global/mode-toggle'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

const MenuOptions = ({ className }: Props) => {
  const pathName = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  // Auto-collapse on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.nav
      initial={false}
      animate={{ width: isCollapsed ? '80px' : '240px' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'dark:bg-black/50 backdrop-blur-xl h-screen overflow-hidden flex items-center flex-col gap-10 py-6 px-2 border-r border-border/40',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center flex-col gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            className="flex font-bold text-2xl hover:text-primary transition-colors"
            href="/"
          >
            {!isCollapsed ? 'fuzzie.' : 'f.'}
          </Link>
        </motion.div>

        <TooltipProvider>
          <div className="flex flex-col gap-2 w-full">
            {menuOptions.map((menuItem) => (
              <motion.div
                key={menuItem.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className={clsx(
                        'w-full justify-start gap-2 h-10 px-2',
                        {
                          'bg-primary/10 text-primary': pathName === menuItem.href,
                          'hover:bg-primary/5': pathName !== menuItem.href,
                        }
                      )}
                      asChild
                    >
                      <Link href={menuItem.href}>
                        <menuItem.Component
                          selected={pathName === menuItem.href}
                          className={cn(
                            'w-5 h-5',
                            pathName === menuItem.href ? 'text-primary' : 'text-muted-foreground'
                          )}
                        />
                        {!isCollapsed && (
                          <span className="text-sm font-medium">{menuItem.name}</span>
                        )}
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  {isCollapsed && (
                    <TooltipContent
                      side="right"
                      className="bg-black/10 backdrop-blur-xl"
                    >
                      <p>{menuItem.name}</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </TooltipProvider>

        <Separator className="w-full" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center flex-col gap-4 dark:bg-[#353346]/30 py-4 px-2 rounded-xl h-56 overflow-y-auto border border-border/40 w-full"
        >
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border border-border/40">
            <LucideMousePointerClick
              className="dark:text-white"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border border-border/40">
            <GitBranch
              className="text-muted-foreground"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border border-border/40">
            <Database
              className="text-muted-foreground"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border border-border/40">
            <GitBranch
              className="text-muted-foreground"
              size={18}
            />
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-center flex-col gap-4 mt-auto">
        <ModeToggle />
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
    </motion.nav>
  )
}

export default MenuOptions
