import { configureStore } from "@reduxjs/toolkit"; //import configureStore
import employeesReducers from "../reducers/reducer";

//initiate store
export const store = configureStore({
    reducer: {
        //in useSelector homepage to display data
        employees: employeesReducers

    }
})

export default store;