export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  snippet: string;
  content: string;
  imageUrl: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Home Improvement Tips",
    slug: "10-home-improvement-tips",
    category: "DIY",
    author: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000"
    },
    publishDate: "2024-01-15",
    snippet: "Discover easy ways to upgrade your home...",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1000",
    tags: ["DIY", "Home Improvement", "Renovation"]
  },
  {
    id: "2",
    title: "Choosing the Right Contractor",
    slug: "choosing-the-right-contractor",
    category: "Advice",
    author: {
      name: "Mark Thompson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000"
    },
    publishDate: "2024-01-10",
    snippet: "Learn how to select the best professional...",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
    tags: ["Contractors", "Home Services", "Tips"]
  },
  {
    id: "3",
    title: "Eco-Friendly Renovations",
    slug: "eco-friendly-renovations",
    category: "Green Living",
    author: {
      name: "Emma Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000"
    },
    publishDate: "2024-01-05",
    snippet: "Explore sustainable options for your next project...",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&q=80&w=1000",
    tags: ["Sustainability", "Green Building", "Eco-Friendly"]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}