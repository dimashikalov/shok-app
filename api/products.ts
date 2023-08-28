import { API } from "@/app/api";
import { PageItem } from "@/interfaces/menu.interface";

export async function getProducts(page: PageItem): Promise<MenuItem[]> {
  const res = await fetch(API.product.find, {
    method: "POST",
    body: JSON.stringify({
      category: page.category,
      limit: 10,
    }),
    headers: new Headers({ "content-type": "application/json" }),
    next: { revalidate: 10 },
  });
  console.log("revalidating getProduct");
  return res.json();
}
