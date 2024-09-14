import style from './Icon.module.scss';

type IconType = {
  src: string;
  alt: string;
  href?: string;
  className?: string;
};

export const Icon = ({ src, alt, href, className }: IconType) => {
  return (
    <a href={href}>
      <img className={`${style.icon} ${className || ''} `} src={src} alt={alt} />
    </a>
  );
};
