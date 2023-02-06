export interface PostTypes {
    id: string
    slug: string
    title: string
    shortDescription: string
    date: string
    createdAt: string
    content: {
      markdown: string
    }
    coverImage: {
      url: string
    }
    tags: string[]
  }