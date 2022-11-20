const lightMode = document.getElementById('light-mode');

lightMode.addEventListener('change', () => {
  document.body.classList.toggle('light');
})