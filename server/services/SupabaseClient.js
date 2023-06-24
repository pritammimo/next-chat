// import { createClient } from '@supabase/supabase-js'
const {createClient} = require('@supabase/supabase-js');
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY
const options = {
    db: {
      schema: 'public',
    },
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    },
    global: {
      headers: { 'x-my-custom-header': 'supabase chat' },
    },
  }
const Supabase = createClient(supabaseUrl, supabaseAnonKey,options)

// export default supabase
module.exports = Supabase;