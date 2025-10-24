import './workItem.css';

const WorkItem = ({ icon, title, period }) => {
  return (
    <li className="work-item">
      <img src={icon} alt="ikona práce" className="work-item-icon" />
      <div className="work-item-content">
        <span className="work-item-title">{title}</span>
        <span className="work-item-period">{period}</span>
      </div>
    </li>
  );
};

export default WorkItem;
