import { DesignSystem } from '@/components/design-system';
import { Home } from '@/components/pages/home';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/design-system" element={<DesignSystem />} />
      <Route path="*" element={<>Not found</>} />
    </Routes>
  );
}
