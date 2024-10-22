import { gql } from 'graphql-tag'

export const userSchema = gql`
    extend schema
        @link(
            url: "https://specs.apollo.dev/federation/v2.3",
            import: ["@key", "@shareable"]
        )

    type User @key(fields: "id") {
        id: ID
        fullName: String
        email: String
        description: String
        activeFlag: Boolean
        createdBy: User
        createdByUserId: String
        createdAt: Date
        updatedBy: User
        updatedUserId: String
        updatedAt: Date
    }

    type UserPagination {
        value: [User]
        total: Int
        pages: Int
        page: Int
        limit: Int
    }

    type Query {
        findAllUser(page: Int, limit: Int, sortBy: String, sortDesc: String, searchTerm: String): UserPagination
        findByIdUser(id: String!): User
        findDropdownUser: [User]
    }

    type Mutation {
        createOneUser(
            fullName: String!
            email: String!
            password: String!
            description: String
            activeFlag: Boolean!
        ): User

        updateOneUser(
            id: ID
            fullName: String!
            email: String!
            password: String
            description: String!
            activeFlag: Boolean!
        ): User
        
        inactiveOneUser(id: ID!): User
        
        deleteOneUser(id: ID!): User
    }
`;
