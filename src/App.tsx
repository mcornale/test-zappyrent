import { AnimatePresence } from 'framer-motion';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import FilterBar from './components/FilterBar/FilterBar';
import Logo from './components/Logo/Logo';
import Modal from './components/Modal/Modal';
import PropertyItem from './components/PropertyItems/PropertyItem/PropertyItem';
import PropertyItemList from './components/PropertyItems/PropertyItemList/PropertyItemList';
import Section from './components/Section/Section';

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route
          path='/'
          element={
            <>
              <header>
                <Section>
                  <Logo />
                  <FilterBar />
                </Section>
              </header>
              <main>
                <Section>
                  <PropertyItemList />
                </Section>
                <Outlet />
              </main>
            </>
          }
        >
          <Route
            path=':propertyTitle'
            element={
              <Modal>
                <PropertyItem />
              </Modal>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
