import { useState, useCallback, useEffect } from 'react';
import get from 'lodash/get';

const useGetMemberList = ({ didMountQuery = true, limit = 15, offset = 0 } = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getMemberList = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`https://randomuser.me/api?results=${limit}&page=${offset}`)
        .then((result) => result.json())
        .then((result) => result);
      const result = get(res, 'results');
      if (!result) {
        console.warn('[ERR]: result api undefined')
      }
      setLoading(false);
      setData(result);
      return {
        error: null,
        data: result
      };
    } catch (err) {
      setError(err);
      setLoading(false);
      console.warn(`[ERR]: ${err}`)
    }
  }, []);

  useEffect(() => {
    if (didMountQuery) {
      getMemberList();
    }
  }, []);

  return {
    loading,
    error,
    data,
    reFetchQuery: getMemberList,
    limit
  };
};

export default useGetMemberList;
