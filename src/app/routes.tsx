import { Route, Routes } from 'react-router-dom';
import { Home } from 'src/components/pages/home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<>Not found</>} />
    </Routes>
  );
}
