import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { getProducts } from "@/api/products";
import { TopPageComponent } from "@/app/page-components";
import { firstLevelMenu } from "@/helpers/helpers";
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

export default async function TopPage({
  params,
}: {
  params: { alias: string };
}) {
  let products;
  const page = await getPage(params.alias);
  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  if (page) {
    products = await getProducts(page);
  }

  if (!page) {
    notFound();
  }

  return (
    <TopPageComponent
      products={products}
      firstCategory={firstCategoryItem.id}
      page={page}
    />
  );
}
