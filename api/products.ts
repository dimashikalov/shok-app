import { API } from "@/app/api";
import { MenuItem } from "@/interfaces/menu.interface";
import { TopPageModel } from "@/interfaces/page.interface";

export async function getProducts(
  page: TopPageModel
): Promise<MenuItem[] | null> {
  const res = await fetch(API.product.find, {
    method: "POST",
    body: JSON.stringify({
      category: page.category,
      limit: 10,
    }),
    headers: new Headers({ "content-type": "application/json" }),
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
}
