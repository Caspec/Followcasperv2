export type Post = {
  id: number
  title: string
  date: string
  excerpt: string
  content: string
  slug: string
  author?: string
  tags?: string[]
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'My First Blog Post',
    date: '2025-03-19',
    excerpt: 'This is the excerpt of the first post.',
    content: `This is the full content of the first blog post. It talks about how to start learning Vue.js and why it's a great choice for modern web development. The post goes into detail about the basic concepts of Vue, including components, directives, and reactivity. If you're new to Vue, this will help you get started quickly.`,
    slug: 'my-first-blog-post',
    author: 'Casper',
    tags: ['Vue', 'JavaScript', 'Frontend'],
  },
  {
    id: 2,
    title: 'Second Post',
    date: '2025-03-20',
    excerpt: 'This is the excerpt of the second post.',
    content: `This is the full content of the second blog post. In this post, we dive into more advanced Vue.js topics, including Vuex, Vue Router, and component lifecycle hooks. These are some of the core features that make Vue.js so powerful and flexible. By mastering these, you can build complex and scalable applications with ease.`,
    slug: 'second-post',
    author: 'Casper',
    tags: ['Vue', 'Lifecycle hooks', 'Frontend'],
  },
  {
    id: 3,
    title: 'Third Post: Exploring Vue 3 Composition API',
    date: '2025-03-21',
    excerpt:
      'A deep dive into the Composition API and how it improves code organization and reusability.',
    content: `In this blog post, we explore the new Composition API introduced in Vue 3. This API allows developers to write more modular and reusable code by organizing logic into functions that can be shared across components. We'll walk through examples of using the Composition API for handling state, lifecycle hooks, and providing reactivity.`,
    slug: 'third-post-exploring-vue-3-composition-api',
    author: 'Casper',
    tags: ['TypeScript', 'Vite', 'Composition API'],
  },
  {
    id: 4,
    title: 'Getting Started with Angular',
    date: '2025-03-22',
    excerpt:
      'This post introduces Angular, explaining its architecture, key concepts, and how to set up a basic Angular project.',
    content: `In this blog post, we will walk through the basics of Angular, a powerful framework for building single-page applications. Angular is known for its scalability and rich tooling, including Angular CLI, TypeScript integration, and dependency injection. This post will cover how to set up a new Angular project, explain the folder structure, and introduce you to the key building blocks like modules, components, services, and directives. If you’re looking to get started with Angular, this guide will help you hit the ground running.`,
    slug: 'getting-started-with-angular',
    author: 'Casper',
    tags: ['Angular', 'TypeScript', 'Rich tooling'],
  },
]
