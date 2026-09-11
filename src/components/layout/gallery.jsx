import React from "react";
import Image from "next/image";
import { images } from "../../Data/imagesdata";

export default function Gallery() {
return ( <div className="w-full overflow-hidden"> <div className="flex w-max animate-bmc">

    {/* ORIGINAL 27 IMAGES */}
    <ul className="flex gap-10 py-4 shrink-0">
      {images.map((image, index) => (
        <li key={`first-${index}`} className="shrink-0">
          <Image
            src={image}
            alt={`Brandscare Media ${index + 1}`}
            width={128}
            height={72}
            className="w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 lg:w-32 lg:h-30 rounded-2xl object-cover"
          />
        </li>
      ))}
    </ul>

    {/* DUPLICATE 27 IMAGES */}
    <ul className="flex gap-10 py-4 shrink-0">
      {images.map((image, index) => (
        <li key={`second-${index}`} className="shrink-0">
          <Image
            src={image}
            alt={`Brandscare Media ${index + 1}`}
            width={128}
            height={72}
            className="w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 lg:w-32 lg:h-30 rounded-2xl object-cover"
          />
        </li>
      ))}
    </ul>

  </div>
</div>

);
}
