import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
export async function POST(req, res) {
    try {
        const product_metaData = await prisma.product_meta.create({
            data: {
                key: "nice product",
                content: "lorem ipsum",
                productId: 1,
            },
        });
        return NextResponse.json({ msg: "success", product_metaData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET(req, res) {
    try {
        const product_metaData = await prisma.product_meta.findMany();
        return NextResponse.json({ msg: "success", product_metaData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function PUT(req, res) {
    try {
        const product_metaData = await prisma.product_meta.update({
            where: {
                id: 1,
            },
            data: {
                productId: 3,
            },
        });
        return NextResponse.json({ msg: "success", product_metaData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function DELETE(req, res) {
    try {
        const product_metaData = await prisma.product_meta.delete({
            where: {
                id: 2,
            },
        });
        return NextResponse.json({ msg: "success", product_metaData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
