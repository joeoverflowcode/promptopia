"use client"

import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'



const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete}) => {
  // if (!post || !post.creator || !post.creator.image) {
  //   return null; 
  // }

  const { data: session } = useSession()
  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image
            src={post.creator?.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />



            <h3 className='font-satoshi font-semibold text-gray-900'>
              {post.creator?.username}
            </h3>

        </div>
      </div>
    </div>
  )
}

export default PromptCard