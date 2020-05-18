function playVideo(e) {
  e.parentElement.previousElementSibling.previousElementSibling.classList='hide';e.parentElement.previousElementSibling.classList='';
  e.parentElement.previousElementSibling.currentTime=0;
  e.parentElement.previousElementSibling.play();
  e.nextElementSibling.classList='';
  e.classList='hide'
}
function stopVideo(e){
  e.parentElement.previousElementSibling.previousElementSibling.classList='';
  e.parentElement.previousElementSibling.classList='hide';
  e.parentElement.previousElementSibling.pause();
  e.previousElementSibling.classList='';e.classList='hide'
}