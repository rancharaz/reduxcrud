import * as types from "../actions/actionType";

//initiate initial state of employees
const initialState = {
    employees: [],
    employee: {},
    loading: true
}
//action to dispatch
const employeesReducers = (state = initialState, action) => {

    switch (action.type) {
        case types.GET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
                loading: false,
            }
        case types.DELETE_EMPLOYEES:
        case types.ADD_EMPLOYEES:
        case types.UPDATE_EMPLOYEE:
            return {
                ...state,
                loading: false
            }
        case types.UPDATE_EMPLOYEES:
            return {
                ...state,
                employee: action.payload,
                loading: false
            }
        default:
            return state;
    }

}
export default employeesReducers;