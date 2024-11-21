// components/heroModule/query.ts
export const heroFields = `
    __typename
    header
    body
    button {
        text
        href
    }
    image {
        title
        url
    }
`;