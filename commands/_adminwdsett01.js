/*CMD
  command: /adminwdsett01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id=User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
let ds=Bot.getProperty("wdendisstats01")
if(data.chat.chatid==1691842602){
var tr=[{title:"π Pending Withdrawals",command:"/pendingwdcoinfirmadmin01ch"}]
if(ds!="en"){
var b=[
[{title:"π Minimum withdraw",command:"/adminminwd01"}, {title:"βDisable Withdrawal ",command:"/admindiswd01"}],[{title:"π§ Auto Withdrawal",command:"/adminautowdset01"}],
[{title:"π Manage Pending Withdrawals",command:"/pendingwdcoinfirmadmin01ch"}],
[{title:"β¬οΈ Back To Sittings", command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
var bd=[
[{title:"π Minimum withdraw",command:"/adminminwd01"}, {title:"β Enable Withdrawal ",command:"/adminwdenst01"}],[{title:"π§ Auto Withdrawal",command:"/adminautowdset01"}],
[{title:"π Manage Pending Withdrawals",command:"/pendingwdcoinfirmadmin01ch"}],
[{title:"β¬οΈ Back To Sittings", command:"/adminlogin r"}]]
Bot.editInlineKeyboard(bd,id)
}
}else{
Bot.runCommand("/start")}
