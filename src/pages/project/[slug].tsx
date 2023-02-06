import { ProjectTypes } from '@/@types/Project'
import { getIndividualProject } from '@/lib/hygraph/getIndividualProject'
import { ContentContainer, CoverImageContainer, DescriptionContainer } from '@/styles/pages/post'
import { HeaderProjectContainer, ProjectContainer } from '@/styles/pages/project'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowBendUpLeft } from 'phosphor-react'
import { ParsedUrlQuery } from 'querystring'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface IParams extends ParsedUrlQuery {
    slug: string
}

interface ProjectProps {
    project: ProjectTypes[]
}

export default function Project({project}: ProjectProps){
        return (
            <>
            <Head>
                <title>{project[0].title} | Alex Santos</title>
            </Head>
            <ProjectContainer>
                <HeaderProjectContainer>
                    <header>
                        <Link href="/"><ArrowBendUpLeft size={24} />Voltar</Link>
                        <span>Publicado {' '}{formatDistanceToNow(
                  new Date(new Date(project[0].createdAt).toISOString()),
                  {
                    addSuffix: true,
                    locale: ptBR,
                  },
                )}</span>
                    </header>
                        <h1>{project[0].title}</h1>
                    <div className="tags-session">
                        <p>tags: </p>
                        <div className="tags-content">
                        {project[0].tags.map((tag, index)=> (
                            <span key={index}>{tag.name}</span>
                        ))}
                        </div>
                    </div>
                    
                </HeaderProjectContainer>

                <ContentContainer>
                    <CoverImageContainer>
                        <Image src={project[0].coverImage.url} alt="" width={500} height={500} />
                    </CoverImageContainer>

                    <DescriptionContainer>
                    <ReactMarkdown>
                        {project[0].contentDescription}
                    </ReactMarkdown>
                    </DescriptionContainer>
                </ContentContainer>
                <div className="back-to-homepage">
                    <Link href="/"><ArrowBendUpLeft size={24} />Voltar</Link>
                </div>
            </ProjectContainer>
            </>
        )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const arr: string[] = ['coffee-delivery']
    const paths = arr.map((slug) => {
        return {
            params: { slug },
        }     
    })
    return { paths, fallback: true, }
}

export const getStaticProps: GetStaticProps  = async (context) => {
    const { slug } = context.params as IParams
    const project = await getIndividualProject(slug)

    return {
        props: {
            project
        }
    }

}