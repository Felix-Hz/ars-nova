// ------- IMPORTS ---------
import React, { useState, useContext } from "react";
import { Heading, Stack, Flex, Button, Badge, Box } from "@chakra-ui/react";
import "./ItemCount.css";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import CartContext from "../../../context/CartContext";

const ItemCount = ({ initial, id, price, name, setQuantityAdded }) => {
  const [count, setCount] = useState(initial);

  const { addItem } = useContext(CartContext);

  const decrement = () => {
    if (count > 1) {
      setCount((value) => value - 1);
    }
  };

  const increment = () => {
    if (count >= 1) {
      setCount((value) => value + 1);
    }
  };

  const handleOnAdd = (c) => {
    console.log(`Se agregaron ${c} ${name}`);
    addItem([{ id, name, price, c }]);
    setQuantityAdded(c);
  };

  return (
    <Stack direction={["column"]} alignItems="center">
      <Flex alignItems="center" alignContent="center" gap="5px" mb="12px">
        <Button
          onClick={decrement}
          borderRadius="45px"
          size="xs"
          bgColor="#4000ff"
        >
          <MinusIcon color="#e0ff00" />
        </Button>
        <Badge p="10px" size="md" borderRadius="6px" colorScheme="purple">
          <Heading as="h3" size="sm">
            {count}
          </Heading>
        </Badge>
        <Button
          onClick={increment}
          borderRadius="45px"
          bgColor="#4000ff"
          size="xs"
        >
          <AddIcon color="#e0ff00" />
        </Button>
      </Flex>
      <Button onClick={handleOnAdd(count)} size="sm" bgColor="#e0ff00">
        Add to cart
      </Button>
    </Stack>
  );
};

export default ItemCount;
