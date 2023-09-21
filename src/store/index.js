const { configureStore, createSlice } = require("@reduxjs/toolkit");


const initailSelection = {size: "L", color:"white"}

const selectionSlice = createSlice({
    name:'selection',
    initialState: initailSelection,
    reducers:{
        setSelection: (state, action) => {
           return state = action.payload
        }
    }
})

const store = configureStore({
    reducer:selectionSlice.reducer
})

export const selectionAction = selectionSlice.actions;

export default store