// Live "open now" status, based on Helena's local time (Mountain Time).
// Hours are in 24-hour time, keyed by day of week (0 = Sunday). null = closed.
// If you change the hours here, also change them in index.html.
const HOURS = {
  0: null,
  1: [9, 19],
  2: [9, 19],
  3: [9, 19],
  4: [9, 19],
  5: [9, 19],
  6: [9, 18],
};
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function helenaNow() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Denver',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type).value;
  return {
    day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday')),
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
  };
}

function formatHour(h) {
  const suffix = h >= 12 ? 'pm' : 'am';
  return `${h % 12 === 0 ? 12 : h % 12} ${suffix}`;
}

function statusText({ day, minutes }) {
  const today = HOURS[day];
  if (today && minutes >= today[0] * 60 && minutes < today[1] * 60) {
    return `Open now, until ${formatHour(today[1])}`;
  }
  // Closed: find the next opening, starting with later today.
  for (let ahead = 0; ahead <= 7; ahead++) {
    const d = (day + ahead) % 7;
    const h = HOURS[d];
    if (!h) continue;
    if (ahead === 0 && minutes >= h[0] * 60) continue;
    const when = ahead === 0 ? 'today' : ahead === 1 ? 'tomorrow' : DAY_NAMES[d];
    return `Closed now. Opens ${when} at ${formatHour(h[0])}`;
  }
  return 'Closed now';
}

function update() {
  const now = helenaNow();
  const status = document.getElementById('status');
  if (status) {
    status.textContent = statusText(now);
    status.hidden = false;
  }
  document.querySelectorAll('.hours tr[data-days]').forEach((row) => {
    const isToday = row.dataset.days.split(' ').includes(String(now.day));
    row.classList.toggle('today', isToday);
    if (isToday) row.setAttribute('aria-current', 'date');
    else row.removeAttribute('aria-current');
  });
}

update();
setInterval(update, 60 * 1000);
