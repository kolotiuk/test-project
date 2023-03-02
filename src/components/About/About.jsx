import s from './about.module.scss';

const About = () => {
  return (
    <section className={s.about}>
      <div className={s.aboutContent}>
        <h2 className={s.aboutTitle}>My projects</h2>
        <p className={s.aboutYears}>2012-23</p>
      </div>
    </section>
  );
};

export default About;
