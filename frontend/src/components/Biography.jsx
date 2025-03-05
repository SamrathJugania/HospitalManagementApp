import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Welcome to SJCare, a trusted healthcare institution dedicated to providing exceptional medical care with compassion and innovation. With a team of highly skilled doctors and advanced medical technology, we strive to ensure the best possible treatment for every patient. Our state-of-the-art facilities and patient-centered approach make us a leading name in quality healthcare.
          </p>
          <p>
          At SJCare, we offer a wide range of medical services, including emergency and critical care, specialized treatments in cardiology, neurology, orthopedics, oncology, and more. Our hospital is equipped with modern diagnostic and surgical facilities, along with maternity and child care services, rehabilitation programs, and a well-stocked pharmacy to ensure comprehensive healthcare under one roof.
          </p>
          <p>Our mission is to make world-class healthcare accessible and affordable for all. We focus on providing seamless patient experiences through digital records, hassle-free appointments, and cashless treatment options. At SJCare, your health and well-being are our top priorities.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;