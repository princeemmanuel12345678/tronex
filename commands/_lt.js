/*CMD
  command: /lt
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params=="r"){
var g =[
[{title:"🔎 Payments",url:"t.me/tg_investpay"}],[{title:" 💭 Community",url:"t.me/tg_invests"}],[{title:" 📞 Helpline",url:"t.me/tg_investadmin"}],
[{title:"🔙 Back to Sittings",command:"/sitt f"}]]
Bot.editInlineKeyboard(g)

}
