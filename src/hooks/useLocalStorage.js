import { useState, useEffect } from 'react';
import { load, save } from 'utils';

export const useLocalStorage = (key, defaultValue = null) => {
  const [state, setState] = useState(() => load(key) ?? defaultValue);

  useEffect(() => {
    save(key, state);
  }, [state, key]);

  return [state, setState];
};
