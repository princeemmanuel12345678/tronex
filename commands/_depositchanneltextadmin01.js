/*CMD
  command: /depositchanneltextadmin01
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
if(chat.chatid==1691842602){
let text=Bot.getProperty("deposit_channel_text","Settuped with default Value")
var b=[
[{text:"đ Reset To Deafult",callback_data:"/resetdefaultdepositrext01"}, {text:"â Change Current",callback_data:"/changedataforbuttondeposittext"}],
[{text:"Return âŠī¸",callback_data:"/setuptexts01"},{text:"âŦī¸ Back To Settings",callback_data:"/adminlogin r"}]]
let r="<b>Here is your currently setupped text for Deposit channel Autoposting</b>\n------------------------------------------------\n<code>"+text+"</code>\n------------------------------------------------\n<i>Select and option from the list bellow</i>"
Api.editMessageText({chat_id:chat.chatid,text:r,message_id:id,parse_mode:"html",reply_markup:{inline_keyboard:b}})
}else{
Bot.runCommand("/start")
}
