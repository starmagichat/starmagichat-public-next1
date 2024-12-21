
import { supabase } from '@/utils/supabase/client'
// import { cookies } from 'next/headers'

export default async function Page() {
    // const cookieStore = await cookies()
    // const supabase = createClient(cookieStore)

    async function hoge(): Promise<any[]> {
        try {
            const { data: todos, error } = await supabase
                .from('todos')
                .select();

            if (error) {
                throw error; // エラーがあれば例外を投げる
            }

            console.log(todos); // 取得したデータを確認
            const returnI = todos
            return returnI

        } catch (error: any) {
            console.error('Error fetching todos:', error.message); // エラーメッセージを表示
            return [];
        }
    }





    return (
        <div>
            <div>aa</div>
            {/* <ul>
                {hoge.map((todo) => (
                    <li key={todo.id}>{todo}</li>
                ))}
            </ul> */}
        </div>
    )
}
