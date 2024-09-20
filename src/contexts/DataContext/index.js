import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// Création du contexte pour les données
// Creation of the context for the data
const DataContext = createContext({});

// Définition de l'API pour charger les données
// Definition of the API to load the data
export const api = {
  loadData: async () => {
    const json = await fetch("/events.json");
    console.log("json", json);
    return json.json();
  },
};
// Composant fournisseur de données
// Data provider component
export const DataProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  console.log("data_DataContext", data);
  
  // Fonction pour récupérer les données
  // Function to get the data
  const getData = useCallback(async () => {
    try {
      setData(await api.loadData());
    } catch (err) {
      setError(err);
    }
  }, []);

  // Utilisation de useEffect pour charger les données au montage du composant
  // Use of useEffect to load the data when the component is mounted
  useEffect(() => {
    if (data) return;
    getData();
  });
  
  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
// Hook personnalisé pour utiliser les données du context
// Custom hook to use data from the context
export const useData = () => useContext(DataContext);

export default DataContext;
