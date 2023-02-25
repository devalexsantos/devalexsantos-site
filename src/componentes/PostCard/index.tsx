import { PostCardContainer, PostImageContainer, TagContainer } from '@/styles/components/PostCard';
import Image from 'next/image';

interface PostTypes {
  post: {
    id: string
  slug: string
  title: string
  shortDescription: string
  date: string
  createdAt: string
  content: {
    markdown: string
  }
  coverImage: {
    url: string
  }
  tags: string[]
  }
}

export function PostCard({post}: PostTypes){
  return (
    <PostCardContainer>
      <PostImageContainer>
        <Image src={post.coverImage.url} width={384} height={307} alt="" />
      </PostImageContainer>
      <TagContainer>
      {post.tags.map((tag, index)=> (
        <span key={index}>{tag}</span>
      ))}
      </TagContainer>
      <h3>{post.title}</h3>
      <p>{post.shortDescription}</p>
    </PostCardContainer>
  )
}