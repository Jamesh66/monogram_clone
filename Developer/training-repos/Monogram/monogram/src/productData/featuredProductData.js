import { v4 as uuidv4 } from "uuid";

//Import images 
// import miniConole1920 from "../../assets/images/mini-console-1080.webp"
// import miniConole768 from "../../assets/images/mini-console-768.webp"
// import everydayBundle1080 from "../../assets/images/Everyday-Bundle-Mocks-horizontal-1920.webp"
// import everydayBundle760 from "../../assets/images/Everyday-Bundle-760.webp"
// import audioConsole750 from "../../assets/images/audio-console-750.webp"
// import audioConsole720 from "../../assets/images/Consoles_Travele_unboxed-720.webp"
// import photoConsoleBoxed720 from "../../assets/images/Packaging_Studio-750.webp"
import photoConsoleUnboxed720 from "../assets/images/photo_console_unboxed_720.webp"
// import masterConsoleBoxed750 from "../../assets/images/master_console_boxed_750.webp"
import masterConsoleUnboxed750 from "../assets/images/master_console_unboxed_750.webp"

function featuredProductData() {
  return [
    {
      image: `${masterConsoleUnboxed750}`,
      hoverImage: `${photoConsoleUnboxed720}`,
      title: 'Monogram Carry Case',
      price: '$249',
      link: '/link',
      id: uuidv4(),
    },
    {
      image: `${masterConsoleUnboxed750}`,
      hoverImage: `${photoConsoleUnboxed720}`,
      title: 'Audio Console',
      price: '$499',
      link: '/link',
      id: uuidv4(),
    },
    {
      image: `${masterConsoleUnboxed750}`,
      hoverImage: `${photoConsoleUnboxed720}`,
      title: 'Photo Console',
      price: '$599',
      link: '/link/',
      id: uuidv4(),
    },
    {
      image: `${masterConsoleUnboxed750}`,
      hoverImage: `${photoConsoleUnboxed720}`,
      title: 'Video Console',
      price: '$899',
      link: '/link/',
      id: uuidv4(),
    },
  ];
}

export default featuredProductData;
