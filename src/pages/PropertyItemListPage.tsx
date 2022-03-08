import { Outlet } from 'react-router-dom';
import FilterBar from '../components/FilterBar/FilterBar';
import Logo from '../components/Logo/Logo';
import PropertyItemList from '../components/PropertyItems/PropertyItemList/PropertyItemList';
import Section from '../components/Section/Section';

const PropertyItemListPage = () => {
  return (
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
  );
};

export default PropertyItemListPage;
