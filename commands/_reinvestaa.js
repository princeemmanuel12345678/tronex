/*CMD
  command: /reinvestaa
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var pok="⬅️ Return"
if(message==pok){
Bot.runCommand("/start")
return }
let id=User.getProperty("msgid89")
let daily=Bot.getProperty("daily_amount")
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
Bot.sendMessage("Invaild value.  Enter only numberic value")
}else{
  let r=message
  let cur= Bot.getProperty("cur")

let bal = Libs.ResourcesLib.userRes("balance");
let y=r*1

let mnz=Bot.getProperty("minimuminvestmentstatus")
let mnt=Bot.getProperty("minimuminvestment")
let mnm=mnt*1

if(mnz=="en"){
if((bal.value()>=y)&&(y>=mnm)&&(bal.value()>=mnm)){

let relg=Libs.ResourcesLib.userRes("accurralcount");
relg.add(1)

let am=y*daily
Bot.run( {
    command: "/adc"+" "+am+" "+relg.value()+" "+y+" "+cur,
    run_after: 60*60*24,  // 5 days delay
    chat_id: chat.id,  // or use another chat_id
    user_id: user.id  // or use another user.id
} )

bal.remove(y)
Bot.sendMessage("✅ Re-investment successfully started.\n\n♻️ Amount Re-invested: "+y+" "+cur)

var now = new Date();
let month= Libs.DateTimeFormat.format(now, "mmmm");
let date= Libs.DateTimeFormat.format(now, "dd");
let d1=date*1
let d2=d1+1
let year= Libs.DateTimeFormat.format(now, "yyyy");
var tarikh=d2+"th "+month+" "+year
let rt5=Bot.getProperty("reinvestmentshistory"+user.telegramid)
var brecount = Libs.ResourcesLib.userRes("reinvestmenttimeto");
brecount.add(1)
let reket3="✅Re-invest N° *"+brecount.value()+"*"+"\n"+"📅 Date: *"+tarikh+"*"+" \n♻️ Amount: *"+y+" "+cur+"*"
if(!rt5){
Bot.setProperty("reinvestmentshistory"+user.telegramid,reket3,"string")
}else{
Bot.setProperty("reinvestmentshistory"+user.telegramid,rt5+"\n\n"+reket3,"string")
}
}else{
Bot.sendMessage("*❌ You can not reinvest right now: You need at least "+mnm+" "+cur+"  to reinvest!*")}
}else{
Bot.sendMessage("Minimum re-investment amount not setupped set it on adminpanel /adminlogin")}}
