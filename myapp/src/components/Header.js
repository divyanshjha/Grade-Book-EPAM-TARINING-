import React from 'react'
import './Header.css'
import { Toolbar } from '@mui/material';
import {AppBar,Typography,Paper} from '@mui/material';
import styled from '@emotion/styled';




const Header = ({ title, date, professor, college, department, semester, group }) => {
  title = 'Grade Book'
  date = 'April 25, 2023';
  professor = 'John Doe';
  college = 'Example College';
  department = 'Computer Science';
  semester = 'Spring 2023';
  group = 'CS101';

  const StyledToolbar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between"  ,
    backgroundColor:"#041C32",
    
  })

  return (
    <div>
          <AppBar position='sticky'>
            <StyledToolbar>
              <Typography variant='h5' fontWeight={'bold'} marginBottom={2}>Grade Book
              <img src={'marking.png'} alt="logo" style={{width:35, marginRight:2, marginLeft:10,marginTop:2,alignItems:'center' ,display:'inline'}}/></Typography>
              <Typography variant='p' fontWeight={'bold'} >{Date()}</Typography>
            </StyledToolbar>
          </AppBar>

          <Paper variant="outlined" rectangle />

      
      <div class='box-container'>
       
        <div class = 'box'>
          
          <p><img src='date.png'  alt='departmentx`'></img> Date: {date}</p>
        </div>
        <div class = 'box'>
          <p><img src='teacher.png'  alt='professor'></img>Professor: {professor}</p>
        </div>
        <div class = 'box'>
          <p><img src='college.png'  alt='clg'></img>College: {college}</p>
        </div>


      </div>
      <div class='box-container'>
       
        <div class = 'box'>
        <p><img src='shopping-mall.png'  alt='department'></img>Department: {department}</p>
        </div>
        <div class = 'box'>
        <p><img src='semester.png'  alt='semester'></img>Semester: {semester}</p>
        </div>
        <div class = 'box'>
        <p><img src='people.png'  alt='Group'></img>Group: {group}</p>
        </div>
    
      </div>


        
        
        
         



     </div>
  )
};
export default Header;   