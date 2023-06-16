import Sidebar from "../component/sidebar";
import { useState, useEffect } from "react"
import axios from 'axios'
function AllPatients() {
    const [patient, setpatient] = useState([])
    // const [loader, setloader] = useState(false)
    useEffect(() => {
        axios.post('http://localhost/hospital/viewpatient.php')
            .then(function (response) {
                console.log(response.data)
                setpatient(response.data.phpresult)
                // setloader(true)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);
    function logout () {
        window.localStorage.removeItem("id");
    }

    return (
        <>
            <div class="theme-cyan">

                <div className="page-loader-wrapper">
                    <div className="loader">
                        <div className="m-t-30"><img className="zmdi-hc-spin" src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width={48} height={48} alt="Oreo" /></div>
                        <p>Please wait...</p>
                    </div>
                </div>

                <div class="overlay"></div>

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

                <div class="chat-launcher"></div>
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
                                <h2>All Patients
                                    <small className="text-muted">Welcome to Oreo</small>
                                </h2>
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-12">
                                <button className="btn btn-primary btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                    <i className="zmdi zmdi-plus" />
                                </button>
                                <ul className="breadcrumb float-md-right">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Patients</a></li>
                                    <li className="breadcrumb-item active">All Patients</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card patients-list">
                                    <div className="header">
                                        <h2><strong>Patients</strong> List</h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                                <ul className="dropdown-menu dropdown-menu-right slideUp">
                                                    <li><a href="javascript:void(0);">Action</a></li>
                                                    <li><a href="javascript:void(0);">Another action</a></li>
                                                    <li><a href="javascript:void(0);">Something else</a></li>
                                                </ul>
                                            </li>
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        {/* Nav tabs */}
                                        <ul className="nav nav-tabs padding-0">
                                            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#All">All</a></li>
                                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#USA">USA</a></li>
                                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#India">India</a></li>
                                        </ul>
                                        {/* Tab panes */}
                                        <div className="tab-content m-t-10">
                                            <div className="tab-pane table-responsive active" id="All">
                                                <table className="table m-b-0 table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Media</th>
                                                            <th>Patients ID</th>
                                                            <th>Name</th>
                                                            <th>Age</th>
                                                            <th>Number</th>
                                                            <th>Last Visit</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            patient.map((i) => {
                                                                if(i.status == 0)
                                                                {
                                                                    return (
                                                                        <>
                                                                            <tr>
                                                                                <td><span className="list-icon"><img className="patients-img" src={`http://localhost/hospital/image/${i.image}`} alt /></span></td>
                                                                                <td><span className="list-name">{i.id}</span></td>
                                                                                <td>{i.fname}</td>
                                                                                <td>{i.age}</td>
                                                                                <td>{i.phone}</td>
                                                                                <td>{i.date}</td>
                                                                                <td><span className="badge badge-warning">pending</span></td>
                                                                            </tr>
                                                                        </>
                                                                    )
                                                                }
                                                                else
                                                                {
 return (
                                                                        <>
                                                                            <tr>
                                                                                <td><span className="list-icon"><img className="patients-img" src={require("../images/hospital-management/assets/images/xs/avatar1.jpg")} alt /></span></td>
                                                                                <td><span className="list-name">{i.id}</span></td>
                                                                                <td>{i.fname}</td>
                                                                                <td>{i.age}</td>
                                                                                <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                                                                                <td>{i.phone}</td>
                                                                                <td>11 Jan 2018</td>
                                                                                <td><span className="badge badge-success">Approved</span></td>
                                                                            </tr>
                                                                        </>
                                                                    )
                                                                }
                                                               
                                                            })
                                                        }


                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="tab-pane table-responsive" id="USA">
                                                <table className="table m-b-0 table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Media</th>
                                                            <th>Patients ID</th>
                                                            <th>Name</th>
                                                            <th>Age</th>
                                                            <th>Address</th>
                                                            <th>Number</th>
                                                            <th>Last Visit</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><span className="list-icon"><img className="patients-img" src={require("../images/hospital-management/assets/images/xs/avatar1.jpg")} alt /></span></td>
                                                            <td><span className="list-name">KU 00598</span></td>
                                                            <td>Daniel</td>
                                                            <td>32</td>
                                                            <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                                                            <td>404-447-6013</td>
                                                            <td>11 Jan 2018</td>
                                                            <td><span className="badge badge-success">Approved</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="list-icon"><img className="patients-img" src={require("../images/hospital-management/assets/images/xs/avatar2.jpg")} alt /></span></td>
                                                            <td><span className="list-name">KU 00258</span></td>
                                                            <td>Alexander</td>
                                                            <td>22</td>
                                                            <td>123 6th St. Melbourne, FL 32904</td>
                                                            <td>404-447-6013</td>
                                                            <td>15 Jan 2018</td>
                                                            <td><span className="badge badge-success">Approved</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="list-icon"><img className="patients-img" src={require("../images/hospital-management/assets/images/xs/avatar1.jpg")} alt /></span></td>
                                                            <td><span className="list-name">KU 00456</span></td>
                                                            <td>Joseph</td>
                                                            <td>27</td>
                                                            <td>70 Bowman St. South Windsor, CT 06074</td>
                                                            <td>404-447-6013</td>
                                                            <td>19 Jan 2018</td>
                                                            <td><span className="badge badge-success">Approved</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="list-icon"><img className="patients-img" src={require("../images/hospital-management/assets/images/xs/avatar2.jpg")} alt /></span></td>
                                                            <td><span className="list-name">KU 00789</span></td>
                                                            <td>Cameron</td>
                                                            <td>38</td>
                                                            <td>123 6th St. Melbourne, FL 32904</td>
                                                            <td>404-447-6013</td>
                                                            <td>19 Jan 2018</td>
                                                            <td><span className="badge badge-warning">Pending</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="list-icon"><img className="patients-img" src={require("../images/hospital-management/assets/images/xs/avatar3.jpg")} alt /></span></td>
                                                            <td><span className="list-name">KU 00987</span></td>
                                                            <td>Alex</td>
                                                            <td>39</td>
                                                            <td>123 6th St. Melbourne, FL 32904</td>
                                                            <td>404-447-6013</td>
                                                            <td>20 Jan 2018</td>
                                                            <td><span className="badge badge-success">Approved</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="list-icon"><img className="patients-img" src={require("../images/hospital-management/assets/images/xs/avatar4.jpg")} alt /></span></td>
                                                            <td><span className="list-name">KU 00951</span></td>
                                                            <td>James</td>
                                                            <td>32</td>
                                                            <td>44 Shirley Ave. West Chicago, IL 60185</td>
                                                            <td>404-447-6013</td>
                                                            <td>22 Jan 2018</td>
                                                            <td><span className="badge badge-warning">Pending</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="list-icon"><img className="patients-img" src={require("../images/hospital-management/assets/images/xs/avatar1.jpg")} alt /></span></td>
                                                            <td><span className="list-name">KU 00953</span></td>
                                                            <td>charlie</td>
                                                            <td>51</td>
                                                            <td>123 6th St. Melbourne, FL 32904</td>
                                                            <td>404-447-6013</td>
                                                            <td>22 Jan 2018</td>
                                                            <td><span className="badge badge-warning">Pending</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="list-icon"><img className="patients-img" src={require("../images/hospital-management/assets/images/xs/avatar2.jpg")} alt /></span></td>
                                                            <td><span className="list-name">KU 00934</span></td>
                                                            <td>thomas</td>
                                                            <td>26</td>
                                                            <td>123 6th St. Melbourne, FL 32904</td>
                                                            <td>404-447-6013</td>
                                                            <td>29 Jan 2018</td>
                                                            <td><span className="badge badge-warning">Pending</span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




            </div>
        </>
    )
}
export default AllPatients;