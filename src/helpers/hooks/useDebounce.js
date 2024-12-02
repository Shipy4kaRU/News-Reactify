import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { keywordsSliceActions } from "../../store/keywordsSlice";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
      dispatch(keywordsSliceActions.setKeywordsState(value));
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, dispatch]);

  return debounceValue;
};

export default useDebounce;
