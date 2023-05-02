import React, { useState, useEffect } from 'react';
import data from './Data.json';
import {student }from './stuData.js'
import './Tables.css'
import {  Button } from "@mui/material"
import DetailsDialog from "./DetailsDialog";




function DataTable() {
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortedData, setSortedData] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [examData, setExamData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showing, setShowing] = useState("all");
  const [columIndex, setColumnIndex] = useState(0);
  const [open, setOpen]=useState(false);
  const [comments, setComments]=useState();

  const newData = [...data];

  const [parentData, setParentData] = useState(newData)

  useEffect(() => {
    // Copy the data array to avoid mutating the original data

    // Sort the data based on the selected sort criteria
    if (sortCriteria === 'exam-grade') {
      // console.log("dddd")
      newData.sort((a, b) => b.exam_grade - a.exam_grade);
    } else if (sortCriteria === 'name') {
      newData.sort((a, b) => a.name < b.name);
    } else if (sortCriteria === 'name') {
      newData.sort((a, b) => a.name > b.name)
    }
    // Update the sorted data state
    setSortedData(newData);
    setFilteredData(newData);
    setExamData(newData);

  }, [sortCriteria,]);

  // useEffect(()=>{
    //   handleFilter();
    // },[filteredData])
    
    
  const openDialog=(newData)=>{
    setOpen(true);
    setComments(newData.comments); 
  }


  const handleFilter = (name) => {
    setFilterName(name);
    let filtered = examData.filter((exam) =>
      exam.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredData(filtered);

  };


  const handleShow = (show) => {
    setShowing(show);
    switch (show) {
      case "all":
        setFilteredData(examData);
        break;
      case "PASS":
        setFilteredData(
          examData.filter((exam) => Math.ceil(exam.exam_grade * 0.6 + exam.rating_grade * 0.4) > 4)
        );

        break;
      case "FAIL":
        setFilteredData(
          examData.filter((exam) => Math.ceil(exam.exam_grade * 0.6 + exam.rating_grade * 0.4) <= 4)
        );
        break;
        default:
          setFilteredData(examData);
        }
      };
      function dj(){
        console.log("ddd")
      }


  return (
    <div>

    <div class = "buttons">
        <button class="button-27" onClick={() =>setSortCriteria('exam_grade')}>Sort by FinalGrade</button>
        <button class="button-27"  onClick={() => setSortCriteria('name')}>A-Z</button>
        <button class="button-27"  onClick={() => setSortCriteria('name2')}>Z-A</button>
        {/* <button onClick={() => setSortCriteria('total_grade')}>Pass</button> */}
        {/* <button onClick={handleSortClick}>
        Sort by Marks ({sortType === "desc" ? "Desc" : "Asc"})
  </button> */}



        <label class = 'label-1'>
          <select
            value={showing}
            onChange={(e) => handleShow(e.target.value)}
          >
            <option value="all">All</option>
            <option value="PASS">Passed</option>
            <option value="FAIL">Failed</option>
          </select>
        </label>

        <label class ='label-2'>
          <img src='search.png' alt='srch'></img>
          <input placeholder='Search..'
            type="text"
            value={filterName}
            onChange={(e) => handleFilter(e.target.value)}
          />
        </label>

    </div>




      <table >
        <thead>
          <tr>
            <th >ID</th>
            <th>Name</th>
            <th>rating_grade</th>
            <th>ticket_topic</th>
            <th>exam_grade</th>
            <th>total_grade</th>
            <th>Status</th>
            <th>Statics</th>
          </tr>
        </thead>

        
        {filteredData.map(({ id, name, rating_grade, ticket_topic, total_grade, exam_grade,comments }) => (
          <tbody id={id}>
            <tr
              style={{ backgroundColor: columIndex === id ? "#867070" : "", fontWeight: columIndex === id ? "bold" : "" }} onClick={() => setColumnIndex(id)}
              >
              <td>{id}</td>
              <td>{name}</td>
              <td>{rating_grade}</td>
              <td>{ticket_topic}</td>
              <td>{exam_grade}</td>
              <td>{Math.ceil(0.4 * `${rating_grade}` + 0.6 * `${exam_grade}`)}</td>
              {/* <td>total_grade</td> */}
              {/* <td>{total_grade > 4 ? "PASS" : "FAIL"}</td> */}
              <td>{(Math.ceil(0.4 * `${rating_grade}` + 0.6 * `${exam_grade}`)) > 4 ? "PASS" : "FAIL"}</td>
              <td>
              <Button style={{background:"#71C9CE", color:"#fff" , height:'25px'}} onClick={()=>openDialog(newData)} >
              Details
            </Button>
              </td>
            </tr>
            <DetailsDialog open={open} setOpen={setOpen} comments={comments}/>
          </tbody>
        )
        )}
      </table>

    </div>
  );
}

export default DataTable;