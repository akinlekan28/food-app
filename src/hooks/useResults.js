import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "us"
        }
      });
      setResult(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong!");

      setTimeout(function() {
        setErrorMessage("");
      }, 3000);
    }
  };

  useEffect(() => {
    searchApi("");
  }, []);

  return [searchApi, results, errorMessage];
};
