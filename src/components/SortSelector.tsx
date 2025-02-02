import { Menu, MenuList, MenuButton, Button, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore(
    (selector) => selector.gameQuery.sortOrder
  );

  const setSelectedSortOrder = useGameQueryStore(
    (selector) => selector.setSortOrder
  );

  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Data added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Released date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => setSelectedSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
