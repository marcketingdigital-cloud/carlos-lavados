(async () => {
  const card = document.getElementById('opiniones');
  if (!card) return;
  const status = card.querySelector('.review-status');
  try {
    const response = await fetch('opiniones.json', {cache: 'no-cache'});
    if (!response.ok) throw new Error();
    const reviews = await response.json();
    if (!Array.isArray(reviews) || !reviews.every(review => Number.isInteger(review?.stars) && review.stars >= 1 && review.stars <= 5)) throw new Error();
    if (!reviews.length) {
      status.textContent = 'Acá vas a encontrar las primeras opiniones de quienes ya lavaron su auto con Carlos.';
      return;
    }
    const average = reviews.reduce((sum, review) => sum + review.stars, 0) / reviews.length;
    card.querySelector('strong').textContent = average.toLocaleString('es-AR', {minimumFractionDigits:1, maximumFractionDigits:1}) + '/5';
    card.querySelector('.review-stars').style.setProperty('--score', average * 20 + '%');
    status.textContent = reviews.length === 1 ? '1 valoración de un lavado realizado' : reviews.length + ' valoraciones de lavados realizados';
    const list = card.querySelector('ul');
    for (const review of reviews) {
      if (!review.comment) continue;
      const item = document.createElement('li');
      item.textContent = review.stars + '/5 · ' + review.comment;
      list.append(item);
    }
    card.querySelector('details').hidden = !list.childElementCount;
    card.querySelector('.review-results').hidden = false;
  } catch {
    status.textContent = 'Las opiniones no se pudieron cargar en este momento.';
  }
})();
