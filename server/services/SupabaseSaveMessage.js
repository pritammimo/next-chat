const Supabase = require("./SupabaseClient");


const SupabaseSavemessages = async (message,username,room) => {
    let { data: roomtable, error:roomerror } = await Supabase
  .from('roomtable')
  .select('id')
  .eq('room', room)
    const { data, error } = await Supabase
  .from('chatdata')
  .insert([
    { username: username, room_id:roomtable[0]?.id,message:message },
  ])
  .select()
  console.log("d",roomtable);
}
  module.exports = SupabaseSavemessages;