'use client'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../_store/store';
import { fetchCaricatures } from '../_store/caricaturesSlice';

const useCaricatures = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.caricatures);

  useEffect(() => {
    dispatch(fetchCaricatures());
  }, [dispatch]);

  return data


};

export default useCaricatures;