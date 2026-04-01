import { prisma } from "@root/prisma/prisma";
import { hashSync } from 'bcrypt';
import * as data from './data'
import { PASSWORD_HASH_LENGTH } from "@/config";

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
    await prisma.user.createMany({
        data: {
            "password": hashSync('admin', PASSWORD_HASH_LENGTH),
            "dateOfBirth": "1985-10-26T00:00:00Z",
            "firstName": "Админ",
            "lastName": "Админ",
            "email": "admin@gmail.com",
            "sureName": "Админ",
            "role": "ADMIN",
            "sex": "MALE",
        }
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
