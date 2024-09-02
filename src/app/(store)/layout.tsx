import Header from '@/components/Header'
import React, { ReactNode } from 'react'

function StoreLayout({children}:{children:ReactNode}) {
  return (
    <div className='mx-auto grid min-h-screen max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8'>
        <Header/>
        {children}
    </div>
  )
}

export default StoreLayout