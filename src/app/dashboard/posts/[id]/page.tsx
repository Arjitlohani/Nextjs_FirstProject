import { notFound } from 'next/navigation';
import React from 'react'


interface Params{
    params:{
        id:number
    }
}

interface User{
    id:number;
    title:string;
    body:string;
}
export default async function postDetails({params:{id}}:Params) {
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data: User = await res.json();
    if(id>10) {
        return notFound()
    }
  return (
    <div>
    <h1></h1>
    <table className='table table-bordered'>
        <tr>
            <th>ID</th>
            <td>
                {data.id}
            </td>
        </tr>
        <tr>
            <th>Title</th>
            <td>
                {data.title}
            </td>
        </tr>
        <tr>
            <th>Body</th>
            <td>
                {data.body}
            </td>
        </tr>
    </table>
  
</div>
  )
}
