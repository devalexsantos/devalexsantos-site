export interface ProjectTypes {
    title: string
    slug: string
    projectLink: string
    sourceCodeLink: string
    shortDescription: string
    createdAt: string
    contentDescription: string
    coverImage: {
      url: string
    }
    tags: {
      name: string
    }[]
  }