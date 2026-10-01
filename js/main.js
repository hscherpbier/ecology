// Mobile menu
document.querySelectorAll('.nav-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var nav = document.getElementById('site-nav');
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});

// Photo placeholders: if an image file hasn't been added yet, show its label instead
document.querySelectorAll('.photo img').forEach(function (img) {
  function missing() { img.parentElement.classList.add('missing'); img.style.display = 'none'; }
  if (img.complete && img.naturalWidth === 0) missing();
  img.addEventListener('error', missing);
});

// Reading list filter
var filters = document.querySelector('.filters');
if (filters) {
  filters.addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    filters.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
    var topic = btn.dataset.topic;
    document.querySelectorAll('.book').forEach(function (book) {
      book.hidden = topic !== 'all' && book.dataset.topics.split(' ').indexOf(topic) === -1;
    });
  });
}
