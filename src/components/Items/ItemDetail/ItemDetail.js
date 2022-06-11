import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

const ItemDetail = ({
  id,
  name,
  description,
  category,
  origin,
  price,
  size,
  rating,
  img,
}) => {
  return (
    <Box>
      <Heading>Detalle</Heading>
      {name}
      <Image src={img} />
    </Box>
  );
};

export default ItemDetail;
