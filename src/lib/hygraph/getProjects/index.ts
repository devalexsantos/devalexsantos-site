import { hygraph } from '../hygraph';

export async function getProjects(){
  const { projects } = await hygraph.request(
    `{
      projects {
        title
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