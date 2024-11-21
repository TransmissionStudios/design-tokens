// app/[slug]/page.tsx
import { pageQuery } from "./query";
import { fetchData } from "@/utils/contentful";
import renderModule from "@/utils/renderModule";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await fetchData(pageQuery(params.slug)).then(
    (res) => res.data.pageCollection.items[0]
  );

  if (!page) {
    notFound();
  }

  return page.modulesCollection.items.map((module: any) =>
    renderModule(module)
  );
}