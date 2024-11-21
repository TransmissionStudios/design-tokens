// app/[slug]/query.ts
import { heroFields } from "@/components/heroModule/query";

const pageFields = `
    slug
    modulesCollection(limit: 20) {
        items {
            ${heroFields}
        }
    }
`;

export const pageQuery = (slug: string) => `
    query {
        pageCollection(where: { slug: "${slug}" }) {
            items {
                ${pageFields}
            }
        }
    }
`;