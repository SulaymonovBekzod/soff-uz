import React from "react";
import "./Material.css";

export default function Material() {
  return (
    <div className="video_material w-[90%] m-auto">
      <div className="bg-green-600 h-16 mt-10">
        <h1 className="text-white text-[20px] font-extrabold p-4">Video materiallar</h1>
      </div>
      <div className="video_material grid grid-cols-3 gap-6 mt-10">
        <div className="video_section bg-white rounded-xl shadow-lg">
          <video
            className="w-full rounded-t-xl"
            id="videoPlayer-13605"
            controls
            controlsList="nodownload"
            src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/documents/IMG_5555.MOV"
            poster="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/poster/hq720.webp"
          ></video>
          <div className="p-4">
            <h5 className="font-bold">Dasturlashda qanday yo`nalish tan...</h5>
            <p className="mt-3">Zufarbek Abdurakhmonov</p>
            <button className="border-orange-500 border-2 text-orange-500 p-1 text-[15px] font-extrabold ">Bepul</button>
          </div>
        </div>
        <div className="video_section bg-white rounded-xl shadow-lg">
          <video
            className="w-full rounded-t-xl"
            id="videoPlayer-12024"
            controls
            controlsList="nodownload"
            src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/documents/VID_20240516_003844_056_Q9O3Yd0.mp4"
            poster="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/poster/444.jpg"
          ></video>
          <div className="p-4">
            <h5 className="font-bold">KASBIY PEDAGOGIK FANTAZIY</h5>
            <p className="mt-3">Sotuvchi 564</p>
            <h6>10 000 so`m</h6>
          </div>
        </div>
        <div className="video_section bg-white rounded-xl shadow-lg">
          <video
            className="dasturlash rounded-t-xl"
            id="videoPlayer-10390"
            controls
            controlsList="nodownload"
            src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/documents/202405172254.mp4"
            poster="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/poster/1_7sEmz1djskVKmye1MrQJrQ.webp"
          ></video>
          <div className="p-4">
            <h5 className="font-bold">Django loyihani ubuntu(VPS) server...</h5>
            <p className="mt-3">ALisher Shamuratov</p>
            <button className="border-orange-500 border-2 text-orange-500 p-1 text-[15px] font-extrabold">Bepul</button>
          </div>
        </div>
        <div className="video_section bg-white rounded-xl shadow-lg">
          <video
            className="w-full rounded-t-xl"
            id="videoPlayer-10196"
            controls
            controlsList="nodownload"
            src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/short_content/prevyusipechatni.mp4"
            poster="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/poster/maxresdefault_9PjAWCF.jpg"
          ></video>
          <div className="p-4">
            <h5 className="font-bold">WORD DASTURIDA MATNLI PEECHA...</h5>
            <p className="mt-3">Solijon Solayev</p>
            <div className="flex gap-10">
              <div>
              <h6>6 000 so`m</h6>
              </div>
              <div>
                <h6>1 200so`m</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="video_section bg-white rounded-xl shadow-lg">
          <video
            className="learn_english rounded-t-xl"
            id="videoPlayer-101"
            controls
            controlsList="nodownload"
            src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/short_content/shorts.mp4"
            poster="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/poster/15777869133477_z3tvXer.jpg"
          ></video>
          <div className="p-4">
            <h5 className="font-bold">Inglis tili darsi mavzu: there is are...</h5>
            <p className="mt-3">Oline store</p>
            <h6>3 0000so`m</h6>
          </div>
        </div>
        <div className="video_section bg-white rounded-xl shadow-lg">
          <video
            className="w-full rounded-t-xl"
            id="videoPlayer-10085"
            controls
            controlsList="nodownload"
            src="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/documents/VID_20240516_003844_056_Q9O3Yd0.mp4"
            poster="https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/poster/IMG_20240516_004605_515.jpg"
          ></video>
          <div className="p-4">
            <h5 className="font-bold">1.1-dars.Trigonometriya. Boshlang`ic...</h5>
            <p className="mt-3">Orif Urokov Telegram: @urokov_orif</p>
            <button className="border-orange-500 border-2 text-orange-500 p-1 text-[15px] font-extrabold">Bepul</button>
          </div>
        </div>
      </div>
    </div>
  );
}
