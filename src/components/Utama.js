// Utama.js
import React from 'react';
import './Utama.css';

const Utama = () => (
  <div className="utama">
    <header className="hero">
      <div className="hero-content">
        <h1>Welcome to Koperasi Kakitangan Kumpulan BIMB Holdings Malaysia Berhad</h1>
        <p>We are committed to providing exceptional services to our employees and customers.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </header>

    <section className="features">
      <div className="feature">
        <h2>Our Services</h2>
        <p>Explore our wide range of services tailored for our employees and customers.</p>
      </div>
      <div className="feature">
        <h2>Our Mission</h2>
        <p>To deliver the highest quality services and exceed our customers' expectations.</p>
      </div>
      <div className="feature">
        <h2>Our Values</h2>
        <p>Integrity, Innovation, Excellence - driving our commitment to success.</p>
      </div>
    </section>

    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
        <span>- John Doe</span>
      </div>
      <div className="testimonial">
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."</p>
        <span>- Jane Doe</span>
      </div>
    </section>

    <footer className="footer">
      <p>&copy; 2024 Koperasi Kakitangan Kumpulan BIMB Holdings Malaysia Berhad. All rights reserved.</p>
    </footer>
  </div>
);

export default Utama;
