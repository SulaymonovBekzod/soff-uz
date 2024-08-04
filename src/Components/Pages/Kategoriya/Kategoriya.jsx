import React from 'react';
import './Kategoriya.css';

export default function Kategoriya() {
  return (
    <div className='container w-[90%] m-auto'>
      <div className="row flex gap-2 bg-green-600 rounded-lg mt-24 p-6">
        <div>
          <h1 className='text-[20px] text-white font-extrabold mt-6 ml-5'>Soff.uz -</h1>
        </div>
        <div>
          <p className='mt-7 text-white h-16'>biz bilan bilimingiz orqali daromad qiling</p>
        </div>
      </div>
      <h1 className='mt-8 text-xl font-bold'>Kategoriyalar</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
        <div className='flex flex-col items-center border-2 rounded-lg border-gray-500 p-2'>
          <img className='w-32 h-32 object-cover' src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/pngaaa.com-3364991.png" alt="Audio Material" />
          <p className='mt-2 text-center'>AUDIO MATERIALLAR</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg border-gray-500 p-2'>
          <img className='w-32 h-32 object-cover' src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/Business-plans-300x300_vRd60Qz.png" alt="Biznes Rejalar" />
          <p className='mt-2 text-center'>BIZNES REJALAR</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg border-gray-500 p-2'>
          <img className='w-32 h-32 object-cover' src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/images.png" alt="Video Material" />
          <p className='mt-2 text-center'>VIDEO MATERIALLAR</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg border-gray-500 p-2'>
          <img className='w-32 h-32 object-cover' src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/2024-04-08_16.37.12.jpg" alt="Tayyör Shablonlar" />
          <p className='mt-2 text-center'>TAYYOR SHABLONLAR</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg border-gray-500 p-2'>
          <img className='w-32 h-32 object-cover' src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/tmpiia.jpg" alt="Taqdimotlar" />
          <p className='mt-2 text-center'>TAQDIMOTLAR</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg border-gray-500 p-2'>
          <img className='w-32 h-32 object-cover' src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/photo_2023-10-14_21-21-36-removebg-preview.png" alt="Kurs Ishlari" />
          <p className='mt-2 text-center'>KURS ISHLARI</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg border-gray-500 p-2'>
          <img className='w-32 h-32 object-cover' src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/photo_2023-10-14_21-21-36-removebg-preview.png" alt="Diplom Ishlari" />
          <p className='mt-2 text-center'>DIPLOM ISHLARI</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg border-gray-500 p-2'>
          <img className='w-32 h-32 object-cover' src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/photo_2023-10-14_21-31-27-removebg-preview.png" alt="Referatlar" />
          <p className='mt-2 text-center'>REFERATLAR</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg border-gray-500 p-2'>
          <img className='w-32 h-32 object-cover' src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/photo_2023-10-14_21-31-27-removebg-preview.png" alt="Mustaqil Ishlari" />
          <p className='mt-2 text-center'>MUSTAQIL ISHLARI</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg border-gray-500 p-2'>
          <img className='w-32 h-32 object-cover' src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/3a622e137674275.620f20189b75c_lnj3419.jpg" alt="Laboratoriya Ishlari" />
          <p className='mt-2 text-center'>LABORATORIYA ISHLARI</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg border-gray-500 p-2'>
          <img className='w-32 h-32 object-cover' src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/kjhkhjkhjkhjkh.jpeg" alt="Disserratsiya Ishlari" />
          <p className='mt-2 text-center'>DISSERRATSIYA ISHLARI</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg border-gray-500 p-2'>
          <img className='w-32 h-32 object-cover' src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/test-300x300_bFZyuZQ.png" alt="Testlar" />
          <p className='mt-2 text-center'>TESTLAR</p>
        </div>
      </div>
    </div>
  );
}
