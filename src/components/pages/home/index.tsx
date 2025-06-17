import { Header } from '@/components/common/header';
import { TopBar } from '@/components/common/top-bar';

export function Home() {
  return (
    <div>
      <TopBar />
      <div className="border-b-2"></div>
      <Header />
    </div>
  );
}
