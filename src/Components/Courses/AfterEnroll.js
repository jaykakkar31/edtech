import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/studentsAction";
import { logoutEducator } from "../../store/actions/educatorAction";
import { AiOutlineUser} from "react-icons/ai";
import { FiLogOut, FiMail, FiHeart, FiShare2, FiEye } from "react-icons/fi";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Download from "../Download";
import ReactPlayer from 'react-player';
import { data } from './data';

function Courses(props) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const educatorAuthReducer = useSelector((state) => state.educatorAuthReducer);
	const { educatorInfo, loading } = educatorAuthReducer;
	const [avatar, setAvatar] = useState("");
	const studentAuthReducer = useSelector((state) => state.studentAuthReducer);
	const { studentInfo, loading: loadStudent } = studentAuthReducer;
	const [url, setUrl] = useState('https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119')

	useEffect(() => {
		if (studentInfo) {
			setAvatar(studentInfo.name.toUpperCase());
		}
		if (educatorInfo) {
			setAvatar(educatorInfo.name.toUpperCase());
		}
	}, [educatorInfo, studentInfo, loading, loadStudent, avatar]);

	const logoutHandle = () => {
		if (studentInfo) {
			dispatch(logout());
		}
		if (educatorInfo) {
			dispatch(logoutEducator());
		}

		setAvatar("");
		navigate("/");
	};

	return (
		<div className="main-wrapper">
			<div className="section login-header" style={{ backgroundColor: "#309255" }}>
				<div className="login-header-wrapper navbar navbar-expand">
					<div className="login-header-logo">
						<a href="/">
							<img src="assets/images/logo-icon.png" alt="Logo" />
						</a>
					</div>
					<div className="login-header-search dropdown">
						<div className="search-input dropdown-menu"></div>
					</div>
					<div className="login-header-action ml-auto">
						<div className="dropdown">
							<button className="action notification" data-bs-toggle="dropdown">
								<FiMail color="white" />
							</button>
							<div className="dropdown-menu dropdown-notification">
								<ul className="notification-items-list">
									<li className="notification-item">
										<span className="notify-icon bg-success text-white">
											<i>
												<AiOutlineUser />
											</i>
										</span>
										<div className="dropdown-body">
											<span>
												<p>
													<strong>Martin</strong> has added a{" "}
													<strong>customer</strong> Successfully
												</p>
											</span>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
									<li className="notification-item">
										<span className="notify-icon bg-success text-white">
											<i>
												<AiOutlineUser />
											</i>
										</span>
										<div className="dropdown-body">
											<span>
												<p>
													<strong>Jennifer</strong> purchased Light Dashboard
													2.0.
												</p>
											</span>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
									<li className="notification-item">
										<span className="notify-icon bg-danger text-white">
											<i>
												<FiHeart />
											</i>
										</span>
										<div className="dropdown-body">
											<span>
												<p>
													<strong>Robin</strong> marked a{" "}
													<strong>ticket</strong> as unsolved.
												</p>
											</span>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
									<li className="notification-item">
										<span className="notify-icon bg-success text-white">
											<i>
												<AiOutlineUser />
											</i>
										</span>
										<div className="dropdown-body">
											<span>
												<p>
													<strong>David</strong> purchased Light Dashboard 1.0.
												</p>
											</span>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
									<li className="notification-item">
										<span className="notify-icon bg-success text-white">
											<i>
												<AiOutlineUser />
											</i>
										</span>
										<div className="dropdown-body">
											<span>
												<p>
													<strong> James.</strong> has added a
													<strong>customer</strong> Successfully
												</p>
											</span>
										</div>
										<span className="notify-time">3:20 am</span>
									</li>
								</ul>
								<span className="all-notification">See all notifications</span>
							</div>
						</div>

						<span className="action author">
							<Avatar
								sx={{
									bgcolor: "#fff",
									color: "#309255",
									width: "60px",
									height: "60px",
									fontSize: "1.5rem",
								}}
							>
								{avatar.slice(0, 1)}
							</Avatar>
						</span>

						<div className="dropdown">
							<button className="action more" data-bs-toggle="dropdown">
								<span></span>
								<span></span>
								<span></span>
							</button>
							<ul className="dropdown-menu">
								<li>
									<button
										style={{ border: "none", backgroundColor: "#fff" }}
										onClick={() => navigate("/profile")}
									>
										<AiOutlineUser />
										{"   "}
										{studentInfo ? studentInfo.name : educatorInfo.name}
									</button>
								</li>
								<li>
									<button
										style={{ border: "none", backgroundColor: "#fff" }}
										onClick={logoutHandle}
									>
										<FiLogOut />
										{"   "}Log Out
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<div className="courses-enroll-wrapper">
					<div className="courses-video-player">
						<div className="vidcontainer">
							<ReactPlayer 
								url={url} 
								controls={true}
								style={{width:'100%', height:'100%'}}
							/>
						</div>

						<div className="courses-enroll-content">
							<div className="courses-enroll-title">
								<h2 className="title">
									Finance & Investment Series: Learn to Budget and Calculate
									Your Net Worth.
								</h2>
								<p>
									<i>
										<FiEye />
									</i>{" "}
									<span>8,350</span> Students are watching
								</p>
							</div>
							<div className="courses-enroll-tab">
								<div className="enroll-tab-menu">
									<ul className="nav">
										<li>
											<button
												className="active"
												data-bs-toggle="tab"
												data-bs-target="#tab1"
											>
												Overview
											</button>
										</li>
										<li>
											<button data-bs-toggle="tab" data-bs-target="#tab2">
												Description
											</button>
										</li>
										<li>
											<button data-bs-toggle="tab" data-bs-target="#tab3">
												Certificates
											</button>
										</li>
										<li>
											<button data-bs-toggle="tab" data-bs-target="#tab4">
												Instructor
											</button>
										</li>
									</ul>
								</div>
								<div className="enroll-share">
									<i>
										<FiShare2 />
									</i>{" "}
									Share
								</div>
							</div>
							<div className="courses-enroll-tab-content">
								<div className="tab-content">
									<div className="tab-pane fade show active" id="tab1">
										<div className="overview">
											<div className="row">
												<div className="col-lg-4">
													<div className="enroll-tab-title">
														<h3 className="title">Course Details</h3>
													</div>
												</div>
												<div className="col-lg-8">
													<div className="enroll-tab-content">
														<p>{data.cousreDetails}</p>
														<table className="table">
															<tbody>
																<tr>
																	<th>
																		Instructor <span>:</span>
																	</th>
																	<td>Pamela Foster</td>
																</tr>
																<tr>
																	<th>
																		Duration <span>:</span>
																	</th>
																	<td>08 hr 15 mins</td>
																</tr>
																<tr>
																	<th>
																		Lectures <span>:</span>
																	</th>
																	<td>2,16</td>
																</tr>
																<tr>
																	<th>
																		Level <span>:</span>
																	</th>
																	<td>Secondary</td>
																</tr>
																<tr>
																	<th>
																		Language <span>:</span>
																	</th>
																	<td>English</td>
																</tr>
																<tr>
																	<th>
																		Caption’s <span>:</span>
																	</th>
																	<td>Yes</td>
																</tr>
															</tbody>
														</table>
														<p>{data.cousreDetailU}</p>
														<p>{data.cousreDetailD}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="tab2">
										<div className="description">
											<div className="row">
												<div className="col-lg-4">
													<div className="enroll-tab-title">
														<h3 className="title">Description</h3>
													</div>
												</div>
												<div className="col-lg-8">
													<div className="enroll-tab-content">
														<p>{data.desc1}</p>
														<p className="text">{data.desc2}</p>
														<p>{data.desc3}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="tab3">
										<div className="certificates">
											<div className="row">
												<div className="col-lg-4">
													<div className="enroll-tab-title">
														<h3 className="title">EduLe Certificates</h3>
													</div>
												</div>
												<div className="col-lg-8">
													<div className="enroll-tab-content">
														<p>{data.certificates}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="tab4">
										<div className="instructor">
											<div className="row">
												<div className="col-lg-4">
													<div className="enroll-tab-title">
														<h3 className="title">Instructor</h3>
													</div>
												</div>
												<div className="col-lg-8">
													<div className="enroll-tab-content">
														<div className="single-instructor">
															<div className="review-author">
																<div className="author-thumb">
																	<img
																		src="assets/images/author/author-06.jpg"
																		alt="Author"
																	/>
																</div>
																<div className="author-content">
																	<h4 className="name">Sara Alexander</h4>
																	<span className="designation">
																		Product Designer, USA
																	</span>
																	<span className="rating-star">
																		<span
																			className="rating-bar"
																			style={{ width: "80%" }}
																		></span>
																	</span>
																</div>
															</div>
															<p>{data.instructor}</p>
														</div>
														<div className="single-instructor">
															<div className="review-author">
																<div className="author-thumb">
																	<img
																		src="assets/images/author/author-07.jpg"
																		alt="Author"
																	/>
																</div>
																<div className="author-content">
																	<h4 className="name">Karol Bachman</h4>
																	<span className="designation">
																		Product Designer, USA
																	</span>
																	<span className="rating-star">
																		<span
																			className="rating-bar"
																			style={{ width: "80%" }}
																		></span>
																	</span>
																</div>
															</div>
															<p>{data.instructor}</p>
														</div>
														<div className="single-instructor">
															<div className="review-author">
																<div className="author-thumb">
																	<img
																		src="assets/images/author/author-03.jpg"
																		alt="Author"
																	/>
																</div>
																<div className="author-content">
																	<h4 className="name">Gertude Culbertson</h4>
																	<span className="designation">
																		Product Designer, USA
																	</span>
																	<span className="rating-star">
																		<span
																			className="rating-bar"
																			style={{ width: "80%" }}
																		></span>
																	</span>
																</div>
															</div>
															<p>{data.instructor}</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="courses-video-playlist">
						<div className="playlist-title">
							<h3 className="title">Course Content</h3>
							<span>80 Lessons (8h 15m)</span>
						</div>

						{/* <!-- Video Playlist Start  --> */}
						<div className="video-playlist">
							<div className="accordion" id="videoPlaylist">
								{/* <!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
									>
										<p>
											Lesson-01: Mindful Growth & the Creative Journey, Find
											Your Spark & Map Your Future
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>

									<div
										id="collapseOne"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
											<a
												href="#/"
												className="link active"
												onClick={() => setUrl('https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119')}
											>
												<p>01. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119")}
											>
												<p>02. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119")}
											>
												<p>03. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>04. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>
													05. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>06. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>07. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>08. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->
								<!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTwo"
									>
										<p>
											Lesson-02: Science Fiction & Fantasy: Creating Unique and
											Powerful Worlds
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>
									<div
										id="collapseTwo"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
										<a
												href="#/"
												className="link active"
												onClick={() => setUrl('https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119')}
											>
												<p>09. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119")}
											>
												<p>10. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119")}
											>
												<p>11. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>12. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>
													13. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>14. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>15. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>16. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->
								<!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseThree"
									>
										<p>
											Lesson-03: Autobiographical Fiction: Write a Short tory
											from Personal Experience
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>

									<div
										id="collapseThree"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
										<a
												href="#/"
												className="link active"
												onClick={() => setUrl('https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119')}
											>
												<p>17. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119")}
											>
												<p>18. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119")}
											>
												<p>19. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>20. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>
													21. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>22. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>23. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>24. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->
								<!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseFour"
									>
										<p>
											Lesson-04: Writing for Self-Discovery: 6 Journaling
											Prompts for Gratitude and Growth
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>

									<div
										id="collapseFour"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
										<a
												href="#/"
												className="link active"
												onClick={() => setUrl('https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119')}
											>
												<p>25. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119")}
											>
												<p>26. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119")}
											>
												<p>27. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>28. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>
													29. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>30. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>31. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>32. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->
								<!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseFive"
									>
										<p>
											Lesson-05: Copywriting For Beginners: How To Write Web
											Copy That Sells Without Being Cheesy
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>

									<div
										id="collapseFive"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
											<a
												href="#/"
												className="link active"
												onClick={() => setUrl('https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119')}
											>
												<p>33. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119")}
											>
												<p>34. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119")}
											>
												<p>35. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>36. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>
													37. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>38. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>39. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>40. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->
								<!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseSix"
									>
										<p>
											Lesson-06: How to Write a Personal Statement - The
											Complete Medicine MasterclassName
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>
									<div
										id="collapseSix"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
										<a
												href="#/"
												className="link active"
												onClick={() => setUrl('https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119')}
											>
												<p>41. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119")}
											>
												<p>42. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119")}
											>
												<p>43. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>44. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>
													45. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>46. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>47. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>48. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->
								<!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseSaven"
									>
										<p>
											Lesson-07: Autobiographical Fiction: Write a Short tory
											from Personal Experience
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>
									<div
										id="collapseSaven"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
										<a
												href="#/"
												className="link active"
												onClick={() => setUrl('https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119')}
											>
												<p>49. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119")}
											>
												<p>50. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119")}
											>
												<p>51. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>52. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>
													53. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>54. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>55. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>56. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->
								<!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseEight"
									>
										<p>
											Lesson-08: Writing for Self-Discovery: 6 Journaling
											Prompts for Gratitude and Growth
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>
									<div
										id="collapseEight"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
										<a
												href="#/"
												className="link active"
												onClick={() => setUrl('https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119')}
											>
												<p>57. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119")}
											>
												<p>58. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119")}
											>
												<p>59. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>60. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>
													61. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>62. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>63. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>64. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->
								<!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseNine"
									>
										<p>
											Lesson-09: Copywriting For Beginners: How To Write Web
											Copy That Sells Without Being Cheesy
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>
									<div
										id="collapseNine"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
										<a
												href="#/"
												className="link active"
												onClick={() => setUrl('https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119')}
											>
												<p>65. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119")}
											>
												<p>66. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119")}
											>
												<p>67. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>68. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>
													69. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>70. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>71. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>72. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  -->
								<!-- Accordion Items Start  --> */}
								<div className="accordion-item">
									<button
										className="collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTen"
									>
										<p>
											Lesson-10: How to Write a Personal Statement - The
											Complete Medicine MasterclassName
										</p>
										<span className="total-duration">01 hour 48 minutes</span>
									</button>
									<div
										id="collapseTen"
										className="accordion-collapse collapse"
										data-bs-parent="#videoPlaylist"
									>
										<nav className="vids">
										<a
												href="#/"
												className="link active"
												onClick={() => setUrl('https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119')}
											>
												<p>73. The Complete Medicine MasterclassName</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119")}
											>
												<p>74. Standard dummy text ever since the</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119")}
											>
												<p>75. Printer took a galley of type and scrambled</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>76. It to make a type specimen book & break</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>
													77. Survived not only five centuries also the leap
												</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>78. Into typesettingremaining essentially</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>79. Unchanged. It was popularised in the 1960s</p>
												<span className="total-duration">08 minutes</span>
											</a>
											<a
												href="#/"
												className="link"
												onClick={() => setUrl("https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119")}
											>
												<p>80. The release of Letraset sheets containing</p>
												<span className="total-duration">08 minutes</span>
											</a>
										</nav>
									</div>
								</div>
								{/* <!-- Accordion Items End  --> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Download />
			<Footer />
		</div>
	);
}

export default Courses;
