import { PostTypes } from '@/@types/PostTypes'
import { getPost } from '@/lib/hygraph/getPost'
import { ContentContainer, CoverImageContainer, DescriptionContainer, HeaderPostContainer, PostContainer } from '@/styles/pages/post'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowBendUpLeft } from 'phosphor-react'
import { ParsedUrlQuery } from 'querystring'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface IParams extends ParsedUrlQuery {
    slug: string
}

interface PostProps {
    post: PostTypes[]
}

export default function Post({post}: PostProps){

    if(post){
        return (
            <PostContainer>
                <HeaderPostContainer>
                    <header>
                        <Link href="/"><ArrowBendUpLeft size={24} />Voltar</Link>
                        <span>Publicado {' '}{formatDistanceToNow(
                  new Date(new Date(post[0].createdAt).toISOString()),
                  {
                    addSuffix: true,
                    locale: ptBR,
                  },
                )}</span>
                    </header>
                        <h1>{post[0].title}</h1>
                    
                </HeaderPostContainer>

                <ContentContainer>
                    <CoverImageContainer>
                        <Image src={post[0].coverImage.url} alt="" width={500} height={500} />
                    </CoverImageContainer>

                    <DescriptionContainer>
                    <ReactMarkdown>
                        {post[0].content.markdown}
                    </ReactMarkdown>
                    </DescriptionContainer>
                </ContentContainer>
                <footer>
                    <Link href="/"><ArrowBendUpLeft size={24} />Voltar</Link>
                </footer>
            </PostContainer>
        )
    }

}

export const getStaticPaths: GetStaticPaths = async () => {
    const arr: string[] = ['principios-5s-livro-codigo-limpo']
    const paths = arr.map((slug) => {
        return {
            params: { slug },
        }     
    })
    return { paths, fallback: true, }
}

export const getStaticProps: GetStaticProps  = async (context) => {
    const { slug } = context.params as IParams
    const post = await getPost(slug)

    return {
        props: {
            post
        }
    }

}