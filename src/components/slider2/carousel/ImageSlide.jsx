import './imageSlide.scss';

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
  };

  return <div className='image_slide' style={styles} />;
};

export default ImageSlide;
