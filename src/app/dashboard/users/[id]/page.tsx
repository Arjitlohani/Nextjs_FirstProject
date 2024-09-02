import React from 'react'
import User from '../Usersinterface'
import { notFound } from 'next/navigation'

interface Params{
    params:{
        id:number
    }
}

export default async function userDetails({params:{id}}:Params) {
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
    const data: User = await res.json();

   
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
                <th>Name</th>
                <td>
                    {data.name}
                </td>
            </tr>
            <tr>
                <th>Email</th>
                <td>
                    {data.email}
                </td>
            </tr>
        </table>
      
    </div>
  )
}
