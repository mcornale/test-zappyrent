import FilterBar from './components/FilterBar/FilterBar';
import Logo from './components/Logo/Logo';
import PropertyItemList from './components/PropertyItems/PropertyItemList/PropertyItemList';
import Section from './components/Section/Section';

const App = () => {
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
          <p>3 alloggi trovati</p>
          <PropertyItemList />
        </Section>
      </main>
    </>
  );
};

export default App;
