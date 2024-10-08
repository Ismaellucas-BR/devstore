import React from 'react'
import Link from 'next/link'
import {Search, ShoppingBag} from 'lucide-react'
import Image from 'next/image'

function Header() {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-5'>
            <Link href='/' className='text-2xl font-extrabold text-white'>
                devstore
            </Link>

            <form className='flex items-center w-[320px] gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700'>
                <Search className='w-5 h-5 text-zinc-500'/>

                <input placeholder='Buscar produtos...' className='flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500' />
            </form>

        </div>
        <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
                <ShoppingBag className='w-4 h-4'/>
                <span className='text-sm'>Cart (0)</span>
            </div>

            <div className='w-px h-4 bg-zinc-700'></div>

            <Link href="/" className='flex items-center gap-2 hover:underline'>
                <span>Account</span>
                
                <Image
                    src="https://github.com/ismaellucas-BR.png"
                    className='w-6 h-6 rounded-full' 
                    width={24}
                    height={24}
                    alt='Foto de Ismael Lucas'
                />
            </Link>
        </div>
    </div>
  )
}

export default Header