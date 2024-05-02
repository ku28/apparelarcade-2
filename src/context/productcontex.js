import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const allProd = [
  {
    "id": "thapaserialnoa",
    "name": "Expression Unleashed",
    "company": "Highlander",
    "price": 99900,
    "colors": [
      "#22D3EF",
      "#CDD0D0"
    ],
    "image": "https://getketchadmin.getketch.com/product/8909107017985/660/HLTS004463_1.JPG",
    "description": "Highlander Men White Printed Round Neck T-Shirts",
    "category": "men",
    "featured": true
  },
  {
    "id": "thapaserialnob",
    "name": "I Paused My",
    "company": "Highlander",
    "price": 79900,
    "colors": [
      "#000000",
      "#CDD0D0"
    ],
    "image": "https://getketchadmin.getketch.com/product/8905980931677/660/HLTS004290_1.JPG",
    "description": "Highlander Men Mauve Printed Round Neck T-Shirts",
    "category": "men",
    "shipping": true,
    "featured": true
  },
  {
    "id": "thapaserialnoc",
    "name": "Elation",
    "company": "Highlander",
    "price": 69900,
    "colors": [
      "#22D3EF",
      "#CDD0D0",
      "#000000"
    ],
    "image": "https://getketchadmin.getketch.com/product/8909107017824/660/HLTS004459_1.JPG",
    "description": "Highlander Men Pink Printed Round Neck T-Shirts",
    "category": "men"
  },
  {
    "id": "thapaserialnod",
    "name": "Faded Shirt",
    "company": "Highlander",
    "price": 74900,
    "colors": [
      "#000000",
      "#CDD0D0"
    ],
    "image": "https://getketchadmin.getketch.com/product/8909107023771/660/HLOS000186_1.JPG",
    "description": "Highlander Men Brown Faded Oversized Fit Casual Shirts",
    "category": "men",
    "shipping": true
  },
  {
    "id": "thapaserialnoe",
    "name": "Fitted Top",
    "company": "Tokyo Talkies",
    "price": 99900,
    "colors": [
      "#22D3EF",
      "#CDD0D0"
    ],
    "image": "https://getketchadmin.getketch.com/product/8905980705629/660/TTCT000245_1.jpg",
    "description": "Tokyo Talkies Women Green Solid Fitted Tops",
    "category": "women",
    "shipping": true
  },
  {
    "id": "thapaserialnof",
    "name": "Regular Top",
    "company": "Tokyo Talkies",
    "price": 109900,
    "colors": [
      "#CDD0D0"
    ],
    "image": "https://getketchadmin.getketch.com/product/8905980780572/660/TTCE000907_2.jpg",
    "description": "Tokyo Talkies Women Blue Solid Regular Tops",
    "category": "women",
    "shipping": true
  },
  {
    "id": "thapaserialnog",
    "name": "Fit And Flare",
    "company": "Tokyo Talkies",
    "price": 89900,
    "colors": [
      "#CDD0D0",
      "#000000"
    ],
    "image": "https://getketchadmin.getketch.com/product/8905980984482/660/VPA1000019_2.jpg",
    "description": "Tokyo Talkies Women White Printed Fit And Flare Dresses",
    "category": "women",
    "shipping": true
  },
  {
    "id": "thapaserialnoh",
    "name": "Blue Bodysuit",
    "price": 79900,
    "company": "Tokyo Talkies",
    "colors": [
      "#000000",
      "#ff0000"
    ],
    "image": "https://getketchadmin.getketch.com/product/8905980526491/660/TTBT000012_1.jpg",
    "description": "Tokyo Talkies Women Navy Blue Solid Bodysuit",
    "category": "women",
    "featured": true,
    "shipping": true
  },
  {
    "id": "thapaserialnoi",
    "name": "Magical",
    "price": 74900,
    "company": "Hoop",
    "colors": [
      "#000000",
      "#ff0000",
      "#22D3EF"
    ],
    "image": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710828156_6661532.jpg?format=webp&w=480&dpr=1.3",
    "description": "Girls Cotton T-shirts",
    "category": "kids",
    "shipping": true
  },
  {
    "id": "thapaserialnoj",
    "name": "Peppa Pig",
    "company": "Hoop",
    "price": 59900,
    "colors": [
      "#ff0000",
      "#000000"
    ],
    "image": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710913886_8590486.jpg?format=webp&w=480&dpr=1.3",
    "description": "Girls Full Sleeves Cotton T-shirts",
    "category": "kids"
  },
  {
    "id": "thapaserialnok",
    "name": "Tom & Jerry",
    "company": "Hoop",
    "price": 64900,
    "colors": [
      "#000000",
      "#CDD0D0"
    ],
    "image": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713797574_3796304.jpg?format=webp&w=480&dpr=1.3",
    "description": "Boys Cotton T-shirt",
    "category": "kids"
  },
  {
    "id": "thapaserialnol",
    "name": "Mr. T-Rex",
    "price": 69900,
    "company": "Hoop",
    "colors": [
      "#22D3EF",
      "#000000"
    ],
    "image": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708929801_8946674.jpg?format=webp&w=480&dpr=1.3",
    "description": "Boys Cotton T-shirt",
    "category": "kids"
  }
];

