import React, { useState } from "react";
import {
  Box,
  Avatar,
  Heading,
  Text,
  Badge,
  Stack,
  Image,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { faker } from "@faker-js/faker";
import { ItemCount } from "../../index";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

function Rating({ rating }) {
  return (
    <Flex w="70px">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Flex>
  );
}

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
  const fakeName = faker.name.findName();
  const [quantityAdded, setQuantityAdded] = useState(0);

  return (
    <Box mb="375px" mt="90px">
      <Flex justifyContent="space-around" w="75%" m="35px auto 0">
        <Stack pt={2.5} align={"center"} height="inherit" w="30%" spacing="6">
          <Flex
            gap="10px"
            alignItems="center"
            alignContent="center"
            flexWrap="wrap"
          >
            <Heading
              fontSize={"2xl"}
              fontFamily={"body"}
              fontWeight={700}
              textAlign={"center"}
            >
              {name}
            </Heading>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              align={"center"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Badge fontWeight={600} fontSize={"md"}>
                {price}
                <FaEthereum
                  style={{ marginTop: "0 !important", padding: "0" }}
                />
              </Badge>
            </Stack>
            <Divider />
          </Flex>
          <Box align="center">
            <Rating rating={rating} />
            <Text
              color={"gray.500"}
              mt="6px"
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {category}
            </Text>
          </Box>
          <Text w="60%" align="center">
            {description}
          </Text>
          {quantityAdded === 0 ? (
            <ItemCount
              initial={1}
              id={id}
              name={name}
              price={price}
              setQuantityAdded={setQuantityAdded}
            />
          ) : (
            <Link to="/cart"> Terminar compra </Link>
          )}
        </Stack>
        <Box w="30%">
          <Image
            rounded={"xl"}
            height="350px"
            width="310px"
            borderRadius="80px"
            p="10px"
            objectFit={"scale-down"}
            marginTop="0"
            src={
              process.env.PUBLIC_URL + `../../../images/medieval-fair/${img}`
            }
          />
        </Box>
        <Flex justifyContent="space-evenly" w="30%">
          <Avatar
            name={fakeName}
            src={faker.internet.avatar(fakeName)}
          ></Avatar>
          <Flex direction="column">
            <Flex direction="column" gap="10px">
              <Heading as="h2" size="md">
                {fakeName}
              </Heading>
              <Divider />
              <Text size="sm">{faker.internet.email(fakeName)}</Text>
              <Text size="sm" as="em">
                {faker.name.jobType()}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ItemDetail;
