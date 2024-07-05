
import { PrismaClient } from "@prisma/client";
import date from 'date-and-time';

const prisma = new PrismaClient();
import random from "random";

 async function createSignUpVerification(email){
    const code = String(random.int(1000000, 999999))
    const now = new Date();
    const expiryAt = date.addMinutes(now, 10);
   return await prisma.signUpVerification.create({
        data:{
            email,
            code,
            expiryAt
        }
       });
}
export default createSignUpVerification