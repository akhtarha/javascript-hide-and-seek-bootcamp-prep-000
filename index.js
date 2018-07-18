function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  
}

function increaseRankBy1(n){
  const rankedList = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for (let i=0; i < ranked-list.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML + n)
  }
  
  return rankedList
}

function increaseRankBy(n){
  
  
  const festree = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  
  for(let i = 0; i < festree.length; i++){
    festree[i].innerHTML = parseInt(festree[i].innerHTML) + n;
 }
 
 return festree;
  
}