// Formspree endpoint for the booking form. Create a free account at
// https://formspree.io using reservations@distinctioncarservice.com,
// create a new form, and paste its endpoint URL below (looks like
// "https://formspree.io/f/xxxxabcd"). Formspree emails each submission
// to the account that owns the form -- no server of our own required.
var BOOKING_FORM_ENDPOINT = 'https://formspree.io/f/xeajpwjl';

document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.querySelector('.dcs-menu-btn');
  var mobileMenu = document.querySelector('.dcs-mobile-menu');

  function toggleMenu() {
    mobileMenu.classList.toggle('open');
  }

  menuBtn.addEventListener('click', toggleMenu);
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
    });
  });

  var form = document.getElementById('booking-form');
  var success = document.getElementById('booking-success');
  var errorBox = document.getElementById('booking-error');
  var submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorBox.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'SENDING...';

    fetch(BOOKING_FORM_ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    })
      .then(function (res) {
        if (res.ok) {
          form.style.display = 'none';
          success.style.display = 'block';
        } else {
          throw new Error('Form submission failed with status ' + res.status);
        }
      })
      .catch(function (err) {
        console.error('[booking-form]', err);
        errorBox.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.textContent = 'REQUEST RESERVATION';
      });
  });
});
