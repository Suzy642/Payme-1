const form = document.getElementById('form');
  const firstInfo = document.getElementById('firstInfo');
  const secondInfo = document.getElementById('secondInfo');   
  
 
  
  form.addEventListener('submit',function (e) {
    e.preventDefault();
        const firstInfoValue = firstInfo.value;
        const secondInfoValue = secondInfo.value;
        
        
      localStorage.setItem('first-info', firstInfoValue);
      localStorage.setItem('second-info',secondInfoValue);
      
      
      
  window.location.href="paypal.html"
  });

  
  