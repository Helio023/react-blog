import { Close } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../../redux/displayAnimation';

const Search = ({ close }) => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(search(term));
  }, [dispatch, term]);

  return (
    <div className='search shadow '>
      <Close className='search__close' onClick={close} />
      <input
        disabled
        type='search'
        placeholder='Funcionalidade em andamento...😴'
        className='search__input input'
        value={term}
        onChange={handleSearchTerm}
      />
    </div>
  );
};

export default Search;
