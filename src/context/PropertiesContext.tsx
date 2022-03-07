import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { PropertyItemType } from '../types/properties';

type PropertiesContextProps = null | {
  properties: PropertyItemType[];
  selectedPropertyTypes: string[];
  setSelectedPropertyTypes: Dispatch<SetStateAction<string[]>>;
  showOnlyAvailableProperties: boolean;
  setShowOnlyAvailableProperties: Dispatch<SetStateAction<boolean>>;
  isFetching: boolean;
  errorFetchingProperties: string;
};

type PropertiesContextProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const PropertiesContext = createContext<PropertiesContextProps>(null);

const PropertiesContextProvider = (props: PropertiesContextProviderProps) => {
  const { children } = props;

  const [properties, setProperties] = useState([]);

  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>(
    []
  );
  const [showOnlyAvailableProperties, setShowOnlyAvailableProperties] =
    useState(false);

  const [isFetching, setIsFetching] = useState(false);
  const [errorFetchingProperties, setErrorFetchingProperties] = useState('');

  const contextValue = {
    properties,
    selectedPropertyTypes,
    setSelectedPropertyTypes,
    showOnlyAvailableProperties,
    setShowOnlyAvailableProperties,
    isFetching,
    errorFetchingProperties,
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setIsFetching(true);
        setErrorFetchingProperties('');
        let queryParams: string[] = [];

        if (showOnlyAvailableProperties) queryParams.push('available=true');
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
          (showOnlyAvailableProperties || selectedPropertyTypes.length > 0)
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
  }, [selectedPropertyTypes, showOnlyAvailableProperties]);

  return (
    <PropertiesContext.Provider value={contextValue}>
      {children}
    </PropertiesContext.Provider>
  );
};

export { PropertiesContext, PropertiesContextProvider };
