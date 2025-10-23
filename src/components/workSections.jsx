import React from "react";
import WorkItem from "./workItem";

const WorkSection = ({ jobs }) => {
  const defaultJobs = [
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

  const list = jobs && jobs.length ? jobs : defaultJobs;

  return (
    <section className="cv-section">
      <h2>💼 Pracovní zkušenosti</h2>
      <ul className="work-list">
        {list.map((job, i) => (
          <WorkItem key={i} icon={job.icon} title={job.title} period={job.period} />
        ))}
      </ul>
    </section>
  );
};

export default WorkSection;
