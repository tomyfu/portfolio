const button = document.getElementById('toggle');
const overlay = document.getElementById('levels');
const legend = document.getElementById('fib-legend');
button.addEventListener('click', () => {
  const visible = button.getAttribute('aria-pressed') !== 'true';
  button.setAttribute('aria-pressed', String(visible));
  overlay.style.display = visible ? '' : 'none';
  legend.hidden = !visible;
  document.getElementById('toggle-state').textContent = visible ? 'ON' : 'OFF';
});

const entryCents = 215020;
const sl = document.getElementById('sl');
const tp = document.getElementById('tp');
function updatePrices() {
  for (const field of [sl, tp]) {
    const valid = field.value !== '' && field.validity.valid && Number.isInteger(field.valueAsNumber);
    field.setAttribute('aria-invalid', String(!valid));
    const delta = field.id === 'sl' ? -field.valueAsNumber : field.valueAsNumber;
    document.getElementById(field.id + '-price').textContent = valid ? ((entryCents + delta) / 100).toFixed(2) : '—';
  }
  document.getElementById('validation').textContent = [sl, tp].some(field => field.getAttribute('aria-invalid') === 'true')
    ? '1~10,000 사이의 정수 포인트를 입력하세요.' : '';
}
for (const field of [sl, tp]) field.addEventListener('input', updatePrices);
updatePrices();
