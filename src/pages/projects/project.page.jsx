import { useContext } from 'react';
import AppDataContext from '../../utils/context/appDataContext';
import { NavLink, useNavigate } from 'react-router-dom';
import './project.page.css';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const { appData } = useContext(AppDataContext);

  if (!appData || typeof appData != 'object') {
    return <div>No project data found</div>;
  }

  if (!appData.projects || typeof appData.projects != 'object') {
    return <div>No project data found</div>;
  }

  return (
    <main className="projects-page">
      <button onClick={() => navigate('/')} className="back-button">
        ← Zpět na úvod
      </button>

      <h1>Moje projekty</h1>
      <ul className="projects-list">
        {appData.projects.map((project, index) => (
          <li key={project.id} className="project-item">
            <NavLink to={`/project/${index}`} className="project-link">
              <img
                src={project.img}
                alt={project.title}
                className="project-img"
              />
              <div className="project-info">
                <h2>{project.title}</h2>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <p>{project.description}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProjectsPage;
