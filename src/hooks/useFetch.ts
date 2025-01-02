import { useEffect, useState } from "react";

type FetchFunction<P, T> = (params?: P) => Promise<T>;

type UseFetchResult<T> = {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
};

export const useFetch = <T, P>(
  fetchFunction: FetchFunction<P, T>,
  params?: P
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const stringParams = new URLSearchParams(params as Record<string, string>).toString();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFunction(params);

        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunction, stringParams]);

  return { data, isLoading, error };
};
