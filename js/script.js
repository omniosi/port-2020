function playVideo() {
  this.parentElement.previousElementSibling.previousElementSibling.classList='hide';this.parentElement.previousElementSibling.classList='';
  this.parentElement.previousElementSibling.currentTime=0;
  this.parentElement.previousElementSibling.play();
  this.nextElementSibling.classList='';
  this.classList='hide'
}
function stopVideo(){
  this.parentElement.previousElementSibling.previousElementSibling.classList='';
  this.parentElement.previousElementSibling.classList='hide';
  this.parentElement.previousElementSibling.pause();
  this.previousElementSibling.classList='';this.classList='hide'
}