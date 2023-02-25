import { LinksProjectContainer, ProductImageContainer, ProjectCardContainer, TagContainer } from '@/styles/components/ProjectCard';
import Image from 'next/image';
import { Code, Link } from 'phosphor-react';

interface ProjectType {
  project: {
    title: string
    slug: string
    projectLink: string
    sourceCodeLink: string
    shortDescription: string
    contentDescription: string
    coverImage: {
      url: string
    }
    tags: {
      name: string
    }[]
  }
}

export function ProjectCard({project}: ProjectType){
  return (
    <ProjectCardContainer>
      <ProductImageContainer>
        <Image src={project.coverImage.url} width={384} height={307} alt="" />
      </ProductImageContainer>
      <TagContainer>
      {project.tags.map((tag, index)=> (
        <span key={index}>{tag.name}</span>
      ))}
      </TagContainer>
      <h3>{project.title}</h3>
      <p>{project.shortDescription}</p>
      <LinksProjectContainer>
        <a href={project.projectLink} target="_blank" rel='noreferrer'><Link size={24} /> ver online</a>
        <a href={project.sourceCodeLink} target="_blank" rel='noreferrer'><Code size={24} /> ver código</a>
      </LinksProjectContainer>
    </ProjectCardContainer>
  )
}