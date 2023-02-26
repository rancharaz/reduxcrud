import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployees } from '../redux/actions/actions';
import { Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import moment from 'moment/moment';


const Viewemployee = () => {
    //getting employee value
    const navigate = useNavigate();
    let dispatch = useDispatch();
    /* put data into variable */
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
    let { id } = useParams(); //getting the id from the url
    const { employee } = useSelector((state) => state.employees) //getting the data

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



    return (

        <Container>
            <h1>View employee</h1>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Firstname</TableCell>
                            <TableCell align="right">Last name</TableCell>
                            <TableCell align="right">Department</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Salary</TableCell>
                            <TableCell align="right">Birthdate</TableCell>
                            <TableCell align="right">Joindate</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {/* getting data by redux */}
                            <TableCell component="th" scope="employee">
                                {employee.firstname}
                            </TableCell>
                            <TableCell align="right">{employee.lastname}</TableCell>
                            <TableCell align="right">{employee.dept}</TableCell>
                            <TableCell align="right">{employee.title}</TableCell>
                            <TableCell align="right">{employee.email}</TableCell>
                            <TableCell align="right">{employee.salary}</TableCell>
                            <TableCell align="right">{moment(employee.birthdate).format('DD/MM/YYYY')}</TableCell>
                            <TableCell align="right">{moment(employee.joindate).format('DD/MM/YYYY')}</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
            <ButtonGroup variant="contained" style={{ marginTop: "2rem" }} aria-label="outlined primary button group">

                <Button color="success" type='submit' onClick={() => navigate("/")}>Back</Button>
            </ButtonGroup>
        </Container>

    )
}

export default Viewemployee