import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Jaffa",
    icon,
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-p/17/00/ca/71/img-20190207-124546-096.jpg"
    ],
    address = "Plac Solny",
    isOpenNow = true,
    rating = 5,
    isClosedTemp = false
  } = restaurant;
  return (
    <>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ uri: photos[0] }}
        />
        <Title>
          {name} {address}
        </Title>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" }
});
