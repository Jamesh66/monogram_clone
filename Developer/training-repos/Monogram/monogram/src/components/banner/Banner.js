//Import Banner images
import Banner1920 from "../../assets/images/banner-image-1920.webp"
import Banner768 from "../../assets/images/banner-image-768.webp"

//Import SVGs
import {ReactComponent as ChevronDown} from "../../assets/svg/chevron-down.svg"

const Banner = () => {
  return (
    <section className='banner'>
      <div className="banner__image">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={Banner768}
            sizes="768px"
          />
          <source
            srcSet={Banner1920} 
            sizes="1280px"
          />
          <img src={Banner1920} />
        </picture>
      </div>
      <div className="banner__image__filter"></div>
      <div className="banner__content container">
        <div className="banner__content__text">
          <h1>A Console for Every Workflow</h1>
          <p>Discover the perfect console for yours.</p>
        </div>
        <div className="banner__content__next"><a href=""><ChevronDown/></a></div>
      </div>
    </section>
  ); 
};

export default Banner;