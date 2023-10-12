//Import images 
import miniConole1920 from "../../assets/images/mini-console-1080.webp"
import miniConole768 from "../../assets/images/mini-console-768.webp"
import everydayBundle1080 from "../../assets/images/Everyday-Bundle-Mocks-horizontal-1920.webp"
import everydayBundle760 from "../../assets/images/Everyday-Bundle-760.webp"
import audioConsole750 from "../../assets/images/audio-console-750.webp"
import audioConsole720 from "../../assets/images/Consoles_Travele_unboxed-720.webp"
import photoConsoleBoxed720 from "../../assets/images/Packaging_Studio-750.webp"
import photoConsoleUnboxed720 from "../../assets/images/photo_console_unboxed_720.webp"
import masterConsoleBoxed750 from "../../assets/images/master_console_boxed_750.webp"
import masterConsoleUnboxed750 from "../../assets/images/master_console_unboxed_750.webp"


const FeaturedItems = () => {
  const slides = [
    {
      image: `${miniConole1920}`,
      hoverImage: `${everydayBundle760}`,
      title: 'Mini Console',
      subTitle: 'Ideal for everyday shortcuts. Adaptable to any workflow.',
      price: '$249',
      link: '/link',
    },
    {
      image: `${audioConsole750}`,
      hoverImage: `${audioConsole720}`,
      title: 'Audio Console',
      subTitle: 'Ideal for music & audio. Adaptable to any workflow.',
      price: '$499',
      link: '/link',
    },
    {
      image: `${photoConsoleBoxed720}`,
      hoverImage: `${photoConsoleUnboxed720}`,
      title: 'Photo Console',
      subTitle: 'Ideal for photo & video. Adaptable to any workflow.',
      price: '$599',
      link: '/link/',
    },
    {
      image: `${masterConsoleBoxed750}`,
      hoverImage: `${masterConsoleUnboxed750}`,
      title: 'Video Console',
      subTitle: 'Ideal for Video & Film. Adaptable to any workflow.',
      price: '$899',
      link: '/link/',
    },
  ];
  return (
    <div className='featured-items'>
      {slides.map((slides, index) => (
      <div className="featured-item">
        <div className="shop-item-tag">Pre-order</div>
        <picture className="featured-item-image">
          <source />
          <img src={slides.image} alt="Mini Console" />
        </picture>
        <picture className="featured-item-hover-image">
          <source />
          <img src={slides.hoverImage} alt="Mini Console" />
        </picture>
          <div className="featured-item__content">
            <div className="featured-item__content__inner">
              <h3 className="featured-item__content__title">{slides.title}</h3>
              <p>{slides.subTitle}.</p>
            </div>
            <p>{slides.price}</p>
            <a href={slides.link} className="button featured-item__button">Shop Now</a>
          </div>
      </div>
      ))}
    </div>
  );
};

export default FeaturedItems;