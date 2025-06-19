import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function DesignSystem() {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="w-24">Buttton:</div>
        <div className="flex gap-2">
          <Button>Primary Button</Button>
          <Button variant={'secondary'}>Secondary Button</Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-24">Input:</div>
        <div className="flex gap-2">
          <Input />
        </div>
      </div>
      <div className="bg-background">text</div>
    </div>
  );
}
