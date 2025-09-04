function toggleNav(){
  const nav = document.querySelector('.nav');
  if(nav.style.display === 'flex'){ nav.style.display = 'none'; }
  else { nav.style.display = 'flex'; }
}
document.getElementById('year').textContent = new Date().getFullYear();
