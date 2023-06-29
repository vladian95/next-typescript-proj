import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PortfolioSliderItem from './PortfolioSliderItem';

interface IPortfolioSlider {
  tabItems: {
    id: number;
    img: string;
    link: string;
    title: string;
  }[];
}

const PortfolioSlider = ({ tabItems }: IPortfolioSlider) => {
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
        centerMode={true}
        centerSlidePercentage={45}
      >
        {tabItems.map((item) => (
          <PortfolioSliderItem
            key={item.id}
            title={item.title}
            imgSrc={item.img}
            link={item.link}
          />
        ))}
      </Carousel>
    </motion.div>
  );
};

export default PortfolioSlider;
