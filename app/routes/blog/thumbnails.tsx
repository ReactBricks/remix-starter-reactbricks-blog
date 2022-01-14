import { fetchPages, types } from 'react-bricks/frontend'
import { useLoaderData } from 'remix'
import dayjs from 'dayjs'

import PostThumbnail from '~/components/PostThumbnail'

export const loader = async () => {
  const posts = await fetchPages(process.env.API_KEY as string, {
    type: 'blog',
    pageSize: 1000,
    sort: '-publishedAt',
  })
  return { posts }
}

export default function Thumbnails() {
  const { posts } = useLoaderData<{ posts: types.PageFromList[] }>()

  return (
    <div className="container max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-center text-4xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight text-gray-900 pb-4 mt-10 sm:mt-12 mb-4">
        Blog
      </h1>
      <div className="py-10 flex flex-wrap">
        {posts?.map((post) => (
          <PostThumbnail
            key={post.id}
            href={`/blog/posts/${post.slug}`}
            title={post.name}
            description={post.meta.description!}
            date={dayjs(post.publishedAt).format('DD/MM/YYYY')}
            image={
              post.meta.featuredImage ||
              'https://images.reactbricks.com/original/8b1974a0-91a8-4ab4-b014-83f60192f9b5.svg'
            }
          />
        ))}
      </div>
    </div>
  )
}
