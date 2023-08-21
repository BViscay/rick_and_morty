import { useState } from "react";

const usePagination = (characters, cardsInPage = 5) => {
  const [actualPage, setActualPage] = useState(1);

  const indexOfLastCard = actualPage * cardsInPage;
  const indexOfFirstCard = indexOfLastCard - cardsInPage;
  const currentCards = characters.slice(indexOfFirstCard, indexOfLastCard);

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
    hasNextPage: indexOfLastCard < characters.length,
  };
};

export default usePagination;
