import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// interface PokeMonDetailsProps {
//   // Add your props here
// }
type DetailsType = {
  [key: string]: string | DetailsType;
};
export const PokeMonDetails: React.FC = () => {
  // Add your component logic here
  const [details, setDetails] = useState({} as DetailsType);
  const [isLoading, setIsLoading] = useState(false);
  const getPokeMonDetails = async (id: string) => {
    setIsLoading(true);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    setDetails(data);
    setIsLoading(false);
  };
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getPokeMonDetails(id);
    }
  }, []);
  return <div>{isLoading ? "...loading" : JSON.stringify(details)}</div>;
};
