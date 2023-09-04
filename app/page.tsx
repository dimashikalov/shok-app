import { Metadata } from "next";
import { Button, Htag, Input, P, Rating, Tag, Textarea } from "./components";

export const metadata: Metadata = {
  title: "Home page",
  description: "Some text",
};

export default async function Home() {
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
      <Input placeholder="dimas" />
      <Textarea placeholder="txtArea" />
    </main>
  );
}
