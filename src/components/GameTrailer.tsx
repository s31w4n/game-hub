import useTrailer from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const firstItem = data?.results[0];

  return firstItem ? (
    <video controls src={firstItem.data[480]} poster={firstItem.preview} />
  ) : null;
};

export default GameTrailer;
