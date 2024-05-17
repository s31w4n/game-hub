import { useInfiniteQuery } from '@tanstack/react-query';
import ApiClient, { FetchResponse } from '../services/api-client';
import useGameQueryStore from '../store';
import Game from '../entities/Game';

const apiClient = new ApiClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore((selector) => selector.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24 Hours
  });
};

export default useGames;
