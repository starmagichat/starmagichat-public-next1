'use client'

import { useState } from 'react'
import { createPost } from '@/app/actions/test/post-action'

export default function TextPostForm() {
    const [message, setMessage] = useState('')

    async function handleSubmit(formData: FormData) {
        const result = await createPost(formData)
        if (result.success) {
            setMessage(result.message)
            // フォームをリセット
            formData.set('content', '')
        }
    }

    return (
        <form action={handleSubmit} className="max-w-md mx-auto mt-8">
            <div className="mb-4">
                <textarea
                    name="content"
                    rows={4}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="投稿内容を入力してください..."
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                    投稿する
                </button>
                {message && <p className="text-green-500">{message}</p>}
            </div>
        </form>
    )
}

