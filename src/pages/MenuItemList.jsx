import React from "react";
import { Box, Button, VStack } from "@chakra-ui/react";

const MenuItemList = () => {
  const menuItems = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 15 },
    { id: 3, name: "Item 3", price: 20 },
  ];

  return (
    <VStack spacing={4}>
      {menuItems.map((item) => (
        <Box key={item.id} p={5} shadow="md" borderWidth="1px">
          {item.name} - ${item.price}
        </Box>
      ))}
      <Button colorScheme="teal">Payment</Button>
    </VStack>
  );
};

export default MenuItemList;
