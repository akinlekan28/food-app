import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ratings from "../components/Ratings";

const ReviewCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.userHeader}>{item.user.name}</Text>
      {item.user.image_url ? (
        <Image
          source={{ uri: item.user.image_url }}
          style={styles.reviewImage}
        />
      ) : null}
      <Text style={styles.commentHeader}>Comment: </Text>
      <Text style={styles.textStyle}>{item.text}</Text>
      <Text style={styles.ratingHeader}>
        Rating: <Ratings rating={item.rating} />
      </Text>
      <Text style={styles.timeHeader}>Date: {item.time_created}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    backgroundColor: "rgb(210, 210, 225)",
    padding: 20,
    marginVertical: 12,
    borderRadius: 6
  },
  textStyle: {
    fontSize: 16
  },
  commentHeader: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 15
  },
  ratingHeader: {
    fontWeight: "bold",
    paddingTop: 12,
    fontSize: 20,
    paddingBottom: 10
  },
  reviewImage: {
    height: 200,
    width: 200,
    alignSelf: "center",
    borderRadius: 200 / 2
  },
  userHeader: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    alignSelf: "center"
  },
  timeHeader: {
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10
  }
});

export default ReviewCard;
