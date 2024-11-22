import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading : false,
        user:null
    },
    reducers:{
        setLaoding : (state , action) =>{
            state.loading = action.payload;
        },
        setUser:(state, action) =>{
            state.user = action.payload
        }
    }
})

export const {setLaoding ,setUser} = authSlice.actions;

export default authSlice.reducer;