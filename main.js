const quote = document.querySelector(".quote")
const randomBtn = document.querySelector(".btn")
const author = document.querySelector(".author .name")
const sonud = document.querySelector(".sound")
const copy = document.querySelector(".copy")
const tweet = document.querySelector(".tweet")

function radnomQuote (){
 randomBtn.innerText = "Ocitavanje Izreke.."
 randomBtn.classList.add("loading")
 fetch("https://nadamse.herokuapp.com/api/izreke",{
  method: "GET",
  mode: "cors",
 }).then(res=>res.json()).then(data=>{
  console.log(data);
  quote.innerText = data.quote
  author.innerText = data.author
  randomBtn.innerText= "Nova Izreka"
  randomBtn.classList.remove("loading")
 })
}

randomBtn.addEventListener("click", radnomQuote)

copy.addEventListener("click", ()=>{
 navigator.clipboard.writeText(quote.innerText)
})
tweet.addEventListener("click", ()=>{
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`
  window.open(tweetUrl, "_blank")
})