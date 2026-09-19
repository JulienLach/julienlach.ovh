import fm from 'front-matter';
import { z } from 'zod';

const postFrontmatterSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
});

export type Post = {
	slug: string;
	title: string;
	description: string;
	pubDate: Date;
	updatedDate?: Date;
	content: string;
};

const rawPosts = import.meta.glob('../content/blog/*.md', {
	query: '?raw',
	import: 'default',
	eager: true,
}) as Record<string, string>;

export const posts: Post[] = Object.entries(rawPosts)
	.map(([path, raw]) => {
		const slug = path.split('/').pop()!.replace(/\.md$/, '').toLowerCase();
		const { attributes, body } = fm(raw);
		const frontmatter = postFrontmatterSchema.parse(attributes);

		return { slug, content: body, ...frontmatter };
	})
	.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

export function getPostBySlug(slug: string): Post | undefined {
	return posts.find((post) => post.slug === slug);
}
