import photo from 'assets/images/hero/photo@1x.png';
import photo2x from 'assets/images/hero/photo@2x.png';
import photo3x from 'assets/images/hero/photo@3x.png';
import photoWebP from 'assets/images/hero/photo@1x.webp';
import photo2xWebP from 'assets/images/hero/photo@2x.webp';
import photo3xWebP from 'assets/images/hero/photo@3x.webp';

import s from './hero.module.scss';

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.heroContent}>
        <h1 className={s.heroTitle}>Taras Mykhalevych</h1>
        <div className={s.heroSubTitle}>Chief Design Officer</div>
        <div className={s.heroLocation}>Kyiv, Ukraine</div>
      </div>
      <div className={s.heroPhoto}>
        {/* <img srcSet={`${photo} 1x, ${photo2x} 2x, ${photo3x} 3x`} alt="Taras" /> */}
        <picture>
          <source
            className={s.projectsImage}
            srcSet={`${photoWebP} 1x,${photo2xWebP} 2x,${photo3xWebP} 3x`}
            alt="Photo"
            type="image/jpeg"
          />
          <source
            className={s.projectsImage}
            srcSet={`${photo} 1x,${photo2x} 2x,${photo3x} 3x`}
            alt="Photo"
            type="image/webp"
          />
          <img src={photo} alt="Photoo" />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
