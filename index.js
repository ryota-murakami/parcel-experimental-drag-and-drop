
window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.draggable-element').addEventListener('drag',(e) =>{
    console.log('dragging')
  },false)
});
