import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.ratings}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold"
  },
  ratings: {
    marginTop: 5
  }
});

export default ResultsDetails;
