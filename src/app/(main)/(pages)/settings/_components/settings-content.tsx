'use client'

import ProfilePicture from './profile-picture'
import ProfileForm from '@/components/forms/profile-form'
import { User as UserType } from '@prisma/client'

interface SettingsContentProps {
  user: UserType | null
  onDelete: () => Promise<any>
  onUpload: (image: string) => Promise<any>
  onUpdate: (name: string) => Promise<any>
}

export const SettingsContent = ({
  user,
  onDelete,
  onUpload,
  onUpdate,
}: SettingsContentProps) => {
  return (
    <div className="py-8">
      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        {/* Sidebar Navigation */}
        <div className="hidden md:block">
          <nav className="space-y-1 rounded-lg border border-white/10 bg-background/50 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 rounded-md bg-primary/10 p-3 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="font-medium">Profile Settings</span>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div className="rounded-lg border border-white/10 bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
            <div className="mb-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                User Profile
              </h2>
              <p className="mt-2 text-base text-white/50">
                Customize your profile information and appearance
              </p>
            </div>

            <div className="space-y-8">
              <div className="transition-all duration-300 hover:scale-[1.02]">
                <ProfilePicture
                  onDelete={onDelete}
                  userImage={user?.profileImage || ''}
                  onUpload={onUpload}
                />
              </div>

              <div className="transition-all duration-300 hover:scale-[1.02]">
                <ProfileForm
                  user={user}
                  onUpdate={onUpdate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 