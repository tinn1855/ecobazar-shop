import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { HeadingH1 } from '../ui/heading-h1';
import { HeadingH2 } from '../ui/heading-h2';
import { HeadingH3 } from '../ui/heading-h3';
import { HeadingH4 } from '../ui/heading-h4';
import { Input } from '../ui/input';

export function DesignSystem() {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="w-24">Buttton:</div>
        <div className="flex gap-2">
          <Button>Primary</Button>
          <Button variant={'secondary'}>Secondary</Button>
          <Button variant={'ghost'}>Ghost</Button>
          <Button variant={'black'}>Black</Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-24">Input:</div>
        <div className="flex gap-2">
          <Input />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-24">Badge:</div>
        <div className="flex gap-2">
          <Badge>Primary</Badge>
          <Badge variant={'orange'}>Orange</Badge>
          <Badge variant={'destructive'}>Destructive</Badge>
          <Badge variant={'black'}>Black</Badge>
          <Badge variant={'blue'}>Blue</Badge>
          <Badge variant={'red'}>Red</Badge>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-24">Heading:</div>
        <div className="flex flex-col gap-2">
          <HeadingH1>Heading 1</HeadingH1>
          <HeadingH2>Heading 2</HeadingH2>
          <HeadingH3>Heading 3</HeadingH3>
          <HeadingH4>Heading 4</HeadingH4>
        </div>
      </div>
    </div>
  );
}
