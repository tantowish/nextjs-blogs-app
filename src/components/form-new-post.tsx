"use client"

import { FormData } from "@/types/blog"
import { ChangeEvent, FormEvent, useState } from "react"
import ReactTextareaAutosize from "react-textarea-autosize"

const inputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

export const FormNewPost = () => {
    const [formData, setFormData] = useState<FormData>({
        title:'',
        content:''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault()
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log('Form submit')
    }

    return (
        <form className="max-w-4xl mx-auto p-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <input 
                type="text" 
                id="title" 
                name="title"
                className={inputClass} placeholder="Enter the title" required
                value={formData.title}
                onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <ReactTextareaAutosize minRows={5} name="content" className={inputClass} 
                value={formData.content}
                onChange={handleChange}
                />
            </div>
            <button
            type="submit"
            className="p-2 bg-blue-500 w-full rounded-lg text-white font-semibold "
            >
                Post
            </button>
        </form>
    )
}

export default FormNewPost