
(function(){
 var root=document.documentElement;
 document.querySelectorAll('.lang button').forEach(function(b){
  b.addEventListener('click',function(){
   var l=b.dataset.set;
   root.classList.toggle('en',l==='en');root.lang=l;
   try{localStorage.setItem('fl-lang',l)}catch(e){}
   try{var u=new URL(location.href);if(l==='en')u.searchParams.set('lang','en');else u.searchParams.delete('lang');history.replaceState(null,'',u)}catch(e){}
  });
 });
 var d=new Date().getDay();
 var li=document.querySelector('.hours li[data-d="'+d+'"]');if(li)li.classList.add('today');
 var els=document.querySelectorAll('.svc,.tcard,.tm,.rev,.ph,.eco,.facts div');
 els.forEach(function(e){e.classList.add('rv')});
 if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(e){io.observe(e)});
 } else els.forEach(function(e){e.classList.add('in')});
})();
