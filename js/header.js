// Select elements
const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

// Open sidebar
menuIcon.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// Close sidebar
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});
