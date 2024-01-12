import { posts } from "@/data/posts"
import Link from "next/link"

export const BlogsPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-12">
        <h1 className="text-2xl font-bold mb-6 text-blue-500">Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {posts.map((post)=>(
                <Link key={post.id} href={`/blogs/${post.id}`} className="p-4 border-2 border-blue-500 rounded-lg bg-white shadow-md">
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p>Written by: {post.username}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default BlogsPage
