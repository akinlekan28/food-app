import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const id = navigation.getParam("id");

  const getResult = async id => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (err) {
      setErrorMessage("Something went wrong");
      setTimeout(function() {
        setErrorMessage("");
      }, 10000);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return <Text>{errorMessage}</Text>;
  }

  return (
    <ScrollView>
      <>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text style={styles.resultName}>{result.name}</Text>
        <Text style={styles.textStyle}>Country: {result.location.country}</Text>
        <Text style={styles.textStyle}>State: {result.location.state}</Text>
        <Text style={styles.textStyle}>City: {result.location.city}</Text>
        <Text style={styles.textStyle}>
          Address: {result.location.display_address}
        </Text>
        <View style={styles.statusStyle}>
          <Text style={styles.textStyle}>Status: </Text>
          {result.hours[0].is_open_now ? (
            <Text style={styles.open}>Open</Text>
          ) : (
            <Text style={styles.close}>Closed</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.textStyle}
          onPress={() => navigation.navigate("Review", { id: result.id })}
        >
          <Text style={styles.reviewBtn}>View Reviews</Text>
        </TouchableOpacity>
        <Text style={styles.galleryStyle}>Photo Gallery</Text>
        {result.photos.map((photo, index) => (
          <Image source={{ uri: photo }} style={styles.image} key={index} />
        ))}
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    borderRadius: 6,
    alignSelf: "center",
    marginBottom: 20
  },
  resultName: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 15
  },
  textStyle: {
    paddingVertical: 8,
    marginHorizontal: 15,
    fontSize: 16
  },
  galleryStyle: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 8
  },
  statusStyle: {
    flexDirection: "row"
  },
  open: {
    backgroundColor: "rgb(45, 225, 165)",
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 6,
    fontSize: 20
  },
  close: {
    backgroundColor: "rgb(255, 0, 90)",
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 6,
    fontSize: 20
  },
  reviewBtn: {
    backgroundColor: "rgb(0, 105, 210)",
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
    alignSelf: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginVertical: 20,
    borderRadius: 6
  }
});

export default ResultShowScreen;
