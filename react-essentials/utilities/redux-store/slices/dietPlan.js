import { createSlice } from "@reduxjs/toolkit";

/* Details:
    - name of the slice
    - initial value of the data slice
    - reducer function to perform write operation
*/

// createSlice is a function that allows us to create different slices of data.
const dietPlan = createSlice({
    name: "Diet Plan",

    initialState: {
        list: [],
    },

    // The reducers here is specific for this particular data slice. Each slice of data will have it's own reducers.
    // It contains different functions that can be used to perform different operations.
    reducers: {
        addPlan: (state, action) => {
            state.list.push(action.payload);
        },

        removePlan: (state) => {
            state.list.pop();
        },

        clearAllPlan: (state) => {
            state.list.length = 0;
        },
    },
});

export default dietPlan;
