import { useCallback, useState } from 'react';

const withPagination = (Component, initialStep) => (props) => {
  const [page, setPage] = useState(initialStep);
  const nextPage = useCallback(() => {
    setPage((page) => page + 1);
  }, []);

  const prevPage = useCallback(() => {
    if (page === 1) return;
    setPage((page) => page - 1);
  }, [page]);

  return (
    <Component
      page={page}
      nextPage={nextPage}
      prevPage={prevPage}
      setPage={setPage}
      {...props}
    />
  );
};

export default withPagination;
