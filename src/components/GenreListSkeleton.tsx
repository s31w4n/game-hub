import { ListItem, Skeleton, SkeletonText, HStack } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Skeleton boxSize="32px" borderRadius={8} />
        <SkeletonText noOfLines={1} width={100} />
      </HStack>
    </ListItem>
  );
};

export default GameCardSkeleton;
