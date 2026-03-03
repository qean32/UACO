import { prisma } from "@root/prisma/prisma";
import { hashSync } from 'bcrypt';
import * as data from './data'

const create = async () => {
    await prisma.department.createMany({
        data: data.departmens
    })
    await prisma.group.createMany({
        data: data.groups
    })
    await prisma.user.createMany({
        // @ts-ignore
        data: data.students
    })
    await prisma.user.createMany({
        // @ts-ignore
        data: data.supervisors
    })
    await prisma.event.createMany({
        data: data.events
    })
}

async function down() {
}


async function main() {
    try {
        await down();
        await create();
    } catch (e) {
        console.error(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        // process.exit(1);
    });
