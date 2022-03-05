import { useEffect, useState } from 'react';
import Error from './components/Error/Error';
import FilterBar from './components/FilterBar/FilterBar';
import Logo from './components/Logo/Logo';
import PropertyItemList from './components/PropertyItems/PropertyItemList/PropertyItemList';
import Section from './components/Section/Section';

const App = () => {
  const [properties, setProperties] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>(
    []
  );
  const [onlyAvailableProperties, setOnlyAvailableProperties] = useState(false);
  const [errorFetchingProperties, setErrorFetchingProperties] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setIsFetching(true);
        setErrorFetchingProperties('');
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

        if (!response.ok) throw Error;

        const data = await response.json();
        if (
          data.length === 0 &&
          (onlyAvailableProperties || selectedPropertyTypes.length > 0)
        )
          setErrorFetchingProperties(
            'Non è stato possibile recuperare i dati sulle proprietà. Prova a rimuovere qualche filtro'
          );

        setProperties(data);
      } catch (err) {
        setErrorFetchingProperties(
          'Non è stato possibile recuperare i dati sulle proprietà'
        );
      } finally {
        setIsFetching(false);
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
          {errorFetchingProperties ? (
            <Error error={errorFetchingProperties} />
          ) : (
            <PropertyItemList isFetching={isFetching} properties={properties} />
          )}
        </Section>
      </main>
    </>
  );
};

export default App;
