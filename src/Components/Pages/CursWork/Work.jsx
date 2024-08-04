import React from "react";

export default function Work() {
  return (
    <div className="work_container w-[90%] m-auto">
      <div className="work_row">
        <div className="work_section bg-green-600 h-16 mt-20">
          <h1 className="text-[20px] font-extrabold text-white p-4">
            Kurs ishlari
          </h1>
        </div>
      </div>
      <div className="work_items_container flex gap-5 justify-between mt-8">
        {[
          "Maktabgacha ta’limda nazoratchi tomonidan metodik ishlarga rahbarlik qilish",
          "Mirzo Ulug‘bek asarlarida arifmetikaning rivojlanishi haqida dastlabki ma’lumotlar",
          "Ekskursiya – maktabgacha yoshdagi bolalarni aqliy jihatdan tarbiyalash shakli",
          "Turli maktabgacha yoshdagi bolalarning vaqtni idrok qilishi. Mashg‘ulotlarni tashkil etish",
          "Mashg‘ulot-maktabgacha yoshdagi bolalarda ta’lim berishning asosiy shakli",
          "O‘yin – bola faoliyatini asosiy turi",
        ].map((title, index) => (
          <div className="work_item w-[30%] flex flex-col items-center mb-8 bg-white shadow-lg overflow-hidden" key={index}>
            <img
              src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/Images/308MMb.docx_page-1_generate.jpg"
              alt=""
              className="w-[80%] h-auto mt-4"
            />
            <div className="p-4">
              <h5 className="text-center mt-4 text-lg font-semibold">{title}</h5>
              <p className="text-center text-gray-600 mt-2">31 000</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
