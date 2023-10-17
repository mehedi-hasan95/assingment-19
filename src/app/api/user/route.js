import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// BigInt.prototype.toJSON = function () {
//     return this.toString();
// };
export async function POST(req, res) {
    try {
        const userData = await prisma.user.create({
            data: {
                firstName: "Mehedi",
                middleName: "Hasan",
                lastName: "nothing",
                mobile: "0123456789",
                email: "me@me.com",
                password: "123",
            },
        });
        console.log(userData);
        return NextResponse.json({ msg: "success", userData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET(req, res) {
    try {
        const userData = await prisma.user.findMany();
        return NextResponse.json({ msg: "success", userData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function PUT(req, res) {
    try {
        const userData = await prisma.user.update({
            where: {
                id: 1,
            },
            data: {
                lastName: "anonymous",
            },
        });
        return NextResponse.json({ msg: "success", userData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function DELETE(req, res) {
    try {
        const userData = await prisma.user.delete({
            where: {
                id: 2,
            },
        });
        return NextResponse.json({ msg: "success", userData });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
