import React from 'react';

export default function Template() {
  return (
    <div className='template_container w-[90%] m-auto'>
      <div className="template_row flex justify-between items-center mt-20">
        <div className="template_section bg-green-600 h-16 flex-grow flex items-center">
            <h1 className='text-[20px] font-extrabold text-white p-4'>Tayyor shablonlar</h1>
        </div>
      </div>
      <div className="flex gap-6 mt-10">
        <div className="flex flex-col items-center bg-white p-4 shadow-md">
            <img 
              className='w-[100%] h-32 object-cover mb-4'
              src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/poster/photo_2024-06-28_20-31-17.jpg" 
              alt="" 
            />
            <p className='text-blue-600 text-center'>Winforms (C#) yordamida <br /> mashhur Snake Game (Iloncha o'yini)</p>
            <p className='text-center'>15 000 so`m</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow-md">
            <img 
              className='w-[100%] h-32 object-cover mb-4'
              src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/poster/25oct7.jpg" 
              alt="" 
            />
            <p className='text-blue-600 text-center'>Ijtimoiy tarmoqlaringiz <br /> uchun SUPER banner. PSD formatda</p>
            <p className='text-center'>21 350 so`m</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow-md">
            <img 
              className='w-[65%] h-32 object-cover mb-4'
              src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/poster/2mx6m.jpg" 
              alt="" 
            />
            <p className='text-blue-600 text-center'>Banner-2,5m X 6m, reklama uchun tashqi banner PSD formatda</p>
            <p className='text-center'>31 246 so`m</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow-md">
            <img 
              className='w-[100%] h-32 object-cover mb-4'
              src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/poster/2mx6m.jpg" 
              alt="" 
            />
            <p className='text-blue-600 text-center'>Ijtimoiy tarmoqlar uchun reklama shabloni</p>
            <p className='text-center'>29 784 so`m</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow-md">
            <img 
              className='w-[100%] h-32 object-cover mb-4'
              src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/poster/photo_2024-06-09_01-42-20_2weSnL0.jpg" 
              alt="" 
            />
            <p className='text-blue-600 text-center'>Ijtimoiy tarmoqlaringiz uchun SUPER banner. PSD formatda</p>
            <button className='bg-amber-200 text-[15px] font-extrabold px-4 py-2 rounded'>Bepul</button>
        </div>
        <div className="flex flex-col items-center bg-white p-4 shadow-md">
            <img 
              className='w-[100%] h-32 object-cover mb-4'
              src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/poster/photo_2024-06-09_01-18-42.jpg" 
              alt="" 
            />
            <p className='text-blue-600 text-center'>Ijtimoiy tarmoqlaringiz uchun SUPER banner. PSD formatda</p>
            <button className='bg-amber-200 text-[15px] font-extrabold px-4 py-2 rounded'>Bepul</button>
        </div>
      </div>
    </div>
  );
}
