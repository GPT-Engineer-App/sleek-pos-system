import React, { useState } from "react";
import { Container, VStack, HStack, Box, Text, Button, IconButton, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaTrash, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const toast = useToast();

  const addItem = (item) => {
    setItems([...items, item]);
    toast({
      title: "Item added.",
      description: `${item.name} has been added to the cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    toast({
      title: "Item removed.",
      description: "Item has been removed from the cart.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} w="100%">
        <HStack w="100%" justifyContent="space-between">
          <Text fontSize="3xl" fontWeight="bold">
            POS System
          </Text>
          <FaShoppingCart size="2em" />
        </HStack>
        <Button colorScheme="teal" size="lg" w="100%" onClick={() => navigate("/menu")}>
          Open Items
        </Button>
        <VStack w="100%" spacing={4} alignItems="flex-start">
          {items.map((item, index) => (
            <HStack key={index} w="100%" justifyContent="space-between" p={2} borderWidth={1} borderRadius="md">
              <Text>{item.name}</Text>
              <HStack>
                <Text>${item.price.toFixed(2)}</Text>
                <IconButton aria-label="Remove Item" icon={<FaTrash />} onClick={() => removeItem(index)} />
              </HStack>
            </HStack>
          ))}
        </VStack>
        <HStack w="100%" justifyContent="space-between" p={4} borderWidth={1} borderRadius="md">
          <Text fontSize="xl" fontWeight="bold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            ${calculateTotal()}
          </Text>
        </HStack>
        <Button colorScheme="teal" size="lg" w="100%">
          Payment
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
