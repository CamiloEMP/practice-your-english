import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'

export const getIrregularVerbs = async () => {
  try {
    const { data, error, status } = await supabaseClient.from('list_verbs').select('*')

    if (error && status !== 406) {
      throw error
    }
    if (data) return data
    else return { error }
  } catch (error) {
    throw error
  }
}
