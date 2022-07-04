import Head from 'next/head';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkout';
import { useToast } from '@/components/Toast';
import Select from '@/components/Select/Select';
import Switch from '@/components/Switch';
import Tabs from '@/components/Tabs';
import Tag from '@/components/Tag';
import Tooltip from '@/components/Tooltip';

const tabsData = [
  {
    title: 'Saved sites',
    value: 'sites',
  },
  {
    title: 'Collections',
    value: 'collections',
  },
  {
    title: '48 Following',
    value: 'following',
  },
  {
    title: '32 Followers',
    value: 'followers',
  },
];

const Section = (props) => {
  const { title, children } = props;
  return (
    <div className="flex flex-col items-start gap-4 rounded-md bg-zinc-100 p-4">
      <h2 className="text-xl text-zinc-600">{title}</h2>
      <div className="flex w-full flex-wrap items-center gap-2">{children}</div>
    </div>
  );
};

export default function Home() {
  const { addToast } = useToast();

  return (
    <div className="flex w-full flex-col gap-2">
      <Head>
        <title>Framer-components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex p-4 md:px-20">
        <h1 className="text-3xl">Framer-Components</h1>
      </header>

      <main className="mb-20 flex w-full flex-1 flex-col gap-2 p-4 md:px-20">
        <Section title="Button">
          <Button>Button</Button>
          <Button color="primary">Button</Button>
          <Button color="success">Button</Button>
          <Button color="warning">Button</Button>
          <Button color="error">Button</Button>

          <Button loading>Button</Button>
          <Button disabled>Button</Button>
        </Section>

        <Section title="Checkbox">
          <Checkbox color="primary" checked />
          <Checkbox color="success" checked />
          <Checkbox color="warning" />
          <Checkbox color="error" />
          <Checkbox color="error" checked disabled />
          <Checkbox disabled />
        </Section>

        <Section title="Select">
          <Select options={['Option 1', 'Option 2']} searchable />
          <Select options={['Option 1 success', 'Option 2 success']} color="success" searchable />
          <Select options={['Option 1 warning', 'Option 2 warning']} color="warning" />
          <Select options={['Option 1 error', 'Option 2 error']} color="error" />
          <Select
            options={['Option 1 error', 'Option 2 error']}
            disabled
            defaultValue={'Option 1 error'}
          />
        </Section>

        <Section title="Switch">
          <Switch color="primary" checked />
          <Switch color="success" checked />
          <Switch color="warning" />
          <Switch color="error" />

          <Switch disabled />
        </Section>

        <Section title="Toast">
          <Button onClick={() => addToast({ title: 'Toast', description: 'test' })}>
            Add Toast
          </Button>
          <Button
            onClick={() => addToast({ title: 'Toast', description: 'test', severity: 'primary' })}
          >
            Add Primary Toast
          </Button>
          <Button
            onClick={() => addToast({ title: 'Toast', description: 'test', severity: 'success' })}
          >
            Add Success Toast
          </Button>
          <Button
            onClick={() => addToast({ title: 'Toast', description: 'test', severity: 'warning' })}
          >
            Add Warning Toast
          </Button>
          <Button
            onClick={() => addToast({ title: 'Toast', description: 'test', severity: 'error' })}
          >
            Add Error Toast
          </Button>
        </Section>

        <Section title="Tabs">
          <div className="flex flex-col items-start gap-2">
            <span>Default</span>
            <Tabs className="rounded-md border border-zinc-400">
              {tabsData.map((tab) => (
                <Tabs.Tab key={tab.value} value={tab} className="p-2">
                  {tab.title}
                </Tabs.Tab>
              ))}
            </Tabs>

            <span>Vertical Tabs</span>
            <Tabs direction="vertical" className="rounded-md border border-zinc-400">
              {tabsData.map((tab) => (
                <Tabs.Tab key={tab.value} value={tab} className="p-2">
                  {tab.title}
                </Tabs.Tab>
              ))}
            </Tabs>
          </div>
        </Section>

        <Section title="Tag">
          <Tag color="default" label="Default Tag" />
          <Tag color="primary" label="Primary Tag" />
          <Tag color="success" label="Success Tag" />
          <Tag color="warning" label="Warning Tag" />
          <Tag color="error" label="Error Tag" />
        </Section>

        <Section title="Tooltip">
          <Tooltip color="default" content="Tooltip">
            <Button>Default</Button>
          </Tooltip>

          <Tooltip color="primary" content="Primary" placement="bottom">
            <Button color="primary">Primary Bottom</Button>
          </Tooltip>

          <Tooltip color="success" content="Success" placement="left">
            <Button color="success">Success left</Button>
          </Tooltip>

          <Tooltip color="warning" content="Tooltip" placement="right">
            <Button color="warning">Warning Right</Button>
          </Tooltip>

          <Tooltip color="error" content="Tooltip">
            <Button color="error">Error</Button>
          </Tooltip>
        </Section>
      </main>
    </div>
  );
}
