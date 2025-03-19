import products from "./modules/products.js";
import * as home from "./modules/home.js";
// import { getHash } from "./utils/hashing.js";
// import { getAuth } from "./utils/auth.js";
// import { getDate } from "./utils/date.js";
import { getAuth, getHash, getDate } from "./utils/index.js";
getAuth();
getHash();
getDate();
