import { ProductImageContainer, ProjectCardContainer, TagContainer } from '@/styles/components/ProjectCard';
import Image from 'next/image';
import imageExample from '../../assets/example_image.jpg';

interface ProjectType {
  project: {
    title: string
    shortDescription: string
    description: {
      html: string
    }
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
      
    </ProjectCardContainer>
  )
}