/*CMD
  command: /deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💵 deposit, 📥 invest, ➕ invest ➕, 💵 invest, ✝ deposit, 💴 deposit, ➕ invest, ➕ deposit
CMD*/

let gomoj=Bot.getProperty("chat_created"+user.telegramid)
let user_position=Bot.getProperty("user_position"+user.telegramid)

if(!user.last_name){
var valid_name=user.first_name
}else{
var valid_name=user.first_name+" "+user.last_name
}
if(!user.username){
var u_name= valid_name
}else{
var u_name=user.username
}
let hokomat={
user_info:{
first_name:user.first_name,
last_name:user.last_name,
full_name:valid_name,
username:user.username,
is_bot:false,
chat_created:gomoj,
mention_id:" ["+user.telegramid+"]"+"("+"tg://user?id="+user.telegramid+")",
mention_name:"["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")",
mention_username:"["+user.username+"]("+"tg://user?id="+user.telegramid+")",
position:user_position,
id:user.telegramid,
men_html:'<a href="tg://user?id="'+user.telegramid+'">'+valid_name+'</a>'
}
}
Bot.setProperty("user_info"+user.telegramid,hokomat,"json")

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let cur=Bot.getProperty("cur")
let daily_amount=Bot.getProperty("daily_amount1")
let daily_expired=Bot.getProperty("daily_expired")
let res100 = Libs.ResourcesLib.anotherUserRes("cp_key_count", 452080432);
let res200=res100.value()
let pt=Bot.getProperty("deposit_address1"+user.telegramid+cur+res200)
let mnt=Bot.getProperty("minimuminvestment")

var depo="➕* Welcome! Here you can start a new investment!*\n\n💵 We offer a single Investment plan, able to offer you the best profit!\n\n➡ Our plan starts from "+mnt+" "+cur+" to 1000*\n\n⏱ Profit will be credited *"+daily_amount+"% every 24 hours, for "+daily_expired+" days: "+daily_amount+"% daily!\n📆 Paid on Every Day"
let hman=Bot.getProperty("lastinveststats"+user.telegramid)

if(pt){
Bot.sendMessage(depo)
Bot.sendMessage("⚠️ If you send less than "+mnt+ " "+cur+ ", your deposit will be cancelled!\n\n✅ *Send the amount you want to invest to the following address:*")
Bot.sendMessage("`"+pt+"`",{on_result:"/setidfordepadd"})
}else{
Bot.sendMessage(depo)
Bot.sendMessage("✋️*Hold on..... generating your deposit address...*")

Libs.CoinPayments.createPermanentWallet({
  currency: cur,
  label: "myLabel",
  onSuccess: "/wdgenarate",
  onIPN: "/onPermanentWalletIPN",
  onIncome: "/completedmkb"
});
}
