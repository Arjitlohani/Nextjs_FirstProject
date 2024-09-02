"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'



export default  function NewUser() {
    
    const router = useRouter();
    const handleSubmit=()=>{
        setTimeout(() => {
            router.push('/dashboard/users')
        }, 3000);
    }
  return (
    <div>
      <button className='bg-blue-900 rounded-lg py-3 text-white px-5' onClick={handleSubmit}>New User</button>

      

    </div>
  )
}
