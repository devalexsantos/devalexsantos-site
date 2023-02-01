import { ProductImageContainer, ProjectCardContainer, TagContainer } from '@/styles/components/ProjectCard';
import Image from 'next/image';
import imageExample from '../../assets/example_image.jpg';

export function ProjectCard(){
  return (
    <ProjectCardContainer>
      <ProductImageContainer>
        <Image src={imageExample} width={300} height={200} alt="" />
      </ProductImageContainer>
      <TagContainer>
        <span>React</span>
        <span>Typescript</span>
      </TagContainer>
      <h3>Ignite Shop</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis, 
        nulla consequuntur ipsum dolore, vero nostrum.
      </p>
      
    </ProjectCardContainer>
  )
}