let a = { "id": "thapaserialnoa", "name": "Expression Unleashed", "company": "Highlander", "price": 99900, "colors": ["#22D3EF", "#CDD0D0"], "description": "Highlander Men White Printed Round Neck T-Shirts", "category": "men", "featured": true, "stock": 5, "reviews": 58, "stars": 4.8, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8909107017985/660/HLTS004463_1.JPG", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8909107017985/660/HLTS004463_3.JPG", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8909107017985/660/HLTS004463_4.JPG", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8909107017985/660/HLTS004463_5.JPG", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let b = { "id": "thapaserialnob", "name": "I Paused My", "company": "Highlander", "price": 79900, "colors": ["#000000", "#CDD0D0"], "description": "Highlander Men Mauve Printed Round Neck T-Shirts", "category": "women", "featured": true, "shipping": true, "stock": 10, "reviews": 28, "stars": 5.0, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980931677/660/HLTS004290_1.JPG", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980931677/660/HLTS004290_2.JPG", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980931677/660/HLTS004290_4.JPG", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980931677/660/HLTS004290_6.JPG", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let c = { "id": "thapaserialnoc", "name": "Elation", "company": "Highlander", "price": 69900, "colors": ["#22D3EF", "#CDD0D0", "#000000"], "description": "Highlander Men Pink Printed Round Neck T-Shirts", "category": "men", "stock": 12, "reviews": 28, "stars": 4.2, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8909107017824/660/HLTS004459_1.JPG", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8909107017824/660/HLTS004459_2.JPG", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8909107017824/660/HLTS004459_4.JPG", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8909107017824/660/HLTS004459_6.JPG", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let d = { "id": "thapaserialnod", "name": "Faded Shirt", "company": "Highlander", "price": 74900, "colors": ["#000000", "#CDD0D0"], "description": "Highlander Men Brown Faded Oversized Fit Casual Shirts", "category": "men", "shipping": true, "stock": 6, "reviews": 28, "stars": 4.5, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8909107023771/660/HLOS000186_1.JPG", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8909107023771/660/HLOS000186_2.JPG", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8909107023771/660/HLOS000186_3.JPG", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8909107023771/660/HLOS000186_5.JPG", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let e = { "id": "thapaserialnoe", "name": "Fitted Top", "company": "Tokyo Talkies", "price": 99900, "colors": ["#22D3EF", "#CDD0D0"], "description": "Tokyo Talkies Women Green Solid Fitted Tops", "category": "women", "shipping": true, "stock": 4, "reviews": 28, "stars": 2.8, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980705629/660/TTCT000245_1.jpg", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980705629/660/TTCT000245_2.jpg", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980705629/660/TTCT000245_4.jpg", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980705629/660/TTCT000245_5.jpg", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let f = { "id": "thapaserialnof", "name": "Regular Top", "company": "Tokyo Talkies", "price": 109900, "colors": ["#CDD0D0"], "description": "Tokyo Talkies Women Blue Solid Regular Tops", "category": "women", "shipping": true, "stock": 6, "reviews": 12, "stars": 4.1, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980780572/660/TTCE000907_2.jpg", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980780572/660/TTCE000907_1.jpg", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980780572/660/TTCE000907_4.jpg", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980780572/660/TTCE000907_5.jpg", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let g = { "id": "thapaserialnog", "name": "Fit and Flare", "company": "Tokyo Talkies", "price": 89900, "colors": ["#CDD0D0", "#000000"], "description": "Tokyo Talkies Women White Printed Fit And Flare Dresses", "category": "kids", "shipping": true, "stock": 6, "reviews": 23, "stars": 3.7, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980984482/660/VPA1000019_2.jpg", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980984482/660/VPA1000019_1.jpg", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980984482/660/VPA1000019_4.jpg", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980984482/660/VPA1000019_6.jpg", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let h = { "id": "thapaserialnoh", "name": "Blue Bodysuit", "price": 79900, "company": "Tokyo Talkies", "colors": ["#000000", "#ff0000"], "description": "Tokyo Talkies Women Navy Blue Solid Bodysuit", "category": "kids", "featured": true, "shipping": true, "stock": 6, "reviews": 23, "stars": 4.2, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980526491/660/TTBT000012_1.jpg", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980526491/660/TTBT000012_2.jpg", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": " https://getketchadmin.getketch.com/product/8905980526491/660/TTBT000012_4.jpg", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://getketchadmin.getketch.com/product/8905980526491/660/TTBT000012_5.jpg", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let i = {
  "id": "thapaserialnoi", "name": "Magical", "price": 74900, "company": "Hoop", "colors": ["#000000", "#ff0000", "#22D3EF"], "description": "Girls Cotton T-shirt", "category": "kids", "shipping": true, "stock": 6, "reviews": 23, "stars": 4.6, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710828156_6661532.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710828156_8170016.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1712643222_8337129.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710828156_6050547.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-4.png", "size": 1080, "type": "image/png" }]
};

let j = { "id": "thapaserialnoj", "name": "Peppa Pig", "company": "Hoop", "price": 59900, "colors": ["#ff0000", "#000000"], "description": "Girls Full Sleeves Cotton T-shirts", "category": "kids", "stock": 6, "reviews": 23, "stars": 4.2, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710913886_8590486.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710913886_1461373.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710913886_5238412.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710913886_2344635.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let k = { "id": "thapaserialnok", "name": "Tom & Jerry", "company": "Hoop", "price": 64900, "colors": ["#000000", "#CDD0D0"], "description": "Boys Cotton T-shirt", "category": "women", "stock": 6, "reviews": 60, "stars": 4.8, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713797574_3796304.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713797574_1508513.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713797574_6211320.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713797574_8886914.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

let l = { "id": "thapaserialnol", "name": "Mr. T-Rex", "price": 69900, "company": "Hoop", "colors": ["#22D3EF", "#000000"], "description": "Boys Cotton T-shirt", "category": "men", "stock": 6, "reviews": 60, "stars": 4.4, "image": [{ "id": "randomid1", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708929801_8946674.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-1.png", "size": 1080, "type": "image/png" }, { "id": "randomid2", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713183015_1803432.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-2.png", "size": 1080, "type": "image/png" }, { "id": "randomid3", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708929801_1739879.jpg?format=webp&w=480&dpr=1.3", "filename": "prod-3.png", "size": 1080, "type": "image/png" }, { "id": "randomid4", "width": 1080, "height": 650, "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708929801_3519146.webp?format=webp&w=480&dpr=1.3", "filename": "prod-4.png", "size": 1080, "type": "image/png" }] };

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      let products = await res.data;
      products = allProd;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url, id) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      let singleProduct = await res.data;
      switch (id) {
        case "thapaserialnoa":
          singleProduct = a;
          break;
        case "thapaserialnob":
          singleProduct = b;
          break;
        case "thapaserialnoc":
          singleProduct = c;
          break;
        case "thapaserialnod":
          singleProduct = d;
          break;
        case "thapaserialnoe":
          singleProduct = e;
          break;
        case "thapaserialnof":
          singleProduct = f;
          break;
        case "thapaserialnog":
          singleProduct = g;
          break;
        case "thapaserialnoh":
          singleProduct = h;
          break;
        case "thapaserialnoi":
          singleProduct = i;
          break;
        case "thapaserialnoj":
          singleProduct = j;
          break;
        case "thapaserialnok":
          singleProduct = k;
          break;
        case "thapaserialnol":
          singleProduct = l;
          break;
      }
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
