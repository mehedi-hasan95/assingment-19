import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
export async function POST(req, res) {
    try {
        const productData = await prisma.product.create({
            data: {
                firstName: "product 1",
                metaTitle: "This is first product",
                slug: "product-1",
                summary: "Lorem ipsum dolor sit amet.",
                price: 20,
                discount: 10,
                userId: 1,
            },
        });
        return NextResponse.json({ msg: "success", productData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET(req, res) {
    try {
        const productData = await prisma.product.aggregate({
            _avg: {
                price: true,
            },
            _count: {
                id: true,
            },
            _max: {
                price: true,
            },
            _sum: {
                price: true,
            },
        });
        return NextResponse.json({ msg: "success", productData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function PUT(req, res) {
    try {
        const productData = await prisma.product.update({
            where: {
                id: 1,
            },
            data: {
                discount: 5,
            },
        });
        return NextResponse.json({ msg: "success", productData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function DELETE(req, res) {
    try {
        const productData = await prisma.product.delete({
            where: {
                id: 2,
            },
        });
        return NextResponse.json({ msg: "success", productData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
