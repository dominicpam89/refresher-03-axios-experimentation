import { useCallback, useEffect, useState } from 'react';

interface StorageItem<T> {
  key: string;
  initialValue: T;
}

type NewVal<T> = T | ((t: T) => T);

export function useLocalStorage<T>({ key, initialValue }: StorageItem<T>) {
  const [storageVal, setStorageVal] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(error || `no item found in storage with key: ${key}, defer to default Value`);
      return initialValue;
    }
  });

  const setRealStorageVal = useCallback(
    (newVal: NewVal<T>) => {
      try {
        const val = newVal instanceof Function ? newVal(storageVal) : newVal;
        const serialized = JSON.stringify(val);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, serialized);
        }
        setStorageVal(val);
      } catch (error) {
        console.error('Error setting localStorage key');
        throw error;
      }
    },
    [key, storageVal]
  );

  return [storageVal, setRealStorageVal] as const;
}
