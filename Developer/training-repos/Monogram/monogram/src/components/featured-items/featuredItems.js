const FeaturedItems = ({featuredProductData}) => {
  return (
    <div className='featured-items'>
      {featuredProductData.map((item) => (
      <div className="featured-item">
        <div className="shop-item-tag">Pre-order</div>
        <picture className="featured-item-image">
          <source />
          <img src={item.image} alt="Mini Console" />
        </picture>
        <picture className="featured-item-hover-image">
          <source />
          <img src={item.hoverImage} alt="Mini Console" />
        </picture>
          <div className="featured-item__content">
            <div className="featured-item__content__inner">
              <h3 className="featured-item__content__title">{item.title}</h3>
              <p>{item.subTitle}.</p>
            </div>
            <p>{item.price}</p>
            <a href={item.link} className="button featured-item__button">Shop Now</a>
          </div>
      </div>
      ))}
    </div>
  );
};

export default FeaturedItems;
