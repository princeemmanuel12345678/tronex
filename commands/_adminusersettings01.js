/*CMD
  command: /adminusersettings01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{title:"๐ Check User Balance ",command:"/admincheckbal0101"}],[{title:"๐จโ๐ฉโ๐งโ๐ฆ All Users Lists",command:"/userlistofbot"}],
[{title:"๐ฃ Add / Remove User balance ",command:"/addbal0101"}], [{title:" ๐ค Get Full Information of a User",command:"/getfulladmin0101"}],
[{title:"๐ซ Ban User",command:"/adminbanuser01"},
{title:"โ Unban User",command:"/adminunbanusersit01"}],
[{title:"Banned Users List",command:"/adminbannedlistuserP01"}],
[{title:" โฌ๏ธ Back To Sittings",command:"/adminlogin r"}]]
let ad=Bot.getProperty("admin01")
let id =User.getProperty("adminmsgid")
if(data.chat.chatid==1691842602){
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")}
