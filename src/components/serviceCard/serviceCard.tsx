import styles from './serviceCard.module.scss';
interface ServiceCardProps {
  src: string;
  alt: string;
  text: string;
  price: string;
  isSelected: boolean;
  onClick: () => void;
}

const ServiceCard = ({ src, alt, text, price, isSelected, onClick }: ServiceCardProps) => {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
      style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      aria-label={alt}
    >
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            {text}
          </div>
        </div>
        <div className={styles.priceContainer}>
          +{price}
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
