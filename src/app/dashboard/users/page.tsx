import Link from 'next/link'
import React from 'react'
import  User  from  './Usersinterface'
import { FaEye } from 'react-icons/fa'
import Image from 'next/image'  

export default async function userPage() {
    const res = await fetch ('http://localhost:3000/api/users')
    const data: User[] = await res.json();
  return (
    <div>
      <Link href="/dashboard/users/new" className='underline'>New user</Link>
      <table className='table'>
            <thead>
                <tr>
                <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Image</th>
                    <th>Actions</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    data.map((user)=>{
                        return(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Image src='/images/apple.png' width={50} height={50} alt='user'/>
                                </td>
                                <td >
                                    <Link href={`/dashboard/users/${user.id}`} className='btn btn-primary'> <FaEye>
                                        
                                    </FaEye>view</Link>
                                   
                                </td>
                                
                            </tr>
                        )
                    })
                }
            </tbody>
      </table>
    </div>
  )
}
