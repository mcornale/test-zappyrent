import { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import Logo from './components/Logo/Logo';
import PropertyItemList from './components/PropertyItems/PropertyItemList/PropertyItemList';
import Section from './components/Section/Section';

const App = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          'https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties'
        );

        if (!response.ok)
          throw new Error(
            'Non è stato possibile recuperare i dati sulle proprietà'
          );

        const data = await response.json();
        setProperties(data);
      } catch (e) {
        alert(e);
      }
    };

    fetchProperties();
  }, []);

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
          <p>{properties.length} alloggi trovati</p>
          <PropertyItemList properties={properties} />
        </Section>
      </main>
    </>
  );
};

export default App;
