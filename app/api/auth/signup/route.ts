import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "../../lib/prisma";



export async function POST(request: Request) {
  const { email, password, name } = await request.json();
  const hashedPassword = await hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: name
      }
    });

    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json({ error: "User already exists or other error" }, { status: 400 });
  }
}
