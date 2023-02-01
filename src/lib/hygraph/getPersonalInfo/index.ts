import { hygraph } from '../hygraph';

export async function getPersonalInfo(){
  const { personal_infos } = await hygraph.request(
    `{
    personal_infos {
      personalPhoto {
        url
      }
      name
      linkedinUrl
      description
      githubUrl
    }
  }
    `
  );
    
  return personal_infos
}