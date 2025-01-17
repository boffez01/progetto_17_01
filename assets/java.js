const profileToggle = document.getElementById('profile-toggle');
const profilePage = document.querySelector('.profile-page');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');
const deleteBtn = document.getElementById('delete-btn');

profileToggle.addEventListener('click', function() {
  profilePage.classList.toggle('hidden');
});

saveBtn.addEventListener('click', () => {
  profilePage.classList.add('hidden');
  console.log('Changes Saved');
});

cancelBtn.addEventListener('click', () => {
  profilePage.classList.add('hidden');
  console.log('Changes Canceled');
});

deleteBtn.addEventListener('click', () => {
  profilePage.classList.add('hidden');
  console.log('Profile Deleted');
});
