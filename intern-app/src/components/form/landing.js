import React from "react";
import "./landing.css";

const LandingPage = () => {
  const handleBackToForm = () => {
    // Use window.location to navigate back to the form page
    window.location.href = "/form";
  };

  return (
    <div className="container">
      <div className="landing_box">
        <h1>Thank you for your submission!</h1>
        <p>Your application has been successfully submitted.</p>
        <p>We will get back to you soon.</p>
        <button onClick={handleBackToForm}>Go Back to Form</button>
      </div>
    </div>
  );
};

export default LandingPage;







// import React from "react";
// import "./landing.css";
//
// const LandingPage = () => {
//   return (
//     <div className="container">
//       <div className="landing_box">
//         <h1>Thank you for your submission!</h1>
//         <p>Your application has been successfully submitted.</p>
//         <p>We will get back to you soon.</p>
//       </div>
//     </div>
//   );
// };
//
// export default LandingPage;
