import { hygraph } from '../hygraph';

export async function getAboutInfo(){
  const { abouts } = await hygraph.request(
    `{
      abouts {
        aboutDescription
        aboutPhoto {
          url
        }
      }
  }
    `
  );
    
  return abouts
}