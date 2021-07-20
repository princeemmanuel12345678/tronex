/*CMD
  command: /send
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send mail
Esperando su respuesta 
  ANSWER
  keyboard: 
  aliases: 
CMD*/



BBAdmin.installBot({
  email: message,
  bot_id: 379301
})
Bot.sendMessage("bot enviado ")
