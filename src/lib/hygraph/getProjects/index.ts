import { hygraph } from '../hygraph';

export async function getProjects(){
  const { projects } = await hygraph.request(
    `{
      projects {
        title
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