import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer WnMdG0lWacnQgb_GmcgnJ58kPcr8BA4-PTA0iTD9rYGu6Lx4Y5KeNLo3VcXYJjzTVhb6yrNmHG7kzC6RCAUG7k7cnKOC3P966pmAA2L_vnBvtzwLUGpgQYGO-3sDXnYx"
  }
});
