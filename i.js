
window.onpopstate = () => {
  let a = location.hash;
  changeArr(a)
}

 let but = document.querySelectorAll('button')
 but.forEach((i)=>{
   i.addEventListener('click', function(){
    let index = +i.innerHTML-1
    location.hash = index;
    changeArr(index)
   }, false)
 })

  function changeArr(number){
  const arr = document.querySelectorAll('body div');
  let checkArr = []
  for(let i=0; i<arr.length;i++){
  checkArr.push('#'+i)
  if(number==='#'+i || number===i ){
 
     arr.forEach((i)=>{
      i.classList.add('start-no')
      i.classList.remove('start')
    });
    arr[i].classList.add('start')
    arr[i].classList.remove('start-no')
  }
  }
  if(!checkArr.some((i)=>{
    return i==='#'+number
  })){
    arr.forEach((i)=>{
      i.classList.add('start-no')
      i.classList.remove('start')
    })
  
  
let div = document.createElement('div');
div.classList.add('start')
div.innerHTML = 'This url page is incorrect'
document.body.append(div)
  } 
}