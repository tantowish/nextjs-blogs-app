import Comments from "@/components/comments"
import FormComment from "@/components/form-comment"

export const BlogDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-12">
        <h1 className="text-xl font-bold">Post One</h1>
        <p className="mb-4">Written by : Jogn Doe</p>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis accusamus dolor deserunt odit, aliquid sed cumque, quis nobis ea provident numquam quidem ex? Laudantium nemo harum deleniti accusamus animi!
        </div>

        <hr className="border-[1.5px] rounded-lg mt-8" />
        <h2 className="text-xl font-bold mt-8 mb-4">Comments</h2>
        <FormComment />
        <Comments />
    </div>
  )
}

export default BlogDetailPage
