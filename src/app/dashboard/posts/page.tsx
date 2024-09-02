import React from 'react'

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';

interface User{
    id:number;
    title:string;
    body:string;
}
interface Params{
    params:{
        id:number
    }
}

export default async function PostPage({params:{id}}:Params) {
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts`)
    const data: User[] = await res.json();
    if(id>10) {
        return notFound()
    }

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((post)=>{
                        return(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td >
                                    <Link href={`/dashboard/posts/${post.id}`} className='btn btn-primary'> <FaEye>
                                        
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
