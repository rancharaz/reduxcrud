import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmployees } from '../redux/actions/actions';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Stack } from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Addemployee = () => {
    //getting employee value
    const navigate = useNavigate();
    let dispatch = useDispatch();

    /* creating state to add */
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
    const { firstname, lastname, dept, title, email, salary, birthdate, joindate } = state;
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
            dispatch(addEmployees(state));
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
                    <TextField type='text' id="standard-basic" label="Firstname" value={firstname} name="firstname" variant="standard" onChange={handleInputChange} />
                </div>
                <div className='formfield'>
                    <TextField type='text' id="standard-basic" label="Lastname" value={lastname} name="lastname" variant="standard" onChange={handleInputChange} />
                </div>
                <div className='formfield'>
                    <TextField type='text' id="standard-basic" label="Department" value={dept} name="dept" variant="standard" onChange={handleInputChange} />
                </div>
                <div className='formfield'>
                    <TextField type='text' id="standard-basic" label="Title" value={title} name="title" variant="standard" onChange={handleInputChange} />
                </div>
                <div className='formfield'>
                    <TextField type='email' id="standard-basic" label="Email" value={email} name="email" variant="standard" onChange={handleInputChange} />
                </div>
                <div className='formfield'>
                    <TextField type='number' id="standard-basic" label="Salary" value={salary} name="salary" variant="standard" onChange={handleInputChange} />
                </div>
                <div className='formfield'>
                    <TextField type='date' id="standard-basic" label="Birthdate" min="1900-01-01" value={birthdate} name="birthdate" variant="standard" onChange={handleInputChange} />
                </div>
                <div className='formfield'>
                    <TextField type='date' id="standard-basic" min="1900-01-01" label="Date joined" value={joindate} name="joindate" variant="standard" onChange={handleInputChange} />
                </div>
            </Box>



            {/* checking error */}
            {
                error && <h3 style={{ color: "red" }}>{error}</h3>
            }
            <ButtonGroup variant="contained" style={{ marginTop: "2rem" }} aria-label="outlined primary button group">
                <Button color="success" type='submit' onClick={() => navigate("/add-employee")}>Add Employee</Button>
            </ButtonGroup>
            <br></br>
            <ButtonGroup variant="contained" style={{ marginTop: "2rem" }} aria-label="outlined primary button group">
                <Button color="success" type='submit' onClick={() => navigate("/")}>Back</Button>
            </ButtonGroup>
        </form>
    )
}

export default Addemployee