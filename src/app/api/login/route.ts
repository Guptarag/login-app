// app/api/login/route.ts
import  {NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  // Simulate a login process
  if (email === "admin@example.com" && password === "password123") {
    return NextResponse.json({ message: "Login successful!" }, { status: 200 });
  }
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
}