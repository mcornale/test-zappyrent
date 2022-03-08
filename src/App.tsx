import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import PropertyItemDetailsPage from './pages/PropertyItemDetailsPage';
import PropertyItemListPage from './pages/PropertyItemListPage';

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route path='/' element={<PropertyItemListPage />}>
          <Route path=':propertyTitle' element={<PropertyItemDetailsPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
