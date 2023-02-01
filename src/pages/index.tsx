import { getPersonalInfo } from '@/lib/hygraph/getPersonalInfo';
import { HeaderContainer, HomeContainer } from '@/styles/pages/home';



interface PersonalInfoProps {
  personalInfo: {
    name: string
    description: string
    githubUrl: string
    linkedinUrl: string
    personalPhoto: {
      url: string
    }
  }[]
}

export default function Home({personalInfo}: PersonalInfoProps) {
  return (
    <HomeContainer>
      <HeaderContainer>
        {personalInfo[0].name}
      </HeaderContainer>
    </HomeContainer>
  )
}

export const getStaticProps = async () => {
  const personalInfo = await getPersonalInfo()

  return {
    props: {
      personalInfo
    },
    revalidate: 10
  }
}