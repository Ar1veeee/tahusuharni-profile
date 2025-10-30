import { useState } from 'react';

export const useNavigation = (initialPage: string = 'Home') => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { currentPage, navigateTo };
};