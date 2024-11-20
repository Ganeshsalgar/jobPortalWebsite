import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading : false
    },
    reducers:{
        setLaoding : (state , action) =>{
            state.loading = action.payload;
        }
    }
})

export const {setLaoding} = authSlice.actions;

export default authSlice.reducer;