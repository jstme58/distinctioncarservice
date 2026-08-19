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

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // NOTE: this only swaps the UI to a confirmation state — it does not
    // send the booking anywhere. Wire this up to a real form backend
    // (e.g. Formspree, a mailto fallback, or a server endpoint) before
    // relying on it to receive reservations.
    form.style.display = 'none';
    success.style.display = 'block';
  });
});
