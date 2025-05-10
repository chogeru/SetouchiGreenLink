
document.addEventListener('DOMContentLoaded',()=>{
 const burger=document.querySelector('.hamburger');
 const nav=document.getElementById('global-nav');
 if(burger){
  burger.addEventListener('click',()=>{
    nav.classList.toggle('open');
    document.body.classList.toggle('nav-open');
  });
 }
 const io=new IntersectionObserver(e=>e.forEach(el=>el.isIntersecting&&el.target.classList.add('show')), {threshold:.2});
 document.querySelectorAll('[data-fade]').forEach(el=>io.observe(el));
});

document.querySelectorAll('.acc-btn').forEach(btn=>{
 btn.addEventListener('click',e=>{
   const item=btn.parentElement;
   item.classList.toggle('active');
 });
});

document.querySelectorAll('.tab').forEach(tab=>{
 tab.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  const cat=tab.dataset.cat;
  document.querySelectorAll('.news-item,article[data-cat]').forEach(item=>{
    if(cat==='all'||item.dataset.cat===cat){item.style.display='block';}else{item.style.display='none';}
  });
 });
});
