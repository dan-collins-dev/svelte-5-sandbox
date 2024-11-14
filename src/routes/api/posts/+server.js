import { json } from '@sveltejs/kit'
// import { base } from '$app/paths';
// import { Post } from '$lib/types'

async function getPosts() {
	let posts = []

	const paths = import.meta.glob('/src/posts/*.svx', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.svx', '')
        const metadata = file.metadata 

        const post = {...metadata, slug}
		if (post.published) posts.push(post)
	}

	posts = posts.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}
