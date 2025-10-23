import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import CvSection from './components/cvSection'
import ExperienceItem from './components/experienceItem'

const personalInfo = {
  name: "Jan Novák",
  email: "jan.novak@example.com",
  phone: "+420 777 888 999",
  website: "www.jannovak.cz",
  photoSrc: "https://placehold.co/400"
}

const jobs = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/906/906343.png",
    title: "Frontend Developer – ABC s.r.o.",
    period: "2023 / 01 – 2025 / 03",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
    title: "Web Designer – Freelance",
    period: "2021 / 05 – 2022 / 12",
  },
];

const skills = [
  "HTML, CSS, JavaScript",
  "React – základní pojmy (komponenty)",
  "Git, GitHub, VSCode",
];

function App() {
  return (
    <main className="cv">
      <Header
        name={personalInfo.name}
        email={personalInfo.email}
        phone={personalInfo.phone}
        website={personalInfo.website}
        photoSrc={personalInfo.photoSrc}
      />

      <CvSection title="Pracovní zkušenosti">
        {jobs.map((experience) => (
          <ExperienceItem
            key={experience.title}
            title={experience.title}
            icon={experience.icon}
            period={experience.period}
          />
        ))}
      </CvSection>

      <CvSection title="Dovednosti">
        {skills.map((skill) => (
          <ExperienceItem key={skill} title={skill} />
        ))}
      </CvSection>

      <Footer />
    </main>
  )
}

export default App
