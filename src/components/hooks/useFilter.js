import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

export function useFilter() {
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  function onSetFilter(data) {
    dispatch(setFilter(data));
  }

  return { filter, onSetFilter };
}
