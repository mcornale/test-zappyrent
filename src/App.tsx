import { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import Logo from './components/Logo/Logo';
import PropertyItemList from './components/PropertyItems/PropertyItemList/PropertyItemList';
import Section from './components/Section/Section';

const App = () => {
  const [properties, setProperties] = useState([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>(
    []
  );
  const [onlyAvailableProperties, setOnlyAvailableProperties] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        let queryParams: string[] = [];

        if (onlyAvailableProperties) queryParams.push('available=true');
        if (selectedPropertyTypes.length > 0)
          selectedPropertyTypes.forEach((selectedPropertyType: string) => {
            queryParams.push(`type=${selectedPropertyType}`);
          });

        const response = await fetch(
          `https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties?${queryParams.join(
            '&'
          )}`
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
  }, [selectedPropertyTypes, onlyAvailableProperties]);

  return (
    <>
      <header>
        <Section>
          <Logo />
          <FilterBar
            setSelectedPropertyTypes={setSelectedPropertyTypes}
            setOnlyAvailableProperties={setOnlyAvailableProperties}
          />
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
