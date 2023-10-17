import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function POST(req, res) {
    try {
        const orderData = prisma.order.create({
            data: {
                title: "first order",
                token: "abc",
                subTotal: 500,
                itemDiscount: 40,
                tax: 20,
                total: 550,
                discount: 50,
                grandTotal: 300,
                city: "jessore",
                country: "BD",
                userId: 1,
            },
        });
        const cartDelete = prisma.cart.delete({
            where: {
                id: 3,
            },
        });
        const result = await prisma.$transaction([orderData, cartDelete]);
        return NextResponse.json({ msg: "success", result });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET(req, res) {
    try {
        const orderData = await prisma.order.findMany({
            include: {
                user: true,
            },
        });
        return NextResponse.json({ msg: "success", orderData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function PUT(req, res) {
    try {
        const orderData = await prisma.order.update({
            where: {
                id: 1,
            },
            data: {
                discount: 100,
            },
        });
        return NextResponse.json({ msg: "success", orderData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function DELETE(req, res) {
    try {
        const orderData = await prisma.order.delete({
            where: {
                id: 2,
            },
        });
        return NextResponse.json({ msg: "success", orderData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
