
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/Prisma";
import { UserSchema } from "../userSchema";

interface Params{
    params:{
        id:string
    }
}

interface User{
    id:number,
    name:string,
    email:string
}

export async  function GET(request: NextRequest, {params:{id}}:Params){
    const user = await prisma.user.findUnique({
        where :{
            id:parseInt(id)
        }
    })
    if(!user){
        return NextResponse.json(
           {error: "User Not found"} ,
           {status:404}
        )
    }
    return NextResponse.json(user)
}

export async function PUT(request:NextRequest, {params:{id}}:Params){
    const body = await request.json();
    const validation = UserSchema.safeParse(body);

    if(!validation.success){
        return NextResponse.json({
            error:validation.error.errors
        },
        {
            status:400
        })
    }
   
    const user = await prisma.user.findUnique({
        where:{
            id:parseInt(id)
        }
    })
    if(!user){
        return NextResponse.json(
            {
                error:"user not found"
            },
            {
                status:404
            }
        )}

        const updatedUser = await prisma.user.update({
            where:{
                id:parseInt(id)
            },
            data:{
                name:body.name,
                email:body.email,
                phone:body.phone,
                address:body.address
            }
        })
        return NextResponse.json(updatedUser)
}

export  async function DELETE(request: NextRequest,{params:{id}}:Params){
    const user = await prisma.user.findUnique({
        where:{
            id:parseInt(id)
        }
    })
    if(!user){
        return NextResponse.json(
            {
                error:"user not found"
            },
            {
                status:404
            }
        )}
    const deletedUser = await prisma.user.delete({
        where:{
            id:parseInt(id)
        }
    })

    return NextResponse.json({
        msg:"User deleted successfully",
        user:deletedUser})

}