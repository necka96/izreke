const quote = document.querySelector(".quote")
const randomBtn = document.querySelector(".btn")
const author = document.querySelector(".author .name")
const sonud = document.querySelector(".sound")
const copy = document.querySelector(".copy")
const tweet = document.querySelector(".tweet")


function radnomQuote (){
randomBtn.innerText = "Loading Quote.."
randomBtn.classList.add("loading")
fetch("http://api.quotable.io/random").then(res => res.json()).then(resultat=> {
 console.log(resultat);
 quote.innerText = resultat.content
 author.innerText = resultat.author
 randomBtn.innerText = "New Quote"
 randomBtn.classList.remove("loading")
})
}

randomBtn.addEventListener("click", radnomQuote)

sonud.addEventListener("click", ()=>{
 let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`)
 speechSynthesis.speak(utterance)

})
copy.addEventListener("click", ()=>{
 navigator.clipboard.writeText(quote.innerText)
})
tweet.addEventListener("click", ()=>{
 let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`
 window.open(tweetUrl, "_blank")
})
