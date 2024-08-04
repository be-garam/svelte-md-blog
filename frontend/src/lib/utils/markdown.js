import fs from 'fs';
import { marked } from 'marked';
import matter from 'gray-matter';
import { error } from '@sveltejs/kit';

export function getPost(slug) {
    const file = `static/posts/${slug}.md`;
    if (!fs.existsSync(file)) {
        throw error(404, `Post not found: ${slug}`);
    }
    const post = fs.readFileSync(file, 'utf-8');
    const { data, content } = matter(post);
    const html = marked(content);
    
    return {
        meta: data,
        html
    };
}

export function getAllPosts() {
    const files = fs.readdirSync('static/posts');
    return files
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const post = fs.readFileSync(`static/posts/${file}`, 'utf-8');
            const { data } = matter(post);
            return {
                slug: file.replace('.md', ''),
                meta: data
            };
        })
        .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
}