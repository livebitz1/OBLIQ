import React from 'react'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Sparkles, Zap, Crown, Star } from 'lucide-react'

type Props = {
  credits: number
  tier: string
}

const CreditTracker = ({ credits, tier }: Props) => {
  const getProgressColor = () => {
    const progress = tier === 'Free' ? credits * 10 : tier === 'Unlimited' ? 100 : credits
    if (progress >= 80) return 'bg-white'
    if (progress >= 50) return 'bg-gray-300'
    if (progress >= 30) return 'bg-gray-400'
    return 'bg-gray-500'
  }

  const getTierColor = () => {
    switch (tier) {
      case 'Free':
        return 'text-gray-400'
      case 'Pro':
        return 'text-white'
      case 'Unlimited':
        return 'text-white'
      default:
        return 'text-gray-400'
    }
  }

  const getTierIcon = () => {
    switch (tier) {
      case 'Free':
        return <Star className="w-4 h-4" />
      case 'Pro':
        return <Zap className="w-4 h-4" />
      case 'Unlimited':
        return <Crown className="w-4 h-4" />
      default:
        return <Star className="w-4 h-4" />
    }
  }

  return (
    <div className="p-6">
      <Card className="p-6 bg-black shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800">
        <CardContent className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <CardTitle className="font-semibold text-2xl flex items-center gap-2 text-white">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
              Credit Tracker
            </CardTitle>
            <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${getTierColor()} bg-gray-900 flex items-center gap-2 border border-gray-800`}>
              {getTierIcon()}
              {tier} Plan
            </span>
          </div>
          
          <div className="space-y-3">
            <div className="relative">
              <Progress
                value={
                  tier === 'Free'
                    ? credits * 10
                    : tier === 'Unlimited'
                    ? 100
                    : credits
                }
                className={`w-full h-4 rounded-full ${getProgressColor()} transition-all duration-500`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-400 font-medium">
                {tier === 'Unlimited' ? 'Unlimited Credits' : 'Credits Used'}
              </div>
              <div className="font-semibold text-lg flex items-center gap-1">
                <span className="text-white">{credits}</span>
                <span className="text-gray-600">/</span>
                <span className={`${getTierColor()} flex items-center gap-1`}>
                  {tier === 'Free' ? '10' : tier === 'Pro' ? '100' : '∞'}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreditTracker
