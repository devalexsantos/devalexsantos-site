import { hygraph } from '../hygraph';


export async function getIndividualProject(slug: string){
  const { projects } = await hygraph.request(
    `{
      projects(where: {slug: "${slug}"}) {
        title
        slug
        tags {
          name
        }
        createdAt
        coverImage {
          url
        }
        contentDescription
      }
  }
    `
  );
    
  return projects
}