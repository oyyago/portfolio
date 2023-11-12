import { useState, useEffect } from "react";
import { getUserRepos } from "../../services/req";
import { ProjectCard } from "./card";
import { Repo } from "../../types/custom";
import { ProjectsContainer, SectionContainer,Button } from "./styles/projectsStyle";
import { useTranslation } from "react-i18next";


interface ProjectsProps {
  totalRepos: number;
}

export default function Projects({ totalRepos }: ProjectsProps) {
  const [perPage, setPerPage] = useState(8);
  const { t } = useTranslation();
  const [userRepos, setUserRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repos = await getUserRepos(perPage);
        setUserRepos(repos);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, [perPage]);

  return (
    <SectionContainer
      id="projects"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{ fontSize: "40px", fontFamily: 'Gudea', color: "#4700b3", textDecoration: "underline" }}>
        {t("projectsT")}
      </h2>

      <ProjectsContainer >
        {userRepos &&
          userRepos.map((repo) => (
            <ProjectCard
              key={repo.id}
              name={repo.name}
              html_url={repo.html_url}
              stargazers_count={repo.stargazers_count}
              forks_count={repo.forks_count}
              language={repo.language}
              homepage={repo.homepage}
            />
          ))}
      </ProjectsContainer>

      {totalRepos > 8 && perPage < totalRepos && (
        <Button
          onClick={() => setPerPage((prevState) => prevState + 8)}
        >
          {t("moreB")}
        </Button>
      )}
    </SectionContainer>
  );
}
