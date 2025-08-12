import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to Little Lemon 🍋</h2>
        <p>Delicious Mediterranean cuisine, freshly prepared every day.</p>
        <a href="/booking" className="cta-button">Book Your Table</a>
      </section>

      {/* Specials Section */}
      <section className="specials">
        <h3>Our Specials</h3>
        <div className="specials-grid">
          <div className="special-card">
            <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE63932z3pZhd3hO9ej0_2vZhaDyUCsraKmw&s" alt="Pasta" />
            <h4>Homemade Pasta</h4>
            <p>Fresh pasta tossed in a rich tomato sauce with herbs.</p>
          </div>
          <div className="special-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQI-Y0MnmSTKc_J7aEfDcRmWk9SrHB4fGImg&s" alt="Salad" />
            <h4>Greek Salad</h4>
            <p>Fresh veggies, feta cheese, and olives with lemon dressing.</p>
          </div>
          <div className="special-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMKJ3f9tFvIJS8HMjxcF5PF5QJm_xKhVeCA&s" alt="Dessert" />
            <h4>Lemon Tart</h4>
            <p>Sweet and tangy lemon tart with buttery crust.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h3>About Us</h3>
        <p>Little Lemon is a family-owned Mediterranean restaurant serving fresh and authentic dishes. Our recipes have been passed down for generations and are made with the freshest ingredients.</p>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h3>Gallery</h3>
        <div className="gallery-grid">
          <img src="https://images.wsj.net/im-65599456?size=1.5" alt="Restaurant" />
          <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBOklOQD4v4QChxo3sUS95NN34zI037jLgA&s" alt="Food" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb31ua5szGg5BAwgx4Bo2kPfqjPf9fxi8Adw&s" alt="Chef" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1L9LtgOTmu1I5ZuXYyr8685pauce8pH_svQ&s" alt="Dining" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3>What Our Customers Say</h3>
        <blockquote>“Best Mediterranean food I've ever had!” – Sarah J.</blockquote>
        <blockquote>“The lemon tart is to die for!” – David R.</blockquote>
      </section>

      {/* Contact */}
      <section className="contact">
        <h3>Contact Us</h3>
        <p>📍 123 Main Street, Foodie City</p>
        <p>📞 (123) 456-7890</p>
        <p>📧 info@littlelemon.com</p>
      </section>
    </div>
  );
}
