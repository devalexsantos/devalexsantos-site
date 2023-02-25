import { PersonalInfoTypes } from '@/@types/PersonalInfo';
import { ProjectTypes } from '@/@types/Project';
import { ProjectCard } from '@/componentes/ProjectCard';
import { getFeaturedProjects } from '@/lib/hygraph/getFeaturedProjects';
import { getPersonalInfo } from '@/lib/hygraph/getPersonalInfo';
import { CardsContainer, HeaderContainer, HomeContainer, ImageContainer, InfoContent, MyPostsContainer, MyProjectsContainer } from '@/styles/pages/home';
import Head from 'next/head';
import Image from 'next/image';
import { ArrowSquareOut, FilePdf, GithubLogo } from 'phosphor-react';
import { Element } from 'react-scroll'



interface HomeProps {
  personalInfo: PersonalInfoTypes[]
  featuredProjects: ProjectTypes[]
}

export default function Home({personalInfo, featuredProjects}: HomeProps) {

  return (
    <>
    <Head>
      <title>Alex Santos | Developer</title>
    </Head>
    <HomeContainer>
    <Element name="home">
      <HeaderContainer>
        <ImageContainer>
          <Image src={personalInfo[0].personalPhoto.url} width={180} height={180} alt="Alex's Photo"/>
        </ImageContainer>
        <InfoContent>
          <header>
          <h1>{personalInfo[0].name}</h1>
          <a>SOURCE <ArrowSquareOut size={22} /></a>
          </header>
          <p>{personalInfo[0].description}</p>
          <footer>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <a href={personalInfo[0].githubUrl} target="_blank" rel="noreferrer">devalexsantos</a>
            </span>
            <span>
              <svg height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path> </g></svg>
              <a href={personalInfo[0].linkedinUrl} target="_blank" rel="noreferrer">Alex Santos</a>
            </span>
            <span>
              <FilePdf size={24} />
              <a href={personalInfo[0].curriculum.url} target="_blank" rel="noreferrer">Currículo</a>
            </span>
            <span>
            <svg width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2 2 5.5.8 10.5 3.2 14.2l.2.3-.8 3 3-.8.3.2c1.3.7 2.7 1.1 4.1 1.1 1.5 0 3-.4 4.3-1.2 3.7-2.4 4.8-7.3 2.5-11.1zm-2.1 7.7c-.4.6-.9 1-1.6 1.1-.4 0-.9.2-2.9-.6-1.7-.8-3.1-2.1-4.1-3.6-.6-.7-.9-1.6-1-2.5 0-.8.3-1.5.8-2 .2-.2.4-.3.6-.3H7c.2 0 .4 0 .5.4.2.5.7 1.7.7 1.8.1.1.1.3 0 .4.1.2 0 .4-.1.5-.1.1-.2.3-.3.4-.2.1-.3.3-.2.5.4.6.9 1.2 1.4 1.7.6.5 1.2.9 1.9 1.2.2.1.4.1.5-.1s.6-.7.8-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.5.3.1.3.1.7-.1 1z"></path> </g> </g></svg>
              <a href={`https://wa.me/${personalInfo[0].whatsAppNumber}?text=Ol%C3%A1%2C+vi+seu+site+pessoal+e+gostaria+de+conversar+mais+com+voc%C3%AA+%3A%29`} target="_blank" rel="noreferrer">Chamar no Whats</a>
            </span>
          </footer>
        </InfoContent>
      </HeaderContainer>
    </Element>

    <Element name="projects">
      <MyProjectsContainer>
          <h2>alguns projetos legais</h2>
          <CardsContainer>
            {featuredProjects.map((project, index)=>(
              <ProjectCard key={index} project={project as ProjectTypes} />
            ))}
          </CardsContainer>
          <a className="more-projects-link" href="https://github.com/devalexsantos" target="_blank" rel='noreferrer'><GithubLogo size={24} /> ver mais no github</a>
        </MyProjectsContainer>
    </Element>
    </HomeContainer>
    </>
  )
}

export const getStaticProps = async () => {
  const personalInfo = await getPersonalInfo()
  const featuredProjects = await getFeaturedProjects()

  return {
    props: {
      personalInfo,
      featuredProjects,
    },
    revalidate: 10
  }
}