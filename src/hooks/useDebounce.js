import React, { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const idTimer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(idTimer);
  }, [value]);
  return debounceValue;
};
