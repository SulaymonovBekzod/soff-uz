import React from "react";

export default function Presentations() {
  return (
    <div className="presentations_container w-[90%] m-auto">
      <div className="presentations_section bg-green-600 h-16 flex-grow flex items-center mt-20">
        <h1 className="text-[20px] font-extrabold text-white p-4">
          Taqdimotlar 
        </h1>
      </div>
      <div className="flex gap-6 mt-10">
        <div className="flex flex-col items-center bg-white p-4 shadow-lg w-full md:w-[30%]">
          <img 
            className='w-full h-[180px] object-cover mb-4'
            src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/Images/KASPERSKIY_ANTIVIRUS_VOSITASI_VA_UNDAN_FOYDALANISHkWh.pptx_page-1_generate.jpg" 
            alt="Kaspersky Antivirus" 
          />
          <p className='text-blue-600 text-center mb-2'>KASPERSKIY ANTIVIRUS VOSITASI VA UNDAN FOYDALANISH</p>
          <p className='text-center'>20 000 so`m</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow-lg w-full md:w-[30%]">
          <img 
            className='w-full h-[180px] object-cover mb-4'
            src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/Images/fitsinFKK.pptx_page-1_generate.jpg" 
            alt="Fitsin Ferment" 
          />
          <p className='text-blue-600 text-center mb-2'>Fitsin fermentining oziq-ovqat sanoatida qo’llanilishi</p>
          <p className='text-center'>7 000 so`m</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow-lg w-full md:w-[30%]">
          <img 
            className='w-full h-[180px] object-cover mb-4'
            src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/Images/Avtomatlashtirilgan_axborot-boshqaruv_tizimlariga_ma%CA%BClumot_uzatish_kanallari5XN.pptx_page-1_generate.jpg" 
            alt="Axborot-Boshqaruv Tizimlari" 
          />
          <p className='text-blue-600 text-center mb-2'>Avtomatlashtirilgan axborot-boshqaruv tizimlariga maʼlumot uzatish kanallari</p>
          <p className='text-center'>5 000 so`m</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow-lg w-full md:w-[30%]">
          <img 
            className='w-full h-[180px] object-cover mb-4'
            src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/Images/Famous_places_of_Uzbekistan3Iy.pptx_page-1_generate.jpg" 
            alt="Famous Places" 
          />
          <p className='text-blue-600 text-center mb-2'>Famous places of Uzbekistan</p>
          <p className='text-center'>4 450 so`m</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow-lg w-full md:w-[30%]">
          <img 
            className='w-full h-[180px] object-cover mb-4'
            src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/Images/Falsafa1jUS.pptx_page-1_generate.jpg" 
            alt="Abdurauf Fitrat" 
          />
          <p className='text-blue-600 text-center mb-2'>Abdurauf Fitratning “Oila “ asarida oila qurish va farzand tarbiyasi</p>
          <p className='text-center'>5 000 so`m</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow-lg w-full md:w-[30%]">
          <img 
            className='w-full h-[180px] object-cover mb-4'
            src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/Images/EnzimologiyaeqP.pptx_page-1_generate.jpg" 
            alt="Rennin Fermenti" 
          />
          <p className='text-blue-600 text-center mb-2'>Rennin fermentining oziq-ovqat sanoatida qo’llanilishi</p>
          <p className='text-center'>5 000 so`m</p>
        </div>
      </div>
    </div>
  );
}
