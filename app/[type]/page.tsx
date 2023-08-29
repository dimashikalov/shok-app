import { firstLevelMenu } from "@/helpers/helpers";

export async function generateStaticParams() {
  return firstLevelMenu.map((m) => "/" + m.route);
}

export default async function Type({
  params,
}: {
  params: { type: string; alias: string };
}) {
  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  return <>Type: {firstCategoryItem.name}</>;
}
