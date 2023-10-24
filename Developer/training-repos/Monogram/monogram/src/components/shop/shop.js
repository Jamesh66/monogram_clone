import everydayBundle760 from "../../assets/images/Everyday-Bundle-760.webp"
import audioConsole750 from "../assets/images/audio-console-750.webp"
import audioConsole720 from "../../assets/images/Consoles_Travele_unboxed-720.webp"
import photoConsoleBoxed720 from "../assets/images/Packaging_Studio-750.webp"
import photoConsoleUnboxed720 from "../../assets/images/photo_console_unboxed_720.webp"
import masterConsoleBoxed750 from "../assets/images/master_console_boxed_750.webp"
import masterConsoleUnboxed750 from "../assets/images/master_console_unboxed_750.webp"

const shop = () => {
  const items = [
    {
      image: `${photoConsoleBoxed720}`,
      hoverImage: `${masterConsoleUnboxed750}`,
      title: 'Monogram Carry Case',
      price: '$249',
      link: '/link',
    },
    {
      image: `${masterConsoleUnboxed750}`,
      hoverImage: `${masterConsoleUnboxed750}`,
      title: 'Audio Console',
      price: '$499',
      link: '/link',
    },
    {
      image: `${masterConsoleUnboxed750}`,
      hoverImage: `${masterConsoleUnboxed750}`,
      title: 'Photo Console',
      price: '$599',
      link: '/link/',
    },
    {
      image: `${masterConsoleUnboxed750}`,
      hoverImage: `${masterConsoleUnboxed750}`,
      title: 'Video Console',
      price: '$899',
      link: '/link/',
    },
  ];
  return (
    <div className="shop">
      {items.map((items, index) => (
      <div className="shop__product">
        <div className="shop-item-tag">Pre-order</div>
        <picture className="shop__product__image">
          <source />
          <img src={audioConsole750} alt="Mini Console" />
        </picture>
        <picture className="shop__product__hover__image">
          <source />
          <img src={photoConsoleBoxed720} alt="Mini Console" />
        </picture>
          <div className="shop__product__content">
            <div className="shop__product__inner">
              <h3 className="shop__product__title">{items.title}</h3>
            </div>
            <p>{items.price}</p>
            <a href={masterConsoleBoxed750} className="button shop__product__button">Shop Now</a>
          </div>
      </div>
      ))}
    </div>
  );
};

export default shop;