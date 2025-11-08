import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppDataContext from '../../utils/context/appDataContext';
import './profile.page.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { appData } = useContext(AppDataContext);
  const { personalInfo } = appData;

  return (
    <main className="profile-page">
      <button onClick={() => navigate('/')} className="back-button-top-right">
        ← Zpět na úvod
      </button>

      <div className="profile-wrapper">
        <img
          className="profile-photo"
          src={personalInfo.photoSrc}
          alt={personalInfo.name}
        />
        <div className="profile-content">
          <h2>{personalInfo.name}</h2>
          <div className="profile-desc">
            {personalInfo.bio && personalInfo.bio.length > 0 ? (
              personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>
                🧠 Více než 10 let v IT, hlavně v testování softwaru.
                <br />
                🛠️ Silné základy v manuálním testování, rostoucí zájem o
                automatizaci a zlepšování procesů.
                <br />
                🚀 Ráda se pouštím do nových výzev, rychle se učím a přispívám
                hned od začátku.
                <br />
                💡 Fascinují mě technologie, AI a frontend vývoj — stále hledám,
                jak se posouvat a přinášet hodnotu.
                <br />
                Hledám týmy, které si zakládají na kvalitě, ale zároveň
                podporují nové nápady, osobní růst a nepohrdnou trochou humoru.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
