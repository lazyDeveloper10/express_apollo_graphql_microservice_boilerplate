import { prisma } from '../config';

import { BasePrismaServiceInterface } from '../model';

export const findAll = async (query: BasePrismaServiceInterface) => {
    return prisma.$transaction([
        // @ts-ignore
        prisma[query.model].findMany(
            {
                where: query.condition,

                select: query.selectedFields,

                skip: ((query.pagination!.page - 1) * query.pagination!.limit),
                take: query.pagination!.limit,

                orderBy: [
                    query.pagination?.sort
                ],
            }
        ),

        // @ts-ignore
        prisma[query.model].count(
            {
                where: query.condition,
            }
        ),
    ]);
};

export const findById = async (query: BasePrismaServiceInterface, client?: any) => {
    let prismaClient = client ? client : prisma;

    return await prismaClient[query.model].findFirst(
        {
            where: query.condition,

            select: query.selectedFields,

            orderBy: query.orderBy
        }
    );
};

export const findDropdown = async (query: BasePrismaServiceInterface, client?: any) => {
    let prismaClient = client ? client : prisma;

    return await prismaClient[query.model].findMany(
        {
            where: query.condition,

            select: query.selectedFields,

            ...(query.limit && { take: query.limit }),

            ...(query.orderBy && { orderBy: query.orderBy })
        }
    );
};

export const findDropdownSearch = async (query: BasePrismaServiceInterface, client?: any) => {
    let prismaClient = client ? client : prisma;

    return await prismaClient[query.model].findMany(
        {
            where: query.condition,

            select: query.selectedFields,

            ...(query.limit && { take: query.limit }),

            ...(query.orderBy && { orderBy: query.orderBy })
        }
    );
};

export const createOne = async (query: BasePrismaServiceInterface, body: any, client?: any) => {
    let prismaClient = client ? client : prisma;

    return prismaClient[query.model].create(
        {
            data: body,

            select: query.selectedFields
        }
    );
};

export const updateOne = async (query: BasePrismaServiceInterface, body: any, client?: any) => {
    let prismaClient = client ? client : prisma;

    return await prismaClient[query.model].update(
        {
            where: query.condition,

            data: body,

            select: query.selectedFields
        }
    );
};

export const deleteOne = async (query: BasePrismaServiceInterface, client?: any) => {
    let prismaClient = client ? client : prisma;

    return await prismaClient[query.model].delete(
        {
            where: query.condition,

            select: query.selectedFields
        }
    );
};
