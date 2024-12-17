'use server'

export async function createPost(formData: FormData) {
    const content = formData.get('content') as string

    // ここで実際のデータベース操作やAPI呼び出しを行います
    // この例ではシンプルにコンソールログを出力します
    console.log('New post:', content)

    return { success: true, message: '投稿が完了しました！' }
}

