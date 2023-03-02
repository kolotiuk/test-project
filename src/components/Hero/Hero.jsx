import photo from 'assets/images/hero/photo@1x.png';
import photo2x from 'assets/images/hero/photo@2x.png';
import photo3x from 'assets/images/hero/photo@3x.png';

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
        <img srcSet={`${photo} 1x, ${photo2x} 2x, ${photo3x} 3x`} alt="Taras" />
      </div>
    </section>
  );
};

export default Hero;
