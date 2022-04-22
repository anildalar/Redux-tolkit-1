import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

let reducerSlice = createSlice({
  name:'myslice',
  initialState:{
    value:999
  },
  reducers:{
    //1. P:V

    //2. Method
    addFunds:function(state, action){
        console.log(state);
        console.log(action);
        console.log(action.payload);
        state.value += action.payload;
    },
    widthdrawFunds:function(state, action){
      console.log(state);
        console.log(action);
        console.log(action.payload);
        state.value -= action.payload;
    }
  }
});

// Destructore the Object
export const {addFunds,widthdrawFunds} = reducerSlice.actions

let rootReducerFunction = reducerSlice.reducer  
let store = configureStore({
  //1. P:V
  reducer:{
    //1. P:V
    
    //2. Method
    rootReducer:rootReducerFunction
  }
  //2. Method
  
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
   
  </React.StrictMode>
);
