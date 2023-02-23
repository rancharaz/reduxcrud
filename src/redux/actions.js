import * as types from "./actionType";
import axios from "axios";


//get action types of employees
const getEmployees = (employees) => ({
    type: types.GET_EMPLOYEES,
    payload: employees
})

const employeeDeleted = () => ({
    type: types.DELETE_EMPLOYEES
})

const employeeAdded = () => ({
    type: types.ADD_EMPLOYEES
})
const employeeUpdated = (employee) => ({
    type: types.UPDATE_EMPLOYEES,
    payload: employee
})
const employeeUpdate = (employee) => ({
    type: types.UPDATE_EMPLOYEE

})

//dispatcher get data and catching data
//dispach action types
export const loadEmployees = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`)
            .then((response) => {
                dispatch(getEmployees(response.data));
                console.log(response)
            }).catch(function (error) {
                console.log(error.message);
            })
    }
}
//delete by id
export const deleteEmployees = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}${id}`)
            .then((response) => {
                dispatch(employeeDeleted());
                console.log(response)
                dispatch(loadEmployees())
            }).catch(function (error) {
                console.log(error.message);
            })
    }
}
//add employee
export const addEmployees = (employee) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`, employee)
            .then((response) => {
                dispatch(employeeAdded());
                console.log(response)
            }).catch(function (error) {
                console.log(error.message);
            })
    }
}

//update by id
export const updateEmployees = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}${id}`)
            .then((response) => {
                /*    dispatch(employeeUpdated()); */
                console.log(response)
                dispatch(employeeUpdated(response.data))
            }).catch(function (error) {
                console.log(error.message);
            })
    }
}
//confirm update user by id
export const updateEmployee = (employee, id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}${id}`, employee)
            .then((response) => {
                /*    dispatch(employeeUpdated()); */
                console.log(response)
                dispatch(employeeUpdate())
            }).catch(function (error) {
                console.log(error.message);
            })
    }
}