import { useInfiniteQuery } from '@tanstack/react-query';
import { Platform } from './usePlatforms';
import ApiClient, { FetchResponse } from '../services/api-client';
import useGameQueryStore from '../store';

export interface Game {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

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
