import z, { number } from "zod";

export const UserSchema= z.object({
    
    name:z.string({required_error:"Name is required field!!"}).min(3,"Name must be more then 3 characters"),
    email:z.string({required_error:"Email is required field!!"}).min(3,"Email must be more then 3 characters")
})