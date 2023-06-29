import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';

const PortfolioSlider = ({ tabItems }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Carousel
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      ></Carousel>
    </motion.div>
  );
};

export default PortfolioSlider;
