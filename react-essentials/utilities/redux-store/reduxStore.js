/* Redux configuration steps:
    - Install Packages
    - Build Store Configuration
    - Connect Store With Application
    - Create Data Slices
    - Use Slices in Store Configuration
    - Configure Read & Write Operations
*/

import { configureStore } from "@reduxjs/toolkit";
import dietPlan from "./slices/dietPlan.js";

const { reducer } = dietPlan;

// configureStore is a function that allows us to setup/configure the Redux store.
const reduxStore = configureStore({
    // The reducer here is common for the entire application. It is responsible for modifying the reduxStore in this case.
    // It can have multiple other reducers that are specific to different slices of data that we have.
    reducer: {
        diet: reducer, // this reducer will have access to the state data that is present inside initialState in dietPlan.js slice.
    },
});

export default reduxStore;
