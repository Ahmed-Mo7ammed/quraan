const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

 export const  getRadios=createAsyncThunk("radioSlice/getRadios",async(_,thunkAPI)=>{

try{
  const res = await fetch("https://mp3quran.net/api/v3/radios")
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  const {radios} = await res.json(); 
  
return radios
}
catch (error){

    return thunkAPI.rejectWithValue(error.message);

}


  })
const radioSlice=createSlice({
name:"radioSlice",
initialState:{
radioLoading:false ,
radios:[],
error: null,
},
reducers:{},
extraReducers: (builder) => {
    builder
      .addCase(getRadios.pending, (state) => {
        state.radioLoading = true;
        state.error = null;
      })
      .addCase(getRadios.fulfilled, (state, action) => {
        state.radioLoading = false;
        state.radios = action.payload;
      })
      .addCase(getRadios.rejected, (state, action) => {
        state.radioLoading = false;
        state.error = action.payload;
      });
  },


})
export let radioslice = radioSlice.reducer