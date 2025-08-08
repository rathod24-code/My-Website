
    function handleContact(e){
      e.preventDefault();
      const name = document.getElementById('cname').value.trim();
      const email = document.getElementById('cemail').value.trim();
      const msg = document.getElementById('cmsg').value.trim();
      if(!name||!email||!msg){
        alert('Please fill all fields.');
        return;
      }
      alert('Thanks ' + name + ' — I will contact you at ' + email + ' soon!');
      e.target.reset();
    }

    
    (function(){
      const links = document.querySelectorAll('nav.topnav a');
      function onScroll(){
        const fromTop = window.scrollY + 80;
        links.forEach(link => {
          const id = link.getAttribute('href');
          if(!id || id.indexOf('#') !== 0) return;
          const section = document.querySelector(id);
          if(!section) return;
          if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
            link.style.background = 'var(--glass)';
            link.style.color = '#fff';
          } else {
            link.style.background = 'transparent';
            link.style.color = '';
          }
        });
      }
      window.addEventListener('scroll', onScroll);
      onScroll();
    })();
