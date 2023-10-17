import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
export async function POST(req, res) {
    try {
        const categoryData = await prisma.category.create({
            data: {
                title: "education",
                metaTitle: "education",
                slug: "education",
                content: "lorem ipsum",
            },
        });
        return NextResponse.json({ msg: "success", categoryData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET(req, res) {
    try {
        const categoryData = await prisma.category.groupBy({
            by: "metaTitle",
            _count: { id: true },
        });
        return NextResponse.json({ msg: "success", categoryData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function PUT(req, res) {
    try {
        const categoryData = await prisma.category.update({
            where: {
                id: 1,
            },
            data: {
                metaTitle: "meta title updated",
            },
        });
        return NextResponse.json({ msg: "success", categoryData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function DELETE(req, res) {
    try {
        const categoryData = await prisma.category.delete({
            where: {
                id: 2,
            },
        });
        return NextResponse.json({ msg: "success", categoryData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
