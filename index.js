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
  
  for (let i=0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML + n)
  }
  
  return rankedList
}

function increaseRankBy2(n){
  const festree = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for(let i = 0; i < festree.length; i++){
    festree[i].innerHTML = parseInt(festree[i].innerHTML) + n;
  }
  return festree;
}