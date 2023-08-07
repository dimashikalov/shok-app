import { Metadata } from 'next';
import { Button, Htag } from './components';

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Some text',
};

export default function Home() {
  return (
    <>
      <Htag tag='h2'>Hello Dimas</Htag>
       <Button appearance='primary' arrow='right'>CLick me</Button>
    </>
  );
}
