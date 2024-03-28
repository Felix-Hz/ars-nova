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
  Button,
} from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
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
  price,
  rating,
  img,
  userDetails,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  return (
    <Box mb="375px" mt="90px" className="item-detail-container-father">
      {/* Detail */}
      <Flex
        justifyContent="space-around"
        w="75%"
        m="35px auto 0"
        className="item-detail-container"
      >
        <Stack
          pt={2.5}
          align={"center"}
          height="inherit"
          w="30%"
          spacing="6"
          className="item-details"
        >
          {/* Image */}
          <Box w="30%" className="image-mobile">
            <Image
              rounded={"xl"}
              borderRadius="80px"
              p="10px"
              objectFit={"scale-down"}
              marginTop="0"
              src={
                process.env.PUBLIC_URL + `../../../images/medieval-fair/${img}`
              }
            />
          </Box>

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
              <Badge fontWeight={600} fontSize={"md"} className="price-badge">
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
          <Text w="60%" align="center" className="item-details-description">
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
            <Link to="/cart">
              <Button size="sm" bgColor="#e0ff00" m="8">
                Terminar compra
              </Button>
            </Link>
          )}
        </Stack>

        {/* Image */}
        <Box w="30%" className="image-desktop">
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

        {/* User */}
        <Flex
          justifyContent="space-evenly"
          w="30%"
          className="avatar-container"
        >
          <Avatar name={userDetails.name} src={userDetails.avatarSrc}></Avatar>
          <Flex direction="column">
            <Flex
              direction="column"
              gap="10px"
              className="avatar-details-container"
            >
              <Heading as="h2" size="md">
                {userDetails.name}
              </Heading>
              <Divider />
              <Text size="sm" className="avatar-email">
                {userDetails.email}
              </Text>
              <Text size="sm" as="em">
                {userDetails.jobType}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ItemDetail;
