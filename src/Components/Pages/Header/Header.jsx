import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header_container">
      <div className="header_row">
        <div className="header_section mt-20">
          <h1>Soff.uz - qidiruv tizimi</h1>
          <p>
            O‘zbek tilida saralanib borilayotgan sifatli ma’lumotlar jamlanmasini,
            fayllar, <br /> tasvirlar, videolar, audiolar ko‘rinishida qidirib topish
            imkonini beradi.
          </p>
        </div>
        <div className="search_container">
          <input className="soff_input" type="text" placeholder="Qidiruv" />
          <button className="soff_btn">Qidiruv</button>
        </div>
      </div>
    </div>
  );
}
