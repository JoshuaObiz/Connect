const header = document.querySelector('header');
const links = document.querySelectorAll('nav a');
const closePost = document.querySelectorAll('.control .close');
const posts = document.querySelectorAll('.post');
const messages = document.querySelector('.messages');
const messageBtn = document.getElementById('message');
const notifications = document.querySelector('.notifications');
const notificationBtn = document.getElementById('notification');
const actionBtns = document.querySelectorAll('.actions .btn');
const followBtns = document.querySelectorAll('.suggestions .btn');
const themeBtn = document.getElementById('theme');
const theme = document.querySelector('.theme');

notificationBtn.addEventListener('click', () => {
   notifications.classList.toggle('show');
   document.querySelector('#notification .count').style.display = 'none';
});

messageBtn.addEventListener('click', () => {
   // messages.style.boxShadow = 'var(--box-shadow)'
   setTimeout((messages.style.boxShadow = 'var(--box-shadow)'), 3000000);
});

links.forEach((link) => {
   link.addEventListener('click', () => {
      removeActiveLink();
      link.classList.add('active');
   });
});

function removeActiveLink() {
   links.forEach((link) => {
      link.classList.remove('active');
   });
}

followBtns.forEach((followBtn) => {
   followBtn.addEventListener('click', () => {
      const initialText = 'Follow';

      if (
         followBtn.textContent.toLowerCase().includes(initialText.toLowerCase())
      ) {
         followBtn.textContent = 'Following';
      } else {
         followBtn.textContent = initialText;
      }
   });
});
