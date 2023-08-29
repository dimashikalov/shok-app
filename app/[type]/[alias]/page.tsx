import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { getProducts } from "@/api/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Course page",
};

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias }))
  );
}

export default async function CourcePage({
  params,
}: {
  params: { alias: string };
}) {
  let products;
  const page = await getPage(params.alias);

  if (page) {
    products = await getProducts(page);
  }

  if (!page) {
    notFound();
  }

  return (
    <div>
      {page.title} {products && products?.length}
    </div>
  );
}