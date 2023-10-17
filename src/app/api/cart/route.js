import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function POST(req, res) {
    try {
        const cartData = await prisma.cart.create({
            data: {
                title: "new product",
                titsessionIdle: "abc",
                token: "123-abc",
                status: "avilable",
                city: "jessore",
                country: "BD",
                userId: 1,
            },
        });
        return NextResponse.json({ msg: "success", cartData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET(req, res) {
    try {
        const cartData = await prisma.cart.findMany({
            include: {
                user: true,
            },
        });
        return NextResponse.json({ msg: "success", cartData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function PUT(req, res) {
    try {
        const cartData = await prisma.cart.update({
            where: {
                id: 1,
            },
            data: {
                status: "unavilable",
            },
        });
        return NextResponse.json({ msg: "success", cartData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function DELETE(req, res) {
    try {
        const cartData = await prisma.cart.delete({
            where: {
                id: 2,
            },
        });
        return NextResponse.json({ msg: "success", cartData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
