import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployees, updateEmployees, updateEmployee } from './../redux/actions';

const Viewemployee = () => {
    //getting employee value
    const navigate = useNavigate();
    let dispatch = useDispatch();
    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        dept: "",
        title: "",
        email: "",
        salary: "",
        birthdate: "",
        joindate: ""
    });
    const [error, setError] = useState("");
    let { id } = useParams(); //getting the id from the url
    const { employee } = useSelector((state) => state.employees) //getting the data
    const { firstname, lastname, dept, title, email, salary, birthdate, joindate } = state;
    //dispatch action updateuserid
    useEffect(() => {
        dispatch(updateEmployees(id))
    }, [])
    //show data on load
    useEffect(() => {
        if (employee) {
            setState({ ...employee })
        }
    }, [employee])

    //store value in state
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
    //submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstname || !lastname || !dept || !title || !email || !salary || !birthdate || !joindate) {
            setError("Please input all the Input Field")
        } else {
            dispatch(updateEmployee(state, id));
            navigate("/");
            setError("");
        }

    }

    return (

        /* form field */
        <form className='form-input' onSubmit={handleSubmit}>
            <Box

                sx={{
                    '& > :not(style)': { m: 1, width: '100' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className='formfield' >
                    <TextField type='text' id="standard-basic" label="Firstname" value={firstname || ""} name="firstname" variant="standard" onChange={handleInputChange} />
                </div>
                <div className='formfield'>
                    <TextField type='text' id="standard-basic" label="Lastname" value={lastname || ""} name="lastname" variant="standard" onChange={handleInputChange} />
                </div>
                <div className='formfield'>
                    <TextField type='text' id="standard-basic" label="Department" value={dept || ""} name="dept" variant="standard" onChange={handleInputChange} />
                </div>
                <div className='formfield'>
                    <TextField type='text' id="standard-basic" label="Title" value={title || ""} name="title" variant="standard" onChange={handleInputChange} />
                </div>
                <div className='formfield'>
                    <TextField type='email' id="standard-basic" label="Email" value={email || ""} name="email" variant="standard" onChange={handleInputChange} />
                </div>
                <div className='formfield'>
                    <TextField type='number' id="standard-basic" label="Salary" value={salary || ""} name="salary" variant="standard" onChange={handleInputChange} />
                </div>
                <div className='formfield'>
                    <TextField type='date' id="standard-basic" label="Birthdate" value={birthdate || ""} name="birthdate" variant="standard" onChange={handleInputChange} />

                </div>
                <div className='formfield'>
                    <TextField type='date' id="standard-basic" label="Date joined" value={joindate || ""} name="joindate" variant="standard" onChange={handleInputChange} />
                </div>
            </Box>
            {/* checking error */}
            {
                error && <h3 style={{ color: "red" }}>{error}</h3>
            }
            {/*             <ButtonGroup variant="contained" style={{ marginTop: "2rem" }} aria-label="outlined primary button group">
                <Button color="success" type='submit'>Update Employee</Button>
            </ButtonGroup> */}
            <br></br>
            <ButtonGroup variant="contained" style={{ marginTop: "2rem" }} aria-label="outlined primary button group">
                <Button color="success" type='submit' onClick={() => navigate("/")}>Back</Button>
            </ButtonGroup>
        </form>
    )
}

export default Viewemployee