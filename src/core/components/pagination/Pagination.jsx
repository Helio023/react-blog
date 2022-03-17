const Pagination = ({ totalPages, activePage, onChange }) => {
  const items = Array.from(Array(totalPages).keys());
  const previousClass =
    totalPages > 0 && activePage > 0
      ? 'pagination__prev active'
      : 'pagination__prev';
  const nextClass =
    activePage + 1 < totalPages
      ? 'pagination__next active'
      : 'pagination__next';

  return (
    <div className='pagination'>
      <div className={previousClass} onClick={() => onChange(activePage - 1)}>
        prev
      </div>
      {items.map((item) => (
        <div
          key={item}
          className={`pagination__page ${activePage === item ? 'active' : ''}`}
          onClick={() => onChange(item)}
        >
          {item + 1}
        </div>
      ))}
      <div className={nextClass} onClick={() => onChange(activePage + 1)}>
        next
      </div>
    </div>
  );
};

export default Pagination;
