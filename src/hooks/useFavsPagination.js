import { useState } from "react";

const useFavsPagination = (favorites, cardsInPage = 5) => {
  const [actualPage, setActualPage] = useState(1);

  const indexOfLastCard = actualPage * cardsInPage;
  const indexOfFirstCard = indexOfLastCard - cardsInPage;
  const currentCards = favorites.slice(indexOfFirstCard, indexOfLastCard);

  const nextPage = () => {
    setActualPage(actualPage + 1);
  };

  const prevPage = () => {
    setActualPage(actualPage - 1);
  };

  return {
    currentCards,
    nextPage,
    prevPage,
    hasPreviousPage: actualPage > 1,
    hasNextPage: indexOfLastCard < favorites.length,
  };
};

export default useFavsPagination;
