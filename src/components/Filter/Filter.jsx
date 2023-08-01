import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};
