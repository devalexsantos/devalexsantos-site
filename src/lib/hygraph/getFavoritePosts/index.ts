import { hygraph } from '../hygraph';

export async function getFavoritePosts(){
  const { posts } = await hygraph.request(
    `{
      posts(where:{favorite: true}) {
        id
        slug
        title
        shortDescription
        date
        createdAt
        content {
          html
        }
        coverImage {
          url
        }
        tags
      }
    }
    `
  );
    
  return posts
}