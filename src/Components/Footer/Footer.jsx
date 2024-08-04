import React from "react";
import Location from '../../Images/location.png';
import Phone from '../../Images/phone.png';
import Message from '../../Images/mail.png';

export default function Footer() {
  return (
    <div className="footer_container w-full bg-blue-950 py-10 mt-16">
      <div className="footer_row w-[90%] m-auto flex flex-col md:flex-row justify-between items-start p-5">
        <div className="footer_section flex flex-col gap-10 w-full md:w-2/3">
          <div className="flex items-center">
            <img src={Location} alt="Location" className="w-10 h-10 mr-4" />
            <div>
              <p className="text-white">8/1 Bunyodkor Avenue</p>
              <h4 className="text-white">Toshkent</h4>
            </div>
          </div>
          <div className="flex items-center">
            <img src={Phone} alt="Phone" className="w-10 h-10 mr-4" />
            <h4 className="text-white">+998 (91) 008 67 89</h4>
          </div>
          <div className="flex items-center">
            <img src={Message} alt="Email" className="w-10 h-10 mr-4" />
            <h4 className="text-white">support@soff.uz</h4>
          </div>
        </div>
        <div className="footer_info w-full md:w-1/3 text-white">
          <h1 className="text-[18px] font-extrabold mb-4">Soff.uz</h1>
          <p>Soff.uz - Intellektual mulk marketi, Intellektual mahsulotlarini soting va xarid qiling.</p>
          <p className="">Loyiha rivoji uchun o'z hissangizni qo'shing - Donat</p>
        </div>
      </div>
      <hr className="w-[90%] m-auto h-0.5 mt-10" />
      <div className="w-[90%] m-auto mt-5 flex justify-between items-center text-white">
        <p>2023 soff.uz | Barcha huquqlar himoyalangan.</p>
        <div className="flex items-center">
            <p className="mr-2">Sayt ishlab chiqaruvchi:</p>
            <img src="https://soff.uz/static/img/soffhub.png" alt="SoffHub" className="w-24" />
        </div>
      </div>
    </div>
  );
}
