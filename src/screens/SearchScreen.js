import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  if (!results) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="rgb(0, 105, 210)" />
      </View>
    );
  }

  return (
    <>
      <SearchBar
        term={term}
        onChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          results={filterByPrice("$")}
          priceCategory="Cost Effective"
        />
        <ResultList results={filterByPrice("$$")} priceCategory="Bit Pricier" />
        <ResultList
          results={filterByPrice("$$$")}
          priceCategory="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
