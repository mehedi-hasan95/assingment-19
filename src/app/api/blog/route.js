import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
export async function POST(req, res) {
    try {
        const body = await req.json();
        const posts = await prisma.posts.create({
            data: body,
        });
        return NextResponse.json({ msg: "success", posts });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET(req, res) {
    try {
        const posts = await prisma.posts.findMany();
        return NextResponse.json({ msg: "success", posts });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
