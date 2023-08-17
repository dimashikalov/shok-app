import { Metadata } from "next";
import { Button, Htag, P, Rating, Tag } from "./components";
// import { getMenu } from "@/api/menu";
import { MenuItem } from "@/interfaces/menu.interface";
import { API } from "./api";

export const metadata: Metadata = {
  title: "Home page",
  description: "Some text",
};

async function getMenu(firstCategory: number): Promise<MenuItem[]> {
  const res = await fetch(API.topPage.find, {
    method: "POST",
    body: JSON.stringify({
      firstCategory,
    }),
    headers: new Headers({ "content-type": "application/json" }),
    next: { revalidate: 10 },
  });
  console.log("revalidating getMenu");
  return res.json();
}

export default async function Home() {
  const menu = await getMenu(0);

  return (
    <main>
      <Htag tag="h2">Hello Dimas</Htag>
      <Button appearance="primary" arrow="right">
        CLick me
      </Button>

      <Button appearance="ghost" arrow="down">
        CLick me
      </Button>
      <P size="m">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
        cupiditate.
      </P>
      <P size="s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
        cupiditate.
      </P>
      <P size="l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
        cupiditate.
      </P>
      <Tag size="s" color="ghost">
        Small
      </Tag>
      <Tag size="s" color="primary">
        Small
      </Tag>
      <Tag size="m" color="red">
        mediem
      </Tag>
      <Tag size="m" color="primary">
        mediem
      </Tag>
      <Rating isEditable />
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </main>
  );
}
