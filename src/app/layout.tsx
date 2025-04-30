import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/providers/modal-provider'
import { Toaster } from 'sonner'
import { BillingProvider } from '@/providers/billing-provider'
import { Suspense } from 'react'
import DominoLoader from '@/components/ui/domino-loader'

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fuzzie.',
  description: 'Automate Your Work With Obliq.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="fuzzie-theme"
          >
            <Suspense fallback={<DominoLoader />}>
              <BillingProvider>
                <ModalProvider>
                  {children}
                  <Toaster />
                </ModalProvider>
              </BillingProvider>
            </Suspense>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
