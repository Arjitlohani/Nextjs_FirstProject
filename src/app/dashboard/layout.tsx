import Link from 'next/link';
import React, { ReactNode } from 'react';



interface Props{
    children: ReactNode
}

export default function layout({children}:Props) {
  return (
    <>
    <div className='p-8 bg-slate-900 flex gap-5 text-white usercase'>
      
      <Link href='/dashboard'>Dashboard</Link>
      <Link href='/dashboard/products'>Products</Link>
      <Link href='/dashboard/users'>Users</Link>
      <Link href='/dashboard/posts'>Posts</Link>
    </div>
    <main className='p-8'>
        {
            children
        }

    </main>
    
    
    </>

  )
}
