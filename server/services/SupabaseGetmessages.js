const Supabase = require("./SupabaseClient");


const SupabaseGetmessages = async (room) => {
    let { data: roomtable, error:roomerror } = await Supabase
  .from('roomtable')
  .select('id')
//     // Filters
   .eq('room', room)
    const { data:chattable, error:chaterror } = await Supabase
  .from('chatdata')
  .select("*")
  .eq('room_id',roomtable[0].id)
   return chattable
  }
  module.exports = SupabaseGetmessages;