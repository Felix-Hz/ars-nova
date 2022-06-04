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
        maxW={"225px"}
        maxH={"240px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        padding={"35px"}
      >
        <Box rounded={"lg"} pos={"relative"} height={"200px"}>
          <Image
            rounded={"lg"}
            height="70px"
            width={150}
            objectFit={"scale-down"}
            marginTop="0"
            src={require(`../../../images/medieval-fair/${img}`)}
          />
        </Box>
        <Stack pt={2.5} align={"center"} height="inherit">
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {category}
          </Text>
          <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
            {name}
          </Heading>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            align={"center"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Text fontWeight={400} fontSize={"md"}>
              {price}
            </Text>
            <FaEthereum style={{ marginTop: "0 !important", padding: "0" }} />
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default Item;