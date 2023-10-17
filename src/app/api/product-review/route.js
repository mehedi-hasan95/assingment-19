import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
export async function POST(req, res) {
    try {
        const product_reviewData = await prisma.product_review.create({
            data: {
                title: "title 1",
                rating: "5.00",
                content: "lorem ipsum",
                productId: 1,
            },
        });
        return NextResponse.json({
            msg: "success",
            product_review: product_reviewData,
        });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET(req, res) {
    try {
        const product_reviewData = await prisma.product_review.findMany();
        return NextResponse.json({ msg: "success", product_reviewData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function PUT(req, res) {
    try {
        const product_reviewData = await prisma.product_review.update({
            where: {
                id: 1,
            },
            data: {
                rating: "4",
            },
        });
        return NextResponse.json({ msg: "success", product_reviewData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function DELETE(req, res) {
    try {
        const product_reviewData = await prisma.product_review.delete({
            where: {
                id: 2,
            },
        });
        return NextResponse.json({ msg: "success", product_reviewData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
