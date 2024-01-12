'use client'

import { ChangeEvent, useState } from "react"

export const FormComment = () => {
const [comment, setComment] = useState<string>('')

const handleCommentChange = (e: ChangeEvent<HTMLInputElement>):void=>{
  e.preventDefault()
  setComment(e.target.value)
}

const handleSubmitComment = () =>{
  console.log(comment)
}

  return (
    <div>
      <div className="mt-4">
        <label htmlFor="comment" className="block text-gray-700 text-sm font-bold mb-2 ">Add Comment</label>
        <div className="flex flex-wrap">
          <input 
          type="text" 
          className="w-5/6 py-2 px-3 border border-gray-300 rounded-l-2xl focus:outline-none focus:border-blue-300" 
          name="comment"
          value={comment}
          onChange={handleCommentChange}
          />
          <button onClick={handleSubmitComment} className="w-1/6 rounded-r-2xl bg-blue-500 text-white">Send</button>
        </div>
      </div>

    </div>
  )
}

export default FormComment
