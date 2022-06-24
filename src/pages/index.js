import Head from 'next/head';

import Button from '@/components/Button';
import { useToast } from '@/components/Toast';

export default function Home() {
  const { addToast } = useToast();

  return (
    <div className="flex w-full flex-col gap-2">
      <Head>
        <title>Framer-components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex px-20">
        <h1 className="text-3xl">Components Demo</h1>
      </header>

      <main className="flex w-full flex-1 flex-col gap-2 px-20">
        <div className="flex flex-col items-start gap-2 rounded-md bg-zinc-100 p-4">
          <h2 className="text-xl">Button</h2>
          <div className="flex items-center gap-2">
            <Button>Button</Button>
            <Button color="primary">Button</Button>
            <Button color="delete">Button</Button>
            <Button color="warning">Button</Button>
            <Button color="success">Button</Button>

            <Button loading>Button</Button>
            <Button disabled>Button</Button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 rounded-md bg-zinc-100 p-4">
          <h2 className="text-xl">Toast</h2>
          <Button onClick={() => addToast({ title: 'Toast', description: 'test' })}>
            Add Toast
          </Button>
        </div>
      </main>
    </div>
  );
}
