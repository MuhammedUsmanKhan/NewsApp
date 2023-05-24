let ApiKey = `d98ebf8297fe47beb7057125c46c6241`
let art = document.querySelector(`#articles`)
let arr ;
let fetcch = () => {
let search = document.querySelector(`#srch`).value
axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2023-04-24&sortBy=publishedAt&apiKey=${ApiKey}`)
.then((data)=>{
    arr = data.data.articles
 //console.log(arr[1].author)
 console.log(arr)
arr.forEach(element => {
    //console.log(element)
    let author = document.createTextNode(element.author)
    let content = document.createTextNode(element.content)
    let description = document.createTextNode(element.description)
    let published = document.createTextNode(element.published)
    let title = document.createTextNode(element.title)
    let urlToImage = document.createElement(`img`)
    let container = document.createElement(`div`)
    let heading = document.createElement(`h1`)
    let someinfo = document.createElement(`p`)
    let DetailedInformation = document.createElement(`p`)
    
    urlToImage.setAttribute(`src`,`${element.urlToImage}`)
    
})
})
.catch((error)=>{
console.log(error)
})
}