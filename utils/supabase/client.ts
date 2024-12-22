
// import { createBrowserClient } from "@supabase/ssr";

// export const createClient = () =>
//     createBrowserClient(
//         process.env.NEXT_PUBLIC_SUPABASE_URL!,
//         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     );

// export const supabase = createClient()

import { createClient } from '@supabase/supabase-js'

// 環境変数からSupabaseのURLとキーを取得
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Supabaseクライアントの作成
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
