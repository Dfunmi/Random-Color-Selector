const btn = document.querySelector('#changeColor')
const h1 = document.querySelector('h1')
btn.addEventListener('click', function(){
  const newColor = randomColor()
    document.body.style.backgroundColor = newColor
    h1.innerText = newColor
    if (isDarkColor(newColor)){
      h1.style.color = 'white'
    }
    else{
      h1.style.color = 'black'
    }
})

const randomColor = ()=>{
    const r = Math.floor(Math.random()*255)
  const g = Math.floor(Math.random()*255)
  const b = Math.floor(Math.random()*255)
  return `rgb(${r}, ${g}, ${b})`
}

const isDarkColor= (color) => {
  color = color.substring(4, color.length -1)
  .replace(/ /g, '')
  .split(',')
  const brightness = (0.299 * color[0] + 0.587 * color[1] + 0.114 * color[2])/255
  return brightness < 0.5
}