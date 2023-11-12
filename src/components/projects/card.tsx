import { Code2Icon, GitForkIcon, StarIcon } from "lucide-react";
import { Repo } from "../../types/custom";
import { Button1, EllipsisText, FlexContainer, FlexList, FlexListItem, HoverEffectContainer } from "./styles/cardStyle";
import deploy from '../../assets/deploy.png';
import Github from "../../assets/githubL.svg";


interface ProjectCardProps extends Repo { }

export function ProjectCard({
  name,
  html_url,
  stargazers_count,
  forks_count,
  language,
  homepage,
}: ProjectCardProps) {
  return (
    <HoverEffectContainer>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <EllipsisText
          title={name}
        >
          {name}
        </EllipsisText>
        <FlexList >
          <FlexListItem >
            <GitForkIcon />
            {forks_count}
          </FlexListItem>
          <FlexListItem >
            <StarIcon />
            {stargazers_count}
          </FlexListItem>
          <FlexListItem >
            <Code2Icon />
            {language}
          </FlexListItem>
        </FlexList>
      </div>


      <FlexContainer >
        <Button1
          href={html_url}
          target="_blank"
        >
          <img src={Github} alt="" />
        </Button1>
        {homepage && (
          <Button1
            href={homepage}
            target="_blank"
          >
            <img src={deploy} alt="" />
          </Button1>
        )}
      </FlexContainer>
    </HoverEffectContainer>
  );
}
