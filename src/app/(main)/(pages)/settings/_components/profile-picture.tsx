'use client'
import React from 'react'
import UploadCareButton from './uploadcare-button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'

type Props = {
  userImage: string | null
  onDelete?: any
  onUpload: any
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter()

  const onRemoveProfileImage = async () => {
    const response = await onDelete()
    if (response) {
      router.refresh()
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col space-y-4 p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10"
    >
      <h2 className="text-xl font-semibold text-white">Profile Picture</h2>
      <div className="flex h-[30vh] flex-col items-center justify-center space-y-4">
        {userImage ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
              <Image
                src={userImage}
                alt="User_Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              variant="ghost"
              className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <X className="h-4 w-4 group-hover:rotate-90 transition-transform" />
              Remove Profile Picture
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="h-48 w-48 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
              <UploadCareButton onUpload={onUpload} />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default ProfilePicture
