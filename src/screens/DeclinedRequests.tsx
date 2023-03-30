import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { useEffect } from 'react';
import { setPageTitle } from '../features/header/header.slice';

function DeclinedRequests() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Отклоненные заявки'));
  }, []);

  return <div>DeclinedRequests</div>;
}

export default DeclinedRequests;
