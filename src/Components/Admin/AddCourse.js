import React, { useEffect, useState } from 'react'
import { FiBookOpen } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { educatorAuth } from '../../store/actions/educatorAction';
import { studentAuth } from '../../store/actions/studentsAction';
import Download from '../Download';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ScrollButton from '../ScrollButton';

const AddCourse = () => {
const [scrollState, setScrollState] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isStudent, setIsStudent] = useState(false);
const dispatch = useDispatch();
const educatorA = useSelector((state) => state.educatorAuthReducer);
const {
	loading: EducatorLoading,
	error: educatorError,
	educatorInfo,
} = educatorA;
const studentA = useSelector((state) => state.studentAuthReducer);
const { loading, error, studentInfo } = studentA;
const navigate = useNavigate();
useEffect(() => {
	window.addEventListener("scroll", (e) => {
		var scroll = window.pageYOffset;
		if (scroll <= 100) {
			setScrollState(false);
		} else {
			setScrollState(true);
		}
	});
	// if(educatorIn)
});
// useEffect(() => {
// 	if (educatorInfo) {
// 		navigate("/admin");
// 	}
// }, [navigate, educatorInfo, isStudent]);
// useEffect(() => {
// 	if (studentInfo) {
// 		navigate("/courses");
// 	}
// }, [navigate, studentInfo]);

const loginHandle = (e) => {
	e.preventDefault();
	console.log(isStudent);
	if (isStudent) {
		dispatch(studentAuth(email, password));
	} else {
		dispatch(educatorAuth(email, password));
	}
	setEmail("");
	setPassword("");
};
  return (
		<div className="main-wrapper">
			{/* <!-- Header Section Start --> */}
			<Navbar scrollState={scrollState} />
			{/* <!-- Overlay Start --> */}
			<div className="overlay"></div>
			{/* <!-- Overlay End --> */}

			{/* <!-- Page Banner Start --> */}
			<div className="section page-banner">
				<img
					className="shape-2"
					src="assets/images/shape/shape-23.png"
					alt="Shape"
				/>

				<div className="container">
					{/* <!-- Page Banner Start --> */}
					<div className="page-banner-content">
						<ul className="breadcrumb">
							<li>
								<a href="/">Home</a>
							</li>
							<li className="active">Add Course</li>
						</ul>
						<h2 className="title">
							Add <span>Course</span>
						</h2>
					</div>
					{/* <!-- Page Banner End --> */}
				</div>

				{/* <!-- Shape Icon Box Start --> */}
				<div className="shape-icon-box">
					<img
						className="icon-shape-1 "
						src="assets/images/shape/shape-5.png"
						alt="Shape"
					/>

					<div className="box-content">
						<div className="box-wrapper">
							<FiBookOpen color="#fff" size={50} />
						</div>
					</div>

					<img
						className="icon-shape-2"
						src="assets/images/shape/shape-6.png"
						alt="Shape"
					/>
				</div>
				{/* <!-- Shape Icon Box End --> */}

				<img
					className="shape-3"
					src="assets/images/shape/shape-24.png"
					alt="Shape"
				/>

				<img
					className="shape-author"
					src="assets/images/author/author-11.jpg"
					alt="Shape"
				/>
			</div>
			{/* <!-- Page Banner End --> */}

			{/* <!-- Register & Login Start --> */}
			<div className="section section-padding">
				<div className="container">
					{/* <!-- Register & Login Wrapper Start --> */}
					<div className="register-login-wrapper">
						<div className="row align-items-center">
							<div className="col-lg-6">
								{/* <!-- Register & Login Images Start --> */}
								<div className="register-login-images">
									<div className="shape-1">
										<img src="assets/images/shape/shape-26.png" alt="Shape" />
									</div>

									<div className="images">
										<img
											src="assets/images/register-login.png"
											alt="Register Login"
										/>
									</div>
								</div>
								{/* <!-- Register & Login Images End --> */}
							</div>
							<div className="col-lg-6">
								{/* <!-- Register & Login Form Start --> */}
								<div className="register-login-form">
									<h3 className="title">
										Add <span>Now</span>
									</h3>

									<div className="form-wrapper">
										<form action="#" onSubmit={loginHandle}>
											{/* <!-- Single Form Start --> */}
											<div className="single-form">
												<input
													type="text"
													required
													placeholder="Course name"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
											<div className="single-form">
												<input
													type="text"
													required
													placeholder="Instructor name"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
											<div className="single-form">
												<input
													type="file"
													// alt='courseImg'
													required
													placeholder="Course image"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
											<div className="single-form">
												<input
													type="file"
													// alt='courseImg'
													required
													placeholder="Instructor image"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
											<div className="single-form">
												<input
													type="number"
													required
													placeholder="Price"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
											{/* <!-- Single Form End -->
                                        <!-- Single Form Start --> */}
											<div className="single-form">
												<input
													type="text"
													required
													placeholder="Description"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
												/>
											</div>
											<div className="single-form">
												<input
													type="text"
													required
													placeholder="Curriculum"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
												/>
											</div>
											{/* <!-- Single Form End -->
                      <!-- Single Form Start --> */}
											<div className="single-form">
												<button
													className="btn btn-primary btn-hover-dark w-100"
													onClick={() => {
														setIsStudent(true);
													}}
												>
													Login as Student
												</button>
												<button
													className="btn btn-secondary btn-outline w-100"
													onClick={() => {
														setIsStudent(false);
													}}
												>
													Login as Educator
												</button>
											</div>
											{/* <!-- Single Form End --> */}
										</form>
									</div>
								</div>
								{/* <!-- Register & Login Form End --> */}
							</div>
						</div>
					</div>
					{/* <!-- Register & Login Wrapper End --> */}
				</div>
			</div>
			{/* <!-- Register & Login End -->*/}

			<Download />
			<ScrollButton scrollState={scrollState} />
			<Footer />
			{/* <!-- Footer Start  --> */}
		</div>
	);
}

export default AddCourse