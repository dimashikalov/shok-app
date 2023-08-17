import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course page",
};

// const firstCategory = 0;

export default function CourcePage({
  params,
}: {
  params: { alias: string };
}): JSX.Element {
  return <div>Страница с alias {params.alias}</div>;
}

// interface CourceProps extends Record<string, unknown> {
//   menu: MenuItem[];
//   firstCategory: number;
//   page: TopPageModel;
//   products: ProductModel[];
// }
