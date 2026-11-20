const filters = document.querySelector('#filters');
const cards = Array.from(document.querySelectorAll('[data-category]'));
filters.hidden = false;
filters.addEventListener('click', (event) => {
  const active = event.target.closest('button[data-filter]');
  if (!active) return;
  const category = active.dataset.filter;
  for (const button of filters.querySelectorAll('button')) {
    button.setAttribute('aria-pressed', String(button === active));
  }
  for (const card of cards) card.hidden = category !== '전체' && card.dataset.category !== category;
  document.querySelector('#filter-status').textContent = category + ' 프로젝트 ' + cards.filter(card => !card.hidden).length + '개';
});
