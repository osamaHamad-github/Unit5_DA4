document.getElementById('im-b').addEventListener('click', changeImage)
document.getElementById('te-b').addEventListener('click', changeText)
document.getElementById('bg-b').addEventListener('click', changeBg)
document.getElementById('st-b').addEventListener('click', showText)
document.getElementById('sf-b').addEventListener('click', hideText)

function changeImage (){
  document.getElementById('image').src = '/images/monkey.jfif'
}

function changeText (){
  document.getElementById('text').innerText = 'this is a monkey'
}

function changeBg (){
  document.getElementById('background').style.backgroundColor = 'red'
}

function showText (){
  document.getElementById('text').style.display = 'block'
}

function hideText (){
  document.getElementById('text').style.display = 'none'
}