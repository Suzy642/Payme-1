
const firstInfo = localStorage.getItem('first-info');
  const secondInfo = localStorage.getItem('second-info');
  const thirdInfo = localStorage.getItem('third-info');
  const fourInfo = localStorage.getItem('four-info');
 
 
  
  document.getElementById('first-info').textContent = firstInfo;
  document.getElementById('second-info').textContent = secondInfo;
  document.getElementById('third-info').textContent = thirdInfo;
  document.getElementById('four-info').textContent = fourInfo;
  
  

date_data = new Date()

current_hour = date_data.getHours()
current_minute = date_data.getMinutes()

am_pm = ''

if(current_hour >= 12){
  am_pm = 'PM'
}else {
  am_pm = 'AM'
}

document.getElementById('time').textContent = `${current_hour}:${current_minute} ${am_pm}`

