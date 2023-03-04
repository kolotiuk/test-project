import { projects } from './../../data/projectsData';
import s from './projects.module.scss';

const Projects = () => {
  const items = projects.map(({ src1x, src2x, src3x, title, text, button }) => {
    return (
      <li key={title} id="first" className={s.projectsItem}>
        <img
          className={s.projectsImage}
          srcSet={`${src1x} 1x,${src2x} 2x,${src3x} 3x`}
          alt="Img"
        />
        <div className={s.projectsContent}>
          <button className={s.projectsBtn} type="button">
            {button}
          </button>
          <div className={s.projectsTitle}>{title}</div>
          <div className={s.projectsText}>{text}</div>
        </div>
      </li>
    );
  });
  return <ul className={s.projects}>{items}</ul>;
};

export default Projects;