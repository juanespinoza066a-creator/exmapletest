// Edit this email address to the roofing company's real receiving address.
const CONTACT_EMAIL = 'hello@summitridgeroofing.example';

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  navLinks.classList.toggle('is-open', open);
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#lead-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const fullName = `${data.get('firstName')} ${data.get('lastName')}`.trim();
  const body = [
    `Name: ${fullName}`,
    `Email: ${data.get('email')}`,
    `Phone: ${data.get('phone')}`,
    `Service: ${data.get('service')}`,
    '',
    'Project details:',
    String(data.get('details') || '(No details provided)')
  ].join('\n');
  const subject = `Roofing estimate request — ${fullName}`;
  const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-note').textContent = 'Your email app should open with the request. Review the message and press Send to submit it.';
  window.location.href = url;
});
