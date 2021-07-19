/*CMD
  command: /invedtmentplanadmin01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
Bot.editMessage("*Enter the daily profit % as investment plan*",id)
Bot.runCommand("/amjxhxhdhdhzrei01")
}
