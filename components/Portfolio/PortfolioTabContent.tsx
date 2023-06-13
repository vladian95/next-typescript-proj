import { motion } from 'framer-motion';
import PortfolioTabItem from './PortfolioTabItem';
import styles from '../../styles/portfolio.module.scss';

interface IPortfolioTabContent {
  tabItems: {
    id: number;
    img: string;
    link: string;
    title: string;
  }[];
}

const PortfolioTabContent = ({ tabItems }: IPortfolioTabContent) => {
  return (
    <li className={styles.portfolio__list__item}>
      {tabItems.map((item) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={item.id}
        >
          <PortfolioTabItem
            title={item.title}
            imgSrc={item.img}
            link={item.link}
          />
        </motion.div>
      ))}
    </li>
  );
};

export default PortfolioTabContent;
