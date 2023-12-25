let logout=document.getElementById('logout');

logout.addEventListener('click', function() {
    logOut()
 }) 
 function logOut(){
   localStorage.removeItem('info');
window.location.href='index.html'
}