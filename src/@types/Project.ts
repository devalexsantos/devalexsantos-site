export interface ProjectTypes {
    title: string
    shortDescription: string
    description: {
      html: string
    }
    coverImage: {
      url: string
    }
    tags: {
      name: string
    }[]
  }