import { hygraph } from '../hygraph';

export async function getFeaturedProjects(){
  const { projects } = await hygraph.request(
    `{
      projects(where: {favorite: true}) {
        title
        shortDescription
        description {
          html
        }
        coverImage {
          url
        }
        tags {
          name
        }
      }
    }
    `
  );
    
  return projects
}