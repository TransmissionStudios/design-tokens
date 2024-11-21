export async function fetchData(query: string): Promise<any> {
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.s0wqnar50kyz}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer nO6S_3AAWtZnF_vcNHTLOVIvZKRS-pFMSiBxhqobsf4`,
        },
        body: JSON.stringify({ query }),
      }
    ).then((response) => response.json());
  }