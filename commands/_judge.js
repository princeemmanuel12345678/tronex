/*CMD
  command: /judge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let zero = Bot.getProperty("zero")
let bal = Libs.ResourcesLib.userRes("balance");
let user = options.result.status;
if (user=="member"){
Bot.sendKeyboard("π΅ Balance "+bal.value().toFixed(zero)+" DOGE,\nβ Invest β,β Payout β,\n β»οΈ Re- Invest,π Invite friends,\nβ Tools & Sittings,π‘Help","test")
}else{
Bot.sendKeyboard("π I have Joined β ", "β Lie i did not find you here. You must need to join @SMCryptoSignals ")
var button =[{title:"Join here",url:"t.me/smcryptosignals"}]
Bot.sendInlineKeyboard(button,"β οΈ To Avialable for use our investment service you must be need to join our payments channel @SMCryptoSignals. \n- Click button Join here.")
}
