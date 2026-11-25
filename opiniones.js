(async () => {
  const section = document.getElementById('opiniones');
  if (!section) return;
  const header = document.querySelector('.site-header');
  const fit = () => section.style.setProperty('--review-header', header.offsetHeight + 'px');
  fit();
  if ('ResizeObserver' in window) new ResizeObserver(fit).observe(header);
  if ('IntersectionObserver' in window) new IntersectionObserver(([entry]) => {
    document.body.classList.toggle('review-in-view', entry.isIntersecting);
  }).observe(section);

  const samples = [
    {stars:5,comment:'Me vino bárbaro poder seguir trabajando en casa mientras lavaban el auto.'},
    {stars:4,comment:'El interior quedó muy bien. Me habría servido saber de antemano cuánto iba a durar el lavado.'}
  ];
  const controls = section.querySelector('.reviews-controls');
  let comments = samples;
  let index = 0;
  function showComment() {
    section.querySelector('.reviews-story').hidden = !comments.length;
    controls.hidden = comments.length < 2;
    if (!comments.length) return;
    section.querySelector('.reviews-individual').textContent = comments[index].stars + ' de 5 estrellas';
    section.querySelector('blockquote').textContent = '“' + comments[index].comment + '”';
    controls.querySelector('span').textContent = (index + 1) + ' de ' + comments.length;
  }
  controls.querySelectorAll('button').forEach((button, i) => button.addEventListener('click', () => {
    index = (index + (i ? 1 : -1) + comments.length) % comments.length;
    showComment();
  }));
  showComment();
  try {
    const response = await fetch('opiniones.json', {cache:'no-cache'});
    if (!response.ok) return;
    const rows = await response.json();
    if (!Array.isArray(rows) || !rows.length || !rows.every(row => Number.isInteger(row?.stars) && row.stars >= 1 && row.stars <= 5)) return;
    const average = rows.reduce((sum,row) => sum + row.stars, 0) / rows.length;
    section.querySelector('.reviews-mode').textContent = 'Lavados realizados';
    section.querySelector('.reviews-total strong').firstChild.nodeValue = average.toLocaleString('es-AR',{minimumFractionDigits:1,maximumFractionDigits:1});
    section.querySelector('.review-stars').style.setProperty('--score',average * 20 + '%');
    section.querySelector('.reviews-count').textContent = rows.length === 1 ? '1 valoración' : rows.length + ' valoraciones';
    comments = rows.filter(row => typeof row.comment === 'string' && row.comment.trim());
    index = 0;
    showComment();
  } catch { /* La muestra sigue identificada mientras los datos estén fuera de línea. */ }
})();