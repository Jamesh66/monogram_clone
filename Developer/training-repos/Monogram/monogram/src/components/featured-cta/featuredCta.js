//Import images 
import shopBannerModule1920 from "../../assets/images/shop-banner-module-1920.webp"
import shopBannerModule768 from "../../assets/images/shop-banner-module-768.webp"

const featuredCta = () => {
  return (
    <div className="featuredCta">
      <picture>
        <source media="(max-width:850px )" srcSet={shopBannerModule768} />
        <img className="" src={shopBannerModule1920} alt="mountains"  />
      </picture>
      <div className="featuredCta__content">
        <h1>Create your  own console</h1>
        <p>Add-on to make it perfect</p>
      </div>
    </div>
  );
};

export default featuredCta;
