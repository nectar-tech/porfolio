import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CaseStudy from '@/pages/CaseStudy';

export default function App(): React.ReactNode {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CaseStudy />} />
      </Routes>
    </Router>
  );
}
