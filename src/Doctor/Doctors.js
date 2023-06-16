import Sidebar from '../component/sidebar'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Doctor() {
    const [doctor, setdoctor] = useState([])
    useEffect(() => {
        axios.post('http://localhost/hospital/view_doctor.php')
            .then(function (response) {
                console.log(response)
                setdoctor(response.data)
                // console.log(doctor)
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

                <div class="overlay"></div>
                <div>
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
                    {/* Chat-launcher */}
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
                                <div className="col-lg-5 col-md-5 col-sm-12">
                                    <h2>All Doctors
                                        <small>Welcome to Oreo</small>
                                    </h2>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-12 text-right">
                                    <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                        <i className="zmdi zmdi-plus" />
                                    </button>
                                    <ul className="breadcrumb float-md-right">
                                        <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                        <li className="breadcrumb-item"><a href="javascript:void(0);">Doctors</a></li>
                                        <li className="breadcrumb-item active">All Doctors</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row clearfix">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="body">
                                            <ul className="nav nav-tabs padding-0">
                                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Permanent">Permanent</a></li>
                                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Consultant">Consultant</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-content m-t-10">
                                        <div className="tab-pane active" id="Permanent">
                                            <div className="row clearfix">
                                                {
                                                    doctor.map((i) => {
                                                        return (
                                                            <>
                                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                                    <div className="card xl-seagreen member-card doctor">
                                                                        <div className="body">
                                                                            <div className="member-thumb">
                                                                                <img src={`http://localhost/hospital/image/${i.image}`} className="img-fluid" alt="profile-image" />
                                                                            </div>
                                                                            <div className="detail">
                                                                                <h4 className="m-b-0">{i.fname} </h4>
                                                                                <p className="text-muted">{i.specialist}</p>
                                                                                <ul className="social-links list-inline m-t-20">
                                                                                    <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                                                    <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                                                    <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                                                </ul>
                                                                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                        {/* <div className="tab-pane" id="Consultant">
                                            <div className="row clearfix">
                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                    <div className="card xl-khaki member-card doctor">
                                                        <div className="body">
                                                            <div className="member-thumb">
                                                                <img src={require('../images/hospital-management/assets/images/doctors/member2.png')} className="img-fluid" alt="profile-image" />
                                                            </div>
                                                            <div className="detail">
                                                                <h4 className="m-b-0">Dr. Amelia</h4>
                                                                <p className="text-muted">Gynecologist</p>
                                                                <ul className="social-links list-inline m-t-20">
                                                                    <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                                    <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                                    <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                                </ul>
                                                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                    <div className="card xl-blue member-card doctor">
                                                        <div className="body">
                                                            <div className="member-thumb">
                                                                <img src={require('../images/hospital-management/assets/images/doctors/member3.png')} className="img-fluid" alt="profile-image" />
                                                            </div>
                                                            <div className="detail">
                                                                <h4 className="m-b-0">Dr. Jack </h4>
                                                                <p className="text-muted">Dentist</p>
                                                                <ul className="social-links list-inline m-t-20">
                                                                    <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                                    <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                                    <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                                </ul>
                                                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                    <div className="card xl-pink member-card doctor">
                                                        <div className="body">
                                                            <div className="member-thumb">
                                                                <img src={require('../images/hospital-management/assets/images/doctors/member5.png')} className="img-fluid" alt="profile-image" />
                                                            </div>
                                                            <div className="detail">
                                                                <h4 className="m-b-0">Dr. Joseph </h4>
                                                                <p className="text-muted">Audiology</p>
                                                                <ul className="social-links list-inline m-t-20">
                                                                    <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                                    <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                                    <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                                </ul>
                                                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                    <div className="card xl-seagreen member-card doctor">
                                                        <div className="body">
                                                            <div className="member-thumb">
                                                                <img src={require('../images/hospital-management/assets/images/doctors/member6.png')} className="img-fluid" alt="profile-image" />
                                                            </div>
                                                            <div className="detail">
                                                                <h4 className="m-b-0">Dr. Charlie </h4>
                                                                <p className="text-muted">Physical Therapy</p>
                                                                <ul className="social-links list-inline m-t-20">
                                                                    <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                                    <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                                    <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                                </ul>
                                                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </div>
        </>
    )
}
export default Doctor