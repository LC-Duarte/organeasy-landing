document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('waitlist-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (!email) return;

  note.textContent = 'Prontinho! Avisaremos ' + email + ' assim que estivermos no ar.';
  note.classList.add('success');
  form.reset();
});
