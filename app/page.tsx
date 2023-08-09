import { Metadata } from "next";
import { Button, Htag, P, Rating, Tag } from "./components";

export const metadata: Metadata = {
  title: "Home page",
  description: "Some text",
};

export default function Home() {
  return (
    <>
      <Htag tag="h2">Hello Dimas</Htag>
      <Button appearance="primary" arrow="right">
        CLick me
      </Button>

      <Button appearance="ghost" arrow="down">
        CLick me
      </Button>
      <P>
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
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
        cupiditate.
      </P>
      <Tag size="s">Small</Tag>
      <Tag size="m" color="red">
        mediem
      </Tag>
      <Tag size="m" color="primary">
        mediem
      </Tag>
      <Rating isEditable />
    </>
  );
}
