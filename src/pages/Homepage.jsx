//using materialui to display table actions...
import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'; //to dispatch actions
import { deleteEmployees, loadEmployees } from '../redux/actions/actions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import moment from 'moment/moment';
import { Container } from '@mui/material';


//elements for material table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

//css for table
const useStyles = makeStyles({
    table: {
        marginTop: 100,
        minWidth: 700
    }
})

const Homepage = () => {


    const classes = useStyles(); //style dispatcher
    let dispatch = useDispatch(); //dispatch the functions
    let navigate = useNavigate(); //hook to go to page

    const { employees } = useSelector(state => state.employees) //getting the data
    //getting the function to run
    useEffect(() => {
        dispatch(loadEmployees())
    }, [])
    //delete by id

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this employee ?")) {
            dispatch(deleteEmployees(id));
        }
    }

    return (
        <div>
            <div className="">
                <ButtonGroup variant="contained" style={{ marginTop: "2rem" }} aria-label="outlined primary button group">
                    <Button color="success" onClick={() => navigate("/add-employee")}>Add Employee</Button>
                </ButtonGroup>

            </div>
            <Container>
                <TableContainer  >
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                {/* heading table center */}
                                <StyledTableCell>Id</StyledTableCell>
                                <StyledTableCell align="center">Firstname</StyledTableCell>
                                <StyledTableCell align="center">Last name</StyledTableCell>
                                <StyledTableCell align="center">Department</StyledTableCell>
                                <StyledTableCell align="center">Title</StyledTableCell>
                                <StyledTableCell align="center">Email</StyledTableCell>
                                <StyledTableCell align="center">Salary</StyledTableCell>
                                <StyledTableCell align="center">Birthdate</StyledTableCell>
                                <StyledTableCell align="center">Joindate</StyledTableCell>
                                <StyledTableCell align="center">Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {/* looping through employees to display data */}
                            {employees && employees.map((employee) => (
                                <StyledTableRow key={employee.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {employee.id}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{employee.firstname}</StyledTableCell>
                                    <StyledTableCell align="center">{employee.lastname}</StyledTableCell>
                                    <StyledTableCell align="center">{employee.dept}</StyledTableCell>
                                    <StyledTableCell align="center">{employee.title}</StyledTableCell>
                                    <StyledTableCell align="center">{employee.email}</StyledTableCell>
                                    <StyledTableCell align="center">{employee.salary}</StyledTableCell>
                                    <StyledTableCell align="center">{moment(employee.birthdate).format('DD/MM/YYYY')}</StyledTableCell>
                                    <StyledTableCell align="center">{moment(employee.joindate).format('DD/MM/YYYY')}</StyledTableCell>

                                    <StyledTableCell align="center">
                                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                            <Button color='success' onClick={() => navigate(`/view-employee/${employee.id}`)}><VisibilityIcon /></Button>
                                            <Button color='primary' onClick={() => navigate(`/edit-employee/${employee.id}`)}><EditIcon /></Button>
                                            <Button onClick={() => handleDelete(employee.id)} color='error'><HighlightOffIcon /></Button> {/* delete button */}
                                        </ButtonGroup>
                                    </StyledTableCell>


                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

        </div>

    )
}

export default Homepage