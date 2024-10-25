export const userResolvers = {
    Query: {
        findAllUser: async (root: any, args: any) => {

        },

        findByIdUser: async (root: any, args: any) => {

        },

        findDropdownUser: async (root: any, args: any) => {

        },
    },

    Mutation: {
        createOneUser: async (root: any, args: any, context: any, info: any) => {

        },

        updateOneUser: async (root: any, args: any, context: any, info: any) => {

        },

        inactiveOneUser: async (root: any, args: any, context: any, info: any) => {

        },

        deleteOneUser: async (root: any, args: any, context: any, info: any) => {

        },
    },

    User: {
        __resolveReference(user: { id: any }, { findUserById }: any) {
            return findUserById(user.id);
        }
    }
};
