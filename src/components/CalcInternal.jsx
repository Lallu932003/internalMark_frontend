import axios from 'axios'
import React, { useState } from 'react'

const CalcInternal = () => {

    const [output, changeOutput] = useState({
        Name: "",
        Admno: "",
        Batch: "",
        attendance: " ",
        Exam: " ",
        assignment: " ",
        Internal_mark: " "
    })


    const [input, changeInput] = useState(
        {

            "name": "",
            "admno": "",
            "batch": "",
            "present": "",
            "noofdays": "",
            "exam1": "",
            "totalexam1": "",
            "exam2": "",
            "totalexam2": "",
            "assignment1": "",
            "assignment2": ""
        }
    )


    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }


    const readInput = () => {
        console.log(input)
        axios.post("http://localhost:4002/calculate", input).then(
            (response) => {
                changeOutput(response.data)
            }
        ).catch()
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1>MARKO</h1>
                        <hr />
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Admission No</label>
                                <input type="text" className="form-control" name='admno' value={input.admno} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Batch</label>
                                <input type="text" className="form-control" name='batch' value={input.batch} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">No.of days present</label>
                                <input type="text" className="form-control" name='present' value={input.present} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total No.of days present</label>
                                <input type="text" className="form-control" name='noofdays' value={input.noofdays} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">First Exam marks</label>
                                <input type="text" className="form-control" name='exam1' value={input.exam1} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total marks</label>
                                <input type="text" className="form-control" name='totalexam1' value={input.totalexam1} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Second Exam Marks</label>
                                <input type="text" className="form-control" name='exam2' value={input.exam2} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total marks</label>
                                <input type="text" className="form-control" name='totalexam2' value={input.totalexam2} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Assignment 1 marks</label>
                                <input type="text" className="form-control" name='assignment1' value={input.assignment1} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Assignment 2 marks</label>
                                <input type="text" className="form-control" name='assignment2' value={input.assignment2} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-dark" onClick={readInput}>Calculate</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Name : {output.Name} </li>
                                        <li class="list-group-item">Adm no : {output.Admno} </li>
                                        <li class="list-group-item"> Batch : {output.Batch} </li>
                                        <li class="list-group-item"> Attendance : {output.attendance} </li>
                                        <li class="list-group-item"> Exam : {output.Exam} </li>
                                        <li class="list-group-item"> Assignment : {output.assignment} </li>
                                        <li class="list-group-item"> Internal Mark : {output.Internal_mark} </li>
                                    </ul>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalcInternal