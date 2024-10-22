export interface PaginationInterface {
    page: number;
    limit: number;
    sort?: any;
    searchTerm?: any;
    advanceSearch?: any;
}

// for api base prisma api interface
export interface BasePrismaServiceInterface {
    model: string;
    pagination?: PaginationInterface;
    condition?: any;
    selectedFields?: any;
    limit?: number;
    orderBy?: any[];
}