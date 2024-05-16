import { Card, CardBody, Flex, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedUrl from '../services/image-url';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';
import { Game } from '../entities/Game';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height="100%">
      <Image src={getCroppedUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          height="98px"
        >
          <Heading fontSize="2xl">
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
          </Heading>
          <Emoji rating={game.rating_top} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;
