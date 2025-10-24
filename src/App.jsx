import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import CvSection from './components/cvSection/cvSection'
import ExperienceItem from './components/work/workItem'
import SkillList from './components/skills/skillList'

/**
 * Osobní informace
 */
const personalInfo = {
  name: "Šimon Janča",
  email: "sjiamnocna@gmail.com",
  phone: "+420 776 325 381",
  website: "www.jancsi.cz",
  photoSrc: "https://cdn.builder.io/api/v1/image/assets%2Fac51e69ef16e4f8fbc1a1df6a44edf61%2Ff7665f44911a4cbdb8509100ab1f27ad?format=webp&format=webp&width=2000"
}

/**
 * Seznam pracovních zkušeností
 */
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

/**
 * Seznam dovedností
 */
const skills = [
  "HTML", "CSS", "JavaScript", "Typescript", "React", "Go", "Node.js", "PHP", "Git", "GitHub", "Gitlab", "VSCode",
];

/**
 * Odkazy v patičce
 */
const links = [
    { label: 'GitHub', url: 'https://github.com/sjiamnocna' },
    { label: 'Gitlab', url: 'https://gitlab.com/sjiamnocna' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/sjiamnocna' },
    { label: 'Portfolio', url: 'https://jancsi.cz' },
];

/**
 * Hlavní komponenta aplikace
 */
const App = () => {
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
        <SkillList skills={skills} />
      </CvSection>

      <Footer links={links} />
    </main>
  )
}

export default App
