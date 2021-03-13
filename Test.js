const headTitles = [];
const newsTitles = [];
const newsUrl = [];
 
 
const scrap = fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://news.joins.com/money?cloc=joongang-home-gnb3')}`)
.then(response => {
  if (response.ok) return response.json()
  throw new Error('Network response was not ok.')
})
.then(data => {
  
  
// console.log(data.contents);





const parser = new DOMParser();
   
for (let i = 1 ; i < 2 ; i++){
  
  
    const getHeadTitle = parser.parseFromString(data.contents, 'text/html').getElementsByTagName('body').getElementsByTagName('dl')[i].childNodes[0].nodeValue;
    headTitles.push(String(getHeadTitle));
    
    // const getNewsTitle = parser.parseFromString(data.contents, 'text/html').getElementsByTagName('item')[i].getElementsByTagName('ht:news_item_title')[0].childNodes[0].nodeValue;
    // newsTitles.push(String(getNewsTitle));
 
    // const getNewsUrl = parser.parseFromString(data.contents, 'text/html').getElementsByTagName('item')[i].getElementsByTagName('ht:news_item_url')[0].childNodes[0].nodeValue;
    // newsUrl.push(String(getNewsUrl));
 
  
 
  //console.log(`${i}위 ${getHeadTitle} \n관련 기사: ${getNewsTitle} \n기사 주소: ${getNewsUrl}` );
  //console.log(parsedNewsTitle[i].textContent)
  }
 
 
 
  console.log(`${headTitles}`)

})

 
 
 
 
 
 
 
 
 
 
 
 
 

