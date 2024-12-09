const monthNameEl = document.getElementById('month-name');
const dayNameEl = document.getElementById('day-name');
const dayNumEl = document.getElementById('day-number');
const yearEl = document.getElementById('year');
const timeEl = document.getElementById('time'); 

function updateDateTime() {
  const date = new Date();

  // Update date elements
  monthNameEl.innerText = date.toLocaleString('en', { month: 'long' });
  dayNameEl.innerText = date.toLocaleString('en', { weekday: 'long' });
  dayNumEl.innerText = date.getDate();
  yearEl.innerText = date.getFullYear();

  // Format and update time
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  timeEl.innerText = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
}

// Initial call
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);
