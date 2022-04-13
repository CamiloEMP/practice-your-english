import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'

export const getListOfVerbs = async (timeOne, timeTwo) => {
  try {
    const { data, error, status } = await supabaseClient
      .from('list_verbs')
      .select(`${timeOne}`, `${timeTwo}`)
      .range(150, 153)

    if (error && status !== 406) {
      throw error
    }
    if (data) return data
    else return { error }
  } catch (error) {
    throw error
  }
}
