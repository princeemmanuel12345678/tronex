/*CMD
  command: /setidtoforglibalnotsorryinvestmentplan09
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
let daily=Bot.getProperty("daily_amount1")
let exp=Bot.getProperty("daily_expired")
let msg="_Here is your currently settuped investment plan_\n\n"+"🈯️* Investment Plan:* "+daily+"%"+" Daily for "+exp+" Days"
Bot.editMessage(msg,id)

var b=[
[{title:"🈯️ Change Investment Plan",command:"/invedtmentplanadmin01"}],
[{title:"Return ↩️ ",command:"/adminmainsettings01 r"}, {title:"⬅️ Back To Settings", command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}
