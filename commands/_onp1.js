/*CMD
  command: /onp1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let json = options.body.result
let cur=Bot.getProperty("cur")
let rate = json[cur].balancef
if(!rate){ return }
let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==1691842602){
Bot.editMessage("💵 *Account Balance:* \n\nYour CoinPayment Balance is :\n*"+rate+"* "+cur,id)
var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")}
