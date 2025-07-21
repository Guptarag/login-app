// app/api/login/route.ts
import  {NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
  const { email, password } = await request.json(); 
  if (!email || !password) {
        return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }


    // Here you would typically check the credentials against your database
    // For example:
     const user = await prisma.user.findUnique({ where: { email } });
     if (user && user.password === password) {
         return NextResponse.json({ message: "Login successful" });
     } else {
         return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
     }

  // Simulate a login process

}