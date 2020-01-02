import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";
import yelp from "../api/yelp";
import ReviewCard from "../components/ReviewCard";

const ReviewScreen = ({ navigation }) => {
  const [reviews, setReviews] = useState(null);
  const id = navigation.getParam("id");

  const getReviews = async id => {
    const response = await yelp.get(`/${id}/reviews`);
    setReviews(response.data.reviews);
  };

  useEffect(() => {
    getReviews(id);
  }, []);

  if (!reviews) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="rgb(0, 105, 210)" />
      </View>
    );
  }

  return (
    <>
      <Text style={styles.header}>Reviews</Text>
      <FlatList
        data={reviews}
        keyExtractor={review => review.id}
        renderItem={({ item }) => {
          return <ReviewCard item={item} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    alignSelf: "center",
    paddingVertical: 20
  }
});

export default ReviewScreen;
