document.addEventListener('DOMContentLoaded',()=>{
  const menuBtn=document.querySelector('.menu-btn');
  const nav=document.getElementById('nav-links');
  const top=document.querySelector('.to-top');
  if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
  const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  window.addEventListener('scroll',()=>{if(top)top.classList.toggle('show',window.scrollY>500)});
  if(top) top.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
});
