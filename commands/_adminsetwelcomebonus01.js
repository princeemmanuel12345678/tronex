/*CMD
  command: /adminsetwelcomebonus01
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
var cur=Bot.getProperty("cur")
let bonus=Bot.getProperty("welcome_bonus")
let bonus_st=Bot.getProperty("welcome_bonus_status","dis")
if(bonus_st!="en"){
var u="ā*Disabled*"
var msg="š Welcome Bonus Status: "+u+" \n\nSelect an option from the list bellow"
var b=[
[{title:"ā Enable/Change Amount",command:"/adminchangewelcomebonusamount01"}],
[{title:"ā Disable Bonus",command:"/admindisablewelcomebonus01"}],
[{title:"Return ā©ļø",command:"/adminmainsettings01"}, {title:"ā¬ļø Back To Settings",command:"/adminlogin r"}]]
}else{
var u="ā *Enabled*"
var msg="š Welcome bonus Status: "+u+" \nš Bonus Amount: *"+bonus+" "+cur+"*"+" \n\nKindly select an option from the list bellow"
var b=[
[{title:"ā Change Amount",command:"/adminchangewelcomebonusamount01"}],
[{title:"ā Disable Bonus",command:"/admindisablewelcomebonus01"}],
[{title:"Return ā©ļø",command:"/adminmainsettings01 r"}, {title:"ā¬ļø Back To Settings",command:"/adminlogin r"}]]
}
Bot.editMessage(msg,id)
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}
