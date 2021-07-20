/*CMD
  command: /rdemo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin_id=452080432

let ph_to:Bot.inspect(request)
Api.sendPhoto({chat_id:admin_id,photo:ph_to})
