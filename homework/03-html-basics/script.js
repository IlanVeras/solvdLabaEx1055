console.log('Hello World');
const formInfo = document.getElementById('contactForm');

formInfo.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Teste');
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const messageForm = document.getElementById('messageForm').value;
  alert(`${firstName} ${lastName} \n${phoneNumber}\n${messageForm}`);
});
