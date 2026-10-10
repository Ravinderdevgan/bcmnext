import React from "react";
import Image from "next/image";
import { images } from "../../Data/imagesdata";

export default function Gallery() {
  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="flex w-max animate-bmc items-center">

        {/* ORIGINAL 27 IMAGES */}
        <ul className="flex shrink-0 items-center gap-4 sm:gap-10 py-8 px-2  ">
          {images.map((image, index) => (
            <li
              key={`first-${index}`}
              className="flex shrink-0 items-center justify-center py-8 px-2 "
            >
<Image
  src={image}
  alt={`Brandscare Media ${index + 1}`}
  width={128}
  height={72}
  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
  className="block w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 lg:w-32 lg:h-20 object-contain object-center"
/>
            </li>
          ))}
        </ul>

        {/* DUPLICATE 27 IMAGES */}
        <ul
          className="flex shrink-0 items-center gap-4 sm:gap-10 py-4 px-2"
          aria-hidden="true"
        >
          {images.map((image, index) => (
            <li
              key={`second-${index}`}
              className="flex shrink-0 items-center justify-center"
            >
              <Image
  src={image}
  alt={`Brandscare Media ${index + 1}`}
  width={128}
  height={72}
  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
  className="block w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 lg:w-32 lg:h-20 object-contain object-center"
/>

            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
