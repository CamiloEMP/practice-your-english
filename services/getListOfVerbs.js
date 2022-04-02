import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'

export const getListOfVerbs = async setLoading => {
  try {
    setLoading(true)
    const { data, error, status } = await supabaseClient.from('list_verbs').select('*')

    if (error && status !== 406) {
      throw error
    }
    if (data) return data
    else return { error }
  } catch (error) {
    throw error
  } finally {
    setLoading(false)
  }
}
