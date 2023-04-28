const header = document.querySelector('header');
const links = document.querySelectorAll('nav a');

const closePost = document.querySelectorAll('.post .close');
const posts = document.querySelectorAll('.post');
const actionBtns = document.querySelectorAll('.actions .btn');
const likeBtns = document.querySelectorAll('.actions .like');
const saveBtns = document.querySelectorAll('.actions .save');

const messages = document.querySelector('.messages');
const messageBtn = document.getElementById('message');

const notifications = document.querySelector('.notifications');
const notificationBtn = document.getElementById('notification');

const followBtns = document.querySelectorAll('.suggestions .btn');

const themeBtn = document.getElementById('theme');
const theme = document.querySelector('.theme');
const themeColors = document.querySelectorAll('.theme-color span');
const themeBg = document.querySelectorAll('.bg .btn');
const fontSize = document.querySelectorAll('.font-size span');

const body = document.querySelector('body')
var root = document.querySelector(':root')

body.addEventListener('click', (e)=>{
   if (e.target.classList.contains('theme')) {   
      theme.style.display = 'none'
      document.querySelector('nav a:first-child').classList.add('active')
      themeBtn.classList.remove('active')
   }
   if (e.target.classList != 'notifications' && e.target.id != 'notification' && e.target.className != 'eva eva-bell-outline' && e.target.innerHTML != `notifications`) {
      notifications.classList.remove('show')
      if (notificationBtn.classList.contains('active')) {
         document.querySelector('nav a:first-child').classList.add('active')
         notificationBtn.classList.remove('active')
      }
   }

   if (e.target.id != 'message' && e.target.className != 'eva eva-email-outline' && e.target.innerHTML != `messages`) {
      messages.style.boxShadow = ''
   }
})

window.addEventListener('scroll', ()=>{
   header.classList.toggle('box-shadow', scrollY > 56)
})

links.forEach((link) => {
   link.addEventListener('click', () => {
      removeActiveLink();
      link.classList.add('active');
   });
});

messageBtn.addEventListener('click', () => {
   messages.style.boxShadow = 'var(--box-shadow)'
   document.querySelector('#message .count').style.display = 'none';
   document.querySelector('.right').classList.toggle('show')
});

actionBtns.forEach(action => {
   action.addEventListener('click', (e)=>{
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

notificationBtn.addEventListener('click', () => {
   notifications.classList.add('show');
   document.querySelector('#notification .count').style.display = 'none';
});

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

themeBtn.addEventListener('click', ()=>{
   theme.style.display = 'flex'
})

themeColors.forEach(color => {
   color.addEventListener('click', (e)=>{
      removeActiveColor()
      color.classList.add('active')
      if (e.target.classList.contains('color1')) {
         root.style.setProperty('--hue', '340')
      }
      if (e.target.classList.contains('color2')) {
         root.style.setProperty('--hue', '55')
      }
      if (e.target.classList.contains('color3')) {
         root.style.setProperty('--hue', '210')
      }
      if (e.target.classList.contains('color4')) {
         root.style.setProperty('--hue', '150')
      }
      if (e.target.classList.contains('color5')) {
         root.style.setProperty('--hue', '270')
      }
   })
});

fontSize.forEach(size => {
   size.addEventListener('click', (e)=>{
      removeActiveSize()
      size.classList.add('active')
      if (e.target.classList.contains('font1')) {
         root.style.setProperty('--md-font', '0.9843750.rem')
      }
      if (e.target.classList.contains('font2')) {
         root.style.setProperty('--md-font', '0.921875rem')
      }
      if (e.target.classList.contains('font3')) {
         root.style.setProperty('--md-font', '0.85rem')
      }
      if (e.target.classList.contains('font4')) {
         root.style.setProperty('--md-font', '0.8125rem')
      }
      if (e.target.classList.contains('font5')) {
         root.style.setProperty('--md-font', '0.75rem')
      }
   })
});

themeBg.forEach(theme => {
   theme.addEventListener('click', (e)=>{
      removeActiveTheme()
      theme.classList.add('active')
      if (e.target.classList.contains('bg1')) {
         root.style.setProperty('--light', 'hsl(210, 30%, 98%)')
         root.style.setProperty('--white', 'hsl(210, 30%, 100%)')
         root.style.setProperty('--dark', 'hsl(210, 30%, 25%)')
         root.style.setProperty('--black', 'hsl(210, 30%, 10%)')
      }
      if (e.target.classList.contains('bg2')) {
         root.style.setProperty('--light', 'hsl(210, 30%, 10%)')
         root.style.setProperty('--white', 'hsl(210, 30%, 15%)')
         root.style.setProperty('--dark', 'hsl(210, 30%, 100%)')
         root.style.setProperty('--black', 'hsl(210, 30%, 98%)')
      }
      if (e.target.classList.contains('bg3')) {
         root.style.setProperty('--light', 'hsl(210, 25%, 5%)')
         root.style.setProperty('--white', 'hsl(210, 30%, 8%)')
         root.style.setProperty('--dark', 'hsl(210, 30%, 100%)')
         root.style.setProperty('--black', 'hsl(210, 30%, 98%)')
      }
   })
});



function removeActiveLink() {
   links.forEach((link) => {
      link.classList.remove('active');
   });
}

function removeActiveColor() {
   themeColors.forEach((color) => {
      color.classList.remove('active');
   });
}

function removeActiveSize() {
   fontSize.forEach((size) => {
      size.classList.remove('active');
   });
}

function removeActiveTheme() {
   themeBg.forEach((theme) => {
      theme.classList.remove('active');
   });
}

// console.log(root.style);