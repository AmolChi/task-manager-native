import { User, UserState, Task } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:UserState = {
    users:[],
    activeUser: null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser: (state,action:PayloadAction<User>)=>{
            state.users.push(action.payload);
        },
        addActiveUser: (state,action:PayloadAction<User>)=>{
            state.activeUser = action.payload
        },
        removeActiveUser: (state)=>{
            state.activeUser = null
        },
        addTask:(state,action:PayloadAction<Task>)=>{
            
        }
    },
});

export const {addUser,addActiveUser,removeActiveUser} = userSlice.actions;
export const reducer = userSlice.reducer;