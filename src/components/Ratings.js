import React from "react";
import { Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Ratings = ({ rating }) => {
  return (
    <>
      <Text>
        {rating === 1 ? (
          <Text>
            <AntDesign name="star" style={styles.styleIcon} />
          </Text>
        ) : null}
        {rating === 2 ? (
          <Text>
            <AntDesign name="star" style={styles.styleIcon} />
            <AntDesign name="star" style={styles.styleIcon} />
          </Text>
        ) : null}
        {rating === 3 ? (
          <Text>
            <AntDesign name="star" style={styles.styleIcon} />
            <AntDesign name="star" style={styles.styleIcon} />
            <AntDesign name="star" style={styles.styleIcon} />
          </Text>
        ) : null}
        {rating === 4 ? (
          <Text>
            <AntDesign name="star" style={styles.styleIcon} />
            <AntDesign name="star" style={styles.styleIcon} />
            <AntDesign name="star" style={styles.styleIcon} />
            <AntDesign name="star" style={styles.styleIcon} />
          </Text>
        ) : null}
        {rating === 5 ? (
          <Text>
            <AntDesign name="star" style={styles.styleIcon} />{" "}
            <AntDesign name="star" style={styles.styleIcon} />{" "}
            <AntDesign name="star" style={styles.styleIcon} />
            <AntDesign name="star" style={styles.styleIcon} />{" "}
            <AntDesign name="star" style={styles.styleIcon} />
          </Text>
        ) : null}{" "}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  styleIcon: {
    color: "rgb(240, 195, 15)",
    paddingTop: 20,
    fontSize: 20
  }
});

export default Ratings;
