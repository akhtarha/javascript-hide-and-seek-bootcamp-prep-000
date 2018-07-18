function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  
}

function increaseRankBy(n){
  const rankedList = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for (let i=0; i < ranked-list.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML + n)
  }
  
  return rankedList
}