import Sidebar from "../component/sidebar";
import { useEffect, useRef, useState } from "react"
import axios from 'axios'
import React, { useCallback } from 'react'

function Patient() {
    var status = 0
    const [loader, setloader] = useState(false)
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [date, setdate] = useState('')
    const [age, setage] = useState('')
    const [doctor, setdoctor] = useState([])
    const [sel_doctor, set_sel_doctor] = useState('Dr.')

    const image = useRef();

    const [gender, setgender] = useState('male')
    function demo(i) {
        // console.log(i);
        setgender(i)
    }
    function doctor_sel(i) {
        // alert(i)
        set_sel_doctor(i)
    }

    useEffect(() => {
        axios.get('http://localhost/hospital/view_doctor.php')
            .then(function (response) {
                setdoctor(response.data)
                console.log(response)
                setloader(true)
                // console.log(doctor);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    function submit(e) {
        e.preventDefault()
        const data = new FormData()
        data.append('image', image.current.files[0])
        data.append('fname', fname)
        data.append('lname', lname)
        data.append('email', email)
        data.append('date', date)
        data.append('age', age)
        data.append('phone', phone)
        data.append('status', status)
        data.append('gender', gender)
        data.append('doctor', sel_doctor)
        // alert(fname)
        axios.post('http://localhost/hospital/add_patient.php',
            data)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    function logout () {
        window.localStorage.removeItem("id");
    }
    return (
        <>
            <div className="theme-cyan">
                {/* <div className="page-loader-wrapper">
                    <div className="loader">
                        <div className="m-t-30"><img className="zmdi-hc-spin" src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width={48} height={48} alt="Oreo" /></div>
                        <p>Please wait...</p>
                    </div>
                </div> */}
                <div className="overlay" />
                <nav className="navbar p-l-5 p-r-5 pt-0 pb-0">
                    <ul className="nav navbar-nav navbar-left">
                        <li>
                            <div className="navbar-header">
                                <a href="javascript:void(0);" className="bars" />
                                <a className="navbar-brand" href="index.html"><img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width={30} alt="Oreo" /><span className="m-l-10">Oreo</span></a>
                            </div>
                        </li>
                        <li><a href="javascript:void(0);" className="ls-toggle-btn" data-close="true"><i className="zmdi zmdi-swap" /></a></li>
                        <li className="d-none d-lg-inline-block"><a href="events.html" title="Events"><i className="zmdi zmdi-calendar" /></a></li>
                        <li className="d-none d-lg-inline-block"><a href="mail-inbox.html" title="Inbox"><i className="zmdi zmdi-email" /></a></li>
                        <li><a href="contact.html" title="Contact List"><i className="zmdi zmdi-account-box-phone" /></a></li>
                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-notifications" />
                            <div className="notify"><span className="heartbit" /><span className="point" /></div>
                        </a>
                            <ul className="dropdown-menu pullDown">
                                <li className="body">
                                    <ul className="menu list-unstyled">
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar2.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Sophia <span className="time">30min ago</span></span>
                                                        <span className="message">There are many variations of passages</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar3.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Sophia <span className="time">31min ago</span></span>
                                                        <span className="message">There are many variations of passages of Lorem Ipsum</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Isabella <span className="time">35min ago</span></span>
                                                        <span className="message">There are many variations of passages</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar5.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Alexander <span className="time">35min ago</span></span>
                                                        <span className="message">Contrary to popular belief, Lorem Ipsum random</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar6.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Grayson <span className="time">1hr ago</span></span>
                                                        <span className="message">There are many variations of passages</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer"> <a href="javascript:void(0);">View All</a> </li>
                            </ul>
                        </li>
                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-flag" />
                            <div className="notify">
                                <span className="heartbit" />
                                <span className="point" />
                            </div>
                        </a>
                            <ul className="dropdown-menu pullDown">
                                <li className="header">Project</li>
                                <li className="body">
                                    <ul className="menu tasks list-unstyled">
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="progress-container progress-primary">
                                                    <span className="progress-badge">Neurology</span>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{ width: '86%' }}>
                                                            <span className="progress-value">86%</span>
                                                        </div>
                                                    </div>
                                                    <ul className="list-unstyled team-info">
                                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar3.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar4.jpg" alt="Avatar" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="progress-container progress-info">
                                                    <span className="progress-badge">Gynecology</span>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{ width: '45%' }}>
                                                            <span className="progress-value">45%</span>
                                                        </div>
                                                    </div>
                                                    <ul className="list-unstyled team-info">
                                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar10.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar9.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar8.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar7.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar6.jpg" alt="Avatar" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="progress-container progress-warning">
                                                    <span className="progress-badge">Cardio Monitoring</span>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={29} aria-valuemin={0} aria-valuemax={100} style={{ width: '29%' }}>
                                                            <span className="progress-value">29%</span>
                                                        </div>
                                                    </div>
                                                    <ul className="list-unstyled team-info">
                                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar5.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar7.jpg" alt="Avatar" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer"><a href="javascript:void(0);">View All</a></li>
                            </ul>
                        </li>
                        <li className="d-none d-md-inline-block">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="input-group-addon">
                                    <i className="zmdi zmdi-search" />
                                </span>
                            </div>
                        </li>
                        <li className="float-right">
                            <a href="/signin" className="mega-menu" data-close="true" onClick={logout}><i className="zmdi zmdi-power" /></a>
                            <a href="javascript:void(0);" className="js-right-sidebar" data-close="true"><i className="zmdi zmdi-settings zmdi-hc-spin" /></a>
                        </li>
                    </ul>
                </nav>
                <Sidebar />
                
                <div className="chat-launcher" />
                <div className="chat-wrapper">
                    <div className="card">
                        <div className="header">
                            <ul className="list-unstyled team-info margin-0">
                                <li className="m-r-15"><h2>Doctor Team</h2></li>
                                <li>
                                    <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <img src="../assets/images/xs/avatar3.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <img src="../assets/images/xs/avatar4.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <img src="../assets/images/xs/avatar6.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <div className="chat-widget">
                                <ul className="chat-scroll-list clearfix">
                                    <li className="left float-left">
                                        <img src="../assets/images/xs/avatar3.jpg" className="rounded-circle" alt />
                                        <div className="chat-info">
                                            <a className="name" href="#">Alexander</a>
                                            <span className="datetime">6:12</span>
                                            <span className="message">Hello, John </span>
                                        </div>
                                    </li>
                                    <li className="right">
                                        <div className="chat-info"><span className="datetime">6:15</span> <span className="message">Hi, Alexander<br /> How are you!</span> </div>
                                    </li>
                                    <li className="right">
                                        <div className="chat-info"><span className="datetime">6:16</span> <span className="message">There are many variations of passages of Lorem Ipsum available</span> </div>
                                    </li>
                                    <li className="left float-left"> <img src="../assets/images/xs/avatar2.jpg" className="rounded-circle" alt />
                                        <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br /> John <br /> What are you doing?</span> </div>
                                    </li>
                                    <li className="left float-left"> <img src="../assets/images/xs/avatar1.jpg" className="rounded-circle" alt />
                                        <div className="chat-info"> <a className="name" href="#">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
                                    </li>
                                    <li className="right">
                                        <div className="chat-info"><span className="datetime">7:02</span> <span className="message">Hello, <br />Michael</span> </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="input-group p-t-15">
                                <input type="text" className="form-control" placeholder="Enter text here..." />
                                <span className="input-group-addon">
                                    <i className="zmdi zmdi-mail-send" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-7 col-md-5 col-sm-12">
                                <h2>Add Patient
                                    <small className="text-muted">Welcome to Oreo</small>
                                </h2>
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-12">
                                <ul className="breadcrumb float-md-right">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Patient</a></li>
                                    <li className="breadcrumb-item active">Add Patient</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                            <form method="post" encType="multipart/form-data" onSubmit={submit}>
                        <div className="row clearfix">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="card">
                                        <div className="header">
                                            <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>
                                            <ul className="header-dropdown">
                                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                                    <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                        <li><a href="javascript:void(0);">Edit</a></li>
                                                        <li><a href="javascript:void(0);">Delete</a></li>
                                                        <li><a href="javascript:void(0);">Report</a></li>
                                                    </ul>
                                                </li>
                                                <li className="remove">
                                                    <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="body">
                                            <div className="row clearfix">
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="First Name" onChange={(i)=> setfname(i.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Last Name" onChange={(i)=> setlname(i.target.value)}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Phone No." onChange={(i)=> setphone(i.target.value)}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-sm-3">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="zmdi zmdi-calendar" />
                                                        </span>
                                                        <input type="date" className="form-control" placeholder="Enter date" onChange={(i)=> setdate(i.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Age" onChange={(i)=> setage(i.target.value)}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <select className="form-control show-tick" onChange={(i)=> demo(i.target.value)}>
                                                        <option value>- Gender -</option>
                                                        <option value='male'>Male</option>
                                                        <option value='female'>Female</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Enter Your Email"  onChange={(i)=> setemail(i.target.value)}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                                                        <div className="dz-message">
                                                            <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                                            <h3>Drop files here or click to upload.</h3>
                                                            <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                                                        <div className="fallback">
                                                            <input name="file" type="file" multiple ref={image} />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <textarea rows={4} className="form-control no-resize" placeholder="Description" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <button type="submit" className="btn btn-primary btn-round">Submit</button>
                                                    <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Registration</strong> Information <small>Description text here...</small> </h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                                <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                    <li><a href="javascript:void(0);">Edit</a></li>
                                                    <li><a href="javascript:void(0);">Delete</a></li>
                                                    <li><a href="javascript:void(0);">Report</a></li>
                                                </ul>
                                            </li>
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Doctor Name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Staff on Duty" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Ward No." />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="zmdi zmdi-calendar" />
                                                    </span>
                                                    <input type="text" className="datetimepicker form-control" placeholder="Please choose date & time..." />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <button type="submit" className="btn btn-primary btn-round">Submit</button>
                                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>
        </section>
            </div >

        </>
    )
}
export default Patient;