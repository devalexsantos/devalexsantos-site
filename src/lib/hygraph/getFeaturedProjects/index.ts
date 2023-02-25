import { hygraph } from '../hygraph';

export async function getFeaturedProjects(){
  const { projects } = await hygraph.request(
    `{
      projects(where: {favorite: true}) {
        title
        slug
        projectLink
    		sourceCodeLink
        shortDescription
        contentDescription
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