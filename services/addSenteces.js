import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'

export const addSentece = async (sentences, verbId, userId) => {
  const jsonSentences = JSON.stringify(sentences)

  try {
    const { data, error } = await supabaseClient
      .from('sentences_verbs')
      .insert([{ verb_id: verbId, user_id: userId, sentences: jsonSentences }])

    if (error) throw error

    return data
  } catch (error) {
    throw error
  }
}
