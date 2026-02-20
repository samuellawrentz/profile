import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => data.published === true))
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: 'Samuel Lawrentz - The frontend Dev - Tech Blog',
    description: "I'm a frontend engineer, creative, smart and fuelled by the passion to develop new things.",
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description || '',
      link: post.data.path,
    })),
  });
}
