import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { Database } from './types'

let supabaseInstance: SupabaseClient<Database> | null = null

export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) return false
  if (url.includes('your-project-ref') || key.includes('your-anon-key')) return false
  
  return true
}

export function getSupabaseClient(): SupabaseClient<Database> | null {
  if (!isSupabaseConfigured()) {
    return null
  }

  if (!supabaseInstance) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    supabaseInstance = createClient<Database>(url, key)
  }

  return supabaseInstance
}
