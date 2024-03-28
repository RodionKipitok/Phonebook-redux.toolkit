import '../Filter/filter.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../../redux/actions';

export default function Filter() {
  const filterValue = useSelector(state => state.filter.name);
  const dispatch = useDispatch();
  return (
    <>
      <p className="text">Find contacts by name</p>
      <input
        onChange={e => {
          dispatch(filterContact(e.target.value));
        }}
        className="inputFilter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
        "
        required
        value={filterValue}
      />
    </>
  );
}
