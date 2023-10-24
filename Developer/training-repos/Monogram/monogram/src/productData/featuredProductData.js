import { v4 as uuidv4 } from "uuid";

//Import images 
import miniConole1920 from "../assets/images/mini-console-1080.webp"
// import miniConole768 from "../../assets/images/mini-console-768.webp"
import everydayBundle1080 from "../assets/images/Everyday-Bundle-Mocks-horizontal-1920.webp"
// import everydayBundle760 from "../assets/images/Everyday-Bundle-760.webp"
// import audioConsole750 from "../../assets/images/audio-console-750.webp"
// import audioConsole720 from "../../assets/images/Consoles_Travele_unboxed-720.webp"
// import photoConsoleBoxed720 from "../../assets/images/Packaging_Studio-750.webp"
import photoConsoleUnboxed720 from "../assets/images/photo_console_unboxed_720.webp"
// import masterConsoleBoxed750 from "../../assets/images/master_console_boxed_750.webp"
import masterConsoleUnboxed750 from "../assets/images/master_console_unboxed_750.webp"
// import masterConsoleUnboxed750 from "../assets/images/master_console_unboxed_750.webp"
import creativeConsoleUnboxed1920 from "../assets/images/creative_console_boxed_1920.jpg"
import creativeConsoleBoxed1920 from "../assets/images/creative_console_unboxed_1920.webp"

function featuredProductData() {
  return [
    {
      image: `${everydayBundle1080}`,
      hoverImage: `${miniConole1920}`,
      title: 'Mini Console',
      subTitle: 'Ideal for everyday shortcuts. Adaptable to any workflow.',
      price: '$249',
      link: '/link',
      id: uuidv4(),
    },
    {
      image: `${creativeConsoleUnboxed1920}`,
      hoverImage: `${creativeConsoleBoxed1920}`,
      title: 'Audio Console',
      subTitle: 'Ideal for music & audio. Adaptable to any workflow.',
      price: '$499',
      link: '/link',
      id: uuidv4(),
    },
    {
      image: `${masterConsoleUnboxed750}`,
      hoverImage: `${photoConsoleUnboxed720}`,
      title: 'Photo Console',
      subTitle: 'Ideal for photo & video. Adaptable to any workflow.',
      price: '$599',
      link: '/link/',
      id: uuidv4(),
    },
    {
      image: `${masterConsoleUnboxed750}`,
      hoverImage: `${photoConsoleUnboxed720}`,
      title: 'Video Console',
      subTitle: 'Ideal for Video & Film. Adaptable to any workflow.',
      price: '$899',
      link: '/link/',
      id: uuidv4(),
    },
  ];
}

export default featuredProductData;
