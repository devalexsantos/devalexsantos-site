import { hygraph } from '../hygraph';


export async function getPost(slug: string){
  const { posts } = await hygraph.request(
    `{
        posts(where: {slug: "${slug}"}) {
            title
            tags
            createdAt
            coverImage {
              url
            }
            content {
              markdown
            }
          }
  }
    `
  );
    
  return posts
}