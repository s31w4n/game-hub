import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkeleton';
import useGameQueryStore from '../store';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  const selectedGenreId = useGameQueryStore(
    (selector) => selector.gameQuery.genreId
  );

  const setSelectedGenreId = useGameQueryStore(
    (selector) => selector.setGenreId
  );

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginY={5} lineHeight={9}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedUrl(genre.image_background)}
              />
              <Button
                variant="link"
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
