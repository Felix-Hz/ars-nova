// ------- IMPORTS ---------
import React, { useState } from "react";
import {
  Box,
  Input,
  Heading,
  Text,
  Stack,
  Flex,
  InputGroup,
  InputRightElement,
  Button,
  Badge,
} from "@chakra-ui/react";
import "./ItemCount.css";
import "./Button/Button";
import { MinusIcon, AddIcon, RepeatIcon } from "@chakra-ui/icons";

const ItemCount = ({ initial }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > 0) {
      setCount((value) => value - 1);
    }
  };

  const increment = () => {
    if (count >= 0) {
      setCount((value) => value + 1);
    }
  };

  const reset = () => {
    setCount(initial);
  };

  return (
    <Stack p="300px" direction={["column"]} alignItems="center" spacing="50px">
      <Heading as="h3">Count until your brain comes out.</Heading>
      <Flex alignItems="center" alignContent="center" gap="10px">
        <Button
          onClick={decrement}
          p="15px"
          borderRadius="45px"
          bgColor="#4000ff"
        >
          <MinusIcon color="#e0ff00" />
        </Button>
        <Badge p="50px" borderRadius="15px" colorScheme="purple">
          <Heading>{count}</Heading>
        </Badge>
        <Button
          onClick={increment}
          p="15px"
          borderRadius="45px"
          bgColor="#4000ff"
        >
          <AddIcon color="#e0ff00" />
        </Button>
      </Flex>
      <Button onClick={reset} maxW="30px" bgColor="#4000ff">
        <RepeatIcon color="#e0ff00" />
      </Button>
    </Stack>
  );
};

export default ItemCount;
