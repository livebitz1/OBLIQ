import React from 'react'
import Stripe from 'stripe'
import { currentUser } from '@clerk/nextjs'
import { db } from '@/lib/db'
import BillingDashboard from './_components/billing-dashboard'

type Props = {
  searchParams?: { [key: string]: string | undefined }
}

const Billing = async (props: Props) => {
  const { session_id } = props.searchParams ?? {
    session_id: '',
  }
  if (session_id) {
    const stripe = new Stripe(process.env.STRIPE_SECRET!, {
      typescript: true,
      apiVersion: '2023-10-16',
    })

    const session = await stripe.checkout.sessions.listLineItems(session_id)
    const user = await currentUser()
    if (user) {
      await db.user.update({ 
        where: {
          clerkId: user.id,
        },
        data: {
          tier: session.data[0].description,
          credits:
            session.data[0].description == 'Unlimited'
              ? 'Unlimited'
              : session.data[0].description == 'Pro'
              ? '100'
              : '10',
        },
      })
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="sticky top-0 z-[10] border-b bg-background/50 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold mb-4">Elevate Your Workflow</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Unlock the full potential of automation with our powerful subscription plans. 
            Choose the perfect tier to supercharge your productivity and transform your workflow.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Boost Productivity</h3>
            <p className="text-muted-foreground">
              Automate repetitive tasks and focus on what matters most to your business
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Scale Efficiently</h3>
            <p className="text-muted-foreground">
              Grow your operations without increasing overhead costs
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Stay Competitive</h3>
            <p className="text-muted-foreground">
              Leverage cutting-edge automation to stay ahead of the curve
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <BillingDashboard />
        </div>
      </div>
    </div>
  )
}

export default Billing

 