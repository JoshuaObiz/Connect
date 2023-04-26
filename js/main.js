const header = document.querySelector('header');
const links = document.querySelectorAll('nav a');
const closePost = document.querySelectorAll('.post .close');
const posts = document.querySelectorAll('.post');
const messages = document.querySelector('.messages');
const messageBtn = document.getElementById('message');
const notifications = document.querySelector('.notifications');
const notificationBtn = document.getElementById('notification');
const actionBtns = document.querySelectorAll('.actions .btn');
const likeBtns = document.querySelectorAll('.actions .like');
const saveBtns = document.querySelectorAll('.actions .save');

const followBtns = document.querySelectorAll('.suggestions .btn');
const themeBtn = document.getElementById('theme');
const theme = document.querySelector('.theme');

messageBtn.addEventListener('click', () => {
   messages.style.boxShadow = 'var(--box-shadow)'
   document.querySelector('#message .count').style.display = 'none';
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

notificationBtn.addEventListener('click', () => {
   notifications.classList.toggle('show');
   document.querySelector('#notification .count').style.display = 'none';
});
if (notificationBtn.classList.contains('active')){
   notificationBtn.classList.remove('active')
}

followBtns.forEach((followBtn) => {
   followBtn.addEventListener('click', () => {
      const initialText = 'Follow';

      if (followBtn.textContent.toLowerCase() == initialText.toLowerCase()) {
         followBtn.textContent = 'Unfollow';
      } else {
         followBtn.textContent = initialText;
      }

      followBtn.classList.toggle('primary');
   });
});

actionBtns.forEach(action => {
   action.addEventListener('click', ()=>{
      action.classList.toggle('active')
   })
});

likeBtns.forEach(like => {
   like.addEventListener('click', ()=>{
      if (like.classList.contains('active') && like.classList.contains('like')) {
         like.innerHTML = `<i class="eva eva-heart"></i> liked`
      }else{
         like.innerHTML = `<i class="eva eva-heart-outline"></i> like`
      }
   })
});

saveBtns.forEach(save => {
   save.addEventListener('click', ()=>{
      if (save.classList.contains('active') && save.classList.contains('save')) {
         save.innerHTML = `<i class="eva eva-bookmark"></i> saved`
      }else{
         save.innerHTML = `<i class="eva eva-bookmark-outline"></i> save`
      }
   })
});
