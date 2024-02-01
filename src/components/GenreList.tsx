import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={getCroppedUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
