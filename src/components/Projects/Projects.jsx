import { Link, useParams } from 'react-router-dom';
import { projects } from './../../data/projectsData';
import s from './projects.module.scss';

const Projects = () => {
  const items = projects.map(
    ({
      id,
      src1x,
      src2x,
      src3x,
      src1xwebP,
      src2xwebP,
      src3xwebP,
      title,
      text,
      button,
    }) => {
      return (
        <li key={title} className={s.projectsItem}>
          <Link to={`/projects/${id}`}>
            <picture>
              <source
                className={s.projectsImage}
                srcSet={`${src1xwebP} 1x,${src2xwebP} 2x,${src3xwebP} 3x`}
                alt="Img"
                type="image/webp"
              />
              <source
                className={s.projectsImage}
                srcSet={`${src1x} 1x,${src2x} 2x,${src3x} 3x`}
                alt="Img"
                type="image/jpeg"
              />
              <img src={src1x} alt="Imag" />
            </picture>
            <div className={s.projectsContent}>
              <button className={s.projectsBtn} type="button">
                {button}
              </button>
              <div className={s.projectsTitle}>{title}</div>
              <div className={s.projectsText}>{text}</div>
            </div>
          </Link>
        </li>
      );
    }
  );
  return <ul className={s.projects}>{items}</ul>;
};

export default Projects;
