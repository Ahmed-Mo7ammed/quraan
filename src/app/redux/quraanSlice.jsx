const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const getreciters= createAsyncThunk("quraanSlice/getQuraan",async()=>{
try{
const res = await fetch("https://mp3quran.net/api/v3/reciters")
const {reciters} = await res.json();

return reciters
}
catch (error){
    return thunkAPI.rejectWithValue(error.message);

}




})
export const getRewaia= createAsyncThunk("quraanSlice/getRewaia",async(idreciter,thunkAPI)=>{
    try{
    const res = await fetch(`https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${idreciter}`)
    const data = await res.json(); 
console.log(data.reciters[0].moshaf);

    return data.reciters[0].moshaf
    }
    catch (error){
        return thunkAPI.rejectWithValue(error.message);
    
    }
    
    })
    export const getAlldetailsWithRewaya= createAsyncThunk("quraanSlice/getAlldetailsWithRewaya",async(idreciter ,rewayaid )=>{
        try{
        const res = await fetch(`https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${idreciter}&rewaya=${rewayaid}`)
        const data = await res.json();
            
        return data.reciters[0].moshaf  
        }
        catch (error){
            return thunkAPI.rejectWithValue(error.message);
        
        }
        
        })
    export const getAllSorah= createAsyncThunk("quraanSlice/getAllSorah",async()=>{
        try{
        const res = await fetch(`https://mp3quran.net/api/v3/suwar?language=ar`)
        const data = await res.json();  
                  
        return data.suwar 
        }
        catch (error){
            return thunkAPI.rejectWithValue(error.message);
        
        }
        
        })
const quraanSlice= createSlice({
name : "quraanSlice" ,
initialState:{
    isLoading : false ,
    reciters: [],
    error : [],
    Rewaia : [],
    sourahWithRewaya : [],
    swar : [],
},
reducers:{},
extraReducers:(bulider)=>{
    bulider.addCase(getreciters.pending,(state ,action) =>{
state.isLoading=true

    })
    .addCase(getreciters.fulfilled,(state,action)=>{

        state.isLoading=false,
        state.reciters=action.payload
    })
    .addCase(getRewaia.fulfilled,(state,action)=>{

        state.isLoading=false,
        state.Rewaia=action.payload
    })
    .addCase(getAlldetailsWithRewaya.fulfilled,(state,action)=>{

        state.isLoading=false,
        state.sourahWithRewaya=action.payload
    })
    .addCase(getAllSorah.fulfilled,(state,action)=>{

        state.isLoading=false,
        state.swar=action.payload
    })


}


})
export let  quraanslice= quraanSlice.reducer