import React from "react";

export default function Products() {
  return (
    <div className="product_container w-[90%] m-auto">
      <div className="product_row mb-6">
        <div className="product_section bg-green-600 h-16 flex items-center">
          <h1 className="text-[20px] text-white font-extrabold p-4">
            Bepul mahsulotlar
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-6">
        {[
          {
            src: "https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/Images/kurak-scapula7xe.pdf_page-1_generate.jpg",
            alt: "kurak - scapula",
            text: "kurak - scapula",
            button: true,
          },
          {
            src: "https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/Images/kurak-scapula7xe.pdf_page-1_generate.jpg",
            alt: "o`mrov - clavicula",
            text: "o`mrov - clavicula",
            button: true,
          },
          {
            src: "https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/Images/kurak-scapula7xe.pdf_page-1_generate.jpg",
            alt: "TO`SH - STERNUM",
            text: "TO`SH - STERNUM",
            button: true,
          },
          {
            src: "https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/Images/kurak-scapula7xe.pdf_page-1_generate.jpg",
            alt: "QOVURG`A - COSTAE",
            text: "QOVURG`A - COSTAE",
            button: true,
          },
          {
            src: "https://eu2.contabostorage.com/20ddac7ab90d4d188d1ca104120b91ed:soffuz/media/Images/kurak-scapula7xe.pdf_page-1_generate.jpg",
            alt: "UMURTQA - VERTEBRA",
            text: "UMURTQA - VERTEBRA",
            button: true,
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 w-1/6 p-2">
            <img
              className="w-full h-40 object-cover border border-gray-300"
              src={item.src}
              alt={item.alt}
            />
            <h4 className="text-center text-blue-600">{item.text}</h4>
            {item.button && (
              <button className="mt-2 px-4 py-2 bg-amber-200 w-full">
                Bepul
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
