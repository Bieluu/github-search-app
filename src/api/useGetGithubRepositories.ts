import {useCallback, useState} from 'react';
import {GetGithubRepositoriesApi} from '@typings/api/getGithubRepositoriesApi';
import {queryStates} from '@typings/api/queryStates';
import {Alert} from 'react-native';

const GITHUB_SEARCH_REPOSITORIES_API_URL =
  'https://api.github.com/search/repositories';

const ITEMS_PER_PAGE = 30;

const INITIAL_RESULT_STATE: GetGithubRepositoriesApi = {
  incomplete_results: false,
  items: [],
  total_count: 0,
};

export const useGetGithubRepositories = () => {
  const [results, setResults] =
    useState<GetGithubRepositoriesApi>(INITIAL_RESULT_STATE);
  const [page, setPage] = useState(0);
  const [queryState, setQueryState] = useState(queryStates.UNTOUCHED);

  const getRepositories = useCallback(
    async (
      query: string,
      pageToSearch: number,
    ): Promise<GetGithubRepositoriesApi> => {
      setQueryState(queryStates.PENDING);
      const result = await fetch(
        `${GITHUB_SEARCH_REPOSITORIES_API_URL}?q=${query}&page=${pageToSearch}&sort=stars&per_page=${ITEMS_PER_PAGE}`,
        {headers: {accept: 'application/vnd.github+json'}},
      );
      if (!result.ok) {
        setQueryState(queryStates.REJECTED);
        Alert.alert(
          `An error occurred,\nHttp error code: ${result.status.toString()}`,
        );
        return INITIAL_RESULT_STATE;
      }
      setQueryState(queryStates.FULFILLED);
      return result.json();
    },
    [],
  );

  const getNextPage = useCallback(
    async (query: string) => {
      setPage(page + 1);
      const response = await getRepositories(query, page + 1);
      setResults({...response, items: [...results.items, ...response.items]});
    },
    [getRepositories, page, results.items],
  );

  const performInitialQuery = useCallback(
    async (query: string) => {
      setPage(1);
      const response = await getRepositories(query, 1);
      setResults(response);
    },
    [getRepositories],
  );

  const clearQuery = useCallback(() => {
    setResults(INITIAL_RESULT_STATE);
    setQueryState(queryStates.UNTOUCHED);
  }, []);

  return {
    getNextPage,
    results,
    performInitialQuery,
    queryState,
    clearQuery,
    isPending: queryState === queryStates.PENDING,
  };
};
