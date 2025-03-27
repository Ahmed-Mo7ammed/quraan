import { quraanslice } from "./quraanSlice";
import { radioslice } from "./radioSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store=configureStore({
reducer:{
    quraanslice,
    radioslice
}

})
export default  store 