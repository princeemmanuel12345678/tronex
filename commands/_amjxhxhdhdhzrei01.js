/*CMD
  command: /amjxhxhdhdhzrei01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
if(!isNumeric(message)){
Bot.sendMessage("Invaild value.Enter % value in amount. Try again")
return }
let oj=parseFloat(message)
let kp=oj/100
let no=kp*1
Bot.setProperty("daily_amount",no,"integer")
Bot.setProperty("daily_amount1",message,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.sendMessage("Now Enter How many many days of investment plans. Mean enter the number of days that investment plan will ended",{on_result:"/settatt"})
Bot.runCommand("/runcom01")
}else{
Bot.runCommand("/start")
}
