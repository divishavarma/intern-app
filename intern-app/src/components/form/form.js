import React, { useState } from "react";
import "./form.css";
import { validateForm } from "./validation.js";
import LandingPage from "./landing.js";
import axios from 'axios';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  // Perform form validation using the validateForm function
  const isValid = validateForm(formData);

  if (isValid) {
    try {
      await axios.post('http://localhost:9002/api/user', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  }
};

  if (isSubmitted) {
    return <LandingPage />;
  }

  return (
    <div className="container">
      <div className="apply_box">
        <h1>
          Job Application
          <span className="title_small">(Web)</span>
        </h1>
        <form action="http://localhost:9002/api/user" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="form_container">
            <div className="form_control">
              <label htmlFor="first_name"> First Name </label>
              <input
                id="first_name"
                name="first_name"
                placeholder="Enter First Name..."
              />
            </div>
            <div className="form_control">
              <label htmlFor="last_name"> Last Name </label>
              <input
                id="last_name"
                name="last_name"
                placeholder="Enter Last Name..."
              />
            </div>
            <div className="form_control">
              <label htmlFor="email"> Email </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email..."
              />
            </div>
            <div className="form_control">
              <label htmlFor="job_role"> Job Role </label>
              <select id="job_role" name="job_role">
                <option value="">Select Job Role</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="full_stack">Full Stack Developer</option>
                <option value="ui_ux">UI UX Designer</option>
              </select>
            </div>
            <div className="textarea_control">
              <label htmlFor="address"> Address </label>
              <textarea
                id="address"
                name="address"
                rows="4"
                cols="50"
                placeholder="Enter Address"
              ></textarea>
            </div>
            <div className="form_control">
              <label htmlFor="city"> City </label>
              <input id="city" name="city" placeholder="Enter City Name..." />
            </div>
            <div className="form_control">
              <label htmlFor="pincode"> Pincode </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                placeholder="Enter Pincode Name..."
              />
            </div>
            <div className="form_control">
              <label htmlFor="date"> Date </label>
              <input
                value="2022-01-10"
                type="date"
                id="date"
                name="date"
              />
            </div>
            <div className="form_control">
              <label htmlFor="upload"> Upload Your CV </label>
              <input type="file" id="upload" name="resume" />
            </div>
          </div>
          <div className="button_container">
            <button type="submit">Apply Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;





// import React, { useState, useEffect } from "react";
// import "./form.css";
// // import { validateForm } from "./validation.js";
//
//
// const Form = () => {
//   return (
//     <div className="container">
//       <div className="apply_box">
//         <h1>
//           Job Application
//           <span className="title_small">(Web)</span>
//         </h1>
//         <form action="http://localhost:5000/apply" method="POST">
          // <div className="form_container">
          //   <div className="form_control">
          //     <label htmlFor="first_name"> First Name </label>
          //     <input
          //       id="first_name"
          //       name="first_name"
          //       placeholder="Enter First Name..."
          //     />
          //   </div>
          //   <div className="form_control">
          //     <label htmlFor="last_name"> Last Name </label>
          //     <input
          //       id="last_name"
          //       name="last_name"
          //       placeholder="Enter Last Name..."
          //     />
          //   </div>
          //   <div className="form_control">
          //     <label htmlFor="email"> Email </label>
          //     <input
          //       type="email"
          //       id="email"
          //       name="email"
          //       placeholder="Enter Email..."
          //     />
          //   </div>
          //   <div className="form_control">
          //     <label htmlFor="job_role"> Job Role </label>
          //     <select id="job_role" name="job_role">
          //       <option value="">Select Job Role</option>
          //       <option value="frontend">Frontend Developer</option>
          //       <option value="backend">Backend Developer</option>
          //       <option value="full_stack">Full Stack Developer</option>
          //       <option value="ui_ux">UI UX Designer</option>
          //     </select>
          //   </div>
          //   <div className="textarea_control">
          //     <label htmlFor="address"> Address </label>
          //     <textarea
          //       id="address"
          //       name="address"
          //       rows="4"
          //       cols="50"
          //       placeholder="Enter Address"
          //     ></textarea>
          //   </div>
          //   <div className="form_control">
          //     <label htmlFor="city"> City </label>
          //     <input id="city" name="city" placeholder="Enter City Name..." />
          //   </div>
          //   <div className="form_control">
          //     <label htmlFor="pincode"> Pincode </label>
          //     <input
          //       type="number"
          //       id="pincode"
          //       name="pincode"
          //       placeholder="Enter Pincode Name..."
          //     />
          //   </div>
          //   <div className="form_control">
          //     <label htmlFor="date"> Date </label>
          //     <input
          //       value="2022-01-10"
          //       type="date"
          //       id="date"
          //       name="date"
          //     />
          //   </div>
          //   <div className="form_control">
          //     <label htmlFor="upload"> Upload Your CV </label>
          //     <input type="file" id="upload" name="upload" />
          //   </div>
          // </div>
          // <div className="button_container">
          //   <button type="submit">Apply Now</button>
          // </div>
//         </form>
//       </div>
//     </div>
//   )
//  };
// export default Form;
