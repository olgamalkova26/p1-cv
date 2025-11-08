import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppDataContext from '../../utils/context/appDataContext';
import './projectDetail.page.css';

const ProjectDetailPage = () => {
  const { projectID } = useParams();
  const navigate = useNavigate();
  const { appData } = useContext(AppDataContext);

  if (!appData || typeof appData != 'object') {
    return <div>No project data found</div>;
  }

  if (!appData.projects || typeof appData.projects != 'object') {
    return <div>No project data found</div>;
  }

  const currentProjectIndex = parseInt(projectID);
  const currentProject = appData.projects[currentProjectIndex];

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  return (
    <main className="project-detail-page">
      <button onClick={() => navigate('/projects')} className="back-button">
        ← Zpět na projekty
      </button>

      <div className="project-detail">
        <img
          src={currentProject.img}
          alt={currentProject.title}
          className="project-detail-img"
        />

        <h1>{currentProject.title}</h1>

        <div className="project-tags">
          {currentProject.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <p className="project-description">{currentProject.description}</p>

        {currentProject.url && currentProject.url !== '#' && (
          <a
            href={currentProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-url"
          >
            Zobrazit projekt →
          </a>
        )}
      </div>
    </main>
  );
};

export default ProjectDetailPage;
