// --------  IMPORTS --------
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

import { FaEthereum } from "react-icons/fa";

// -------- CSS IMPORTS --------
import "./Item.css";

function Item({ name, img, price, category }) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={15}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        padding={"35px"}
        overflow={"auto"}
      >
        <Box rounded={"lg"} pos={"relative"} height={"200px"}>
          <Image
            rounded={"lg"}
            height={200}
            width={282}
            objectFit={"scale-down"}
            src={require(`../../../images/medieval-fair/${img}`)}
          />
        </Box>
        <Stack pt={2.5} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {category}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {name}
          </Heading>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            align={"center"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Text fontWeight={800} fontSize={"lg"}>
              {price}
            </Text>
            <FaEthereum style={{ marginTop: "0 !important" }} />
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default Item;
