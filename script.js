let btn = document.getElementById("btn")
let quote = document.getElementById("quote")

btn.addEventListener("click",getJoke)
function getJoke(){
    fetch("https://api.quotable.io/quotes/random")
    .then((res)=> {
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        quote.innerHTML=`
        <p style="font-weight:400;">${data[0].content}</p>
        <p style="font-weight:900;">${data[0].author}</p>
        `
    })
}