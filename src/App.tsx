import FilterBar from './components/FilterBar/FilterBar';
import Logo from './components/Logo/Logo';
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
    </>
  );
};

export default App;
