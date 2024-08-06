import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';

// 서버 사이드에서만 실행
async function loadMarkdownModule() {
    if (!browser) {
        const fs = await import('fs/promises');
        const path = await import('path');
        const matter = await import('gray-matter');
        const marked = await import('marked');
        return { fs, path, matter: matter.default, marked };
    }
    return null;
}

export async function getPost(slug) {
    const module = await loadMarkdownModule();
    if (!module) {
        throw error(500, 'Cannot load post on client side');
    }
    const { fs, path, matter, marked } = module;
    
    const file = path.join(process.cwd(), 'static', 'posts', `${slug}.md`);
    try {
        const post = await fs.readFile(file, 'utf-8');
        const { data, content } = matter(post);
        const html = marked.parse(content);
        
        return {
            meta: data,
            html
        };
    } catch (err) {
        console.error(err);
        throw error(404, `Post not found: ${slug}`);
    }
}

export async function getAllPosts() {
    const module = await loadMarkdownModule();
    if (!module) {
        console.warn('Running on client side, returning empty array');
        return [];
    }
    const { fs, path, matter } = module;
    
    const postsDirectory = path.join(process.cwd(), 'static', 'posts');
    try {
        const files = await fs.readdir(postsDirectory);
        
        const posts = await Promise.all(files
            .filter(file => file.endsWith('.md'))
            .map(async file => {
                const post = await fs.readFile(path.join(postsDirectory, file), 'utf-8');
                const { data } = matter(post);
                return {
                    slug: file.replace('.md', ''),
                    meta: data
                };
            }));
        
        return posts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
    } catch (error) {
        console.error('Error reading posts directory:', error);
        return [];
    }
}
