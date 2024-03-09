const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const currentMonthYear = document.getElementById('current-month-year');
const calendarGrid = document.getElementById('calendar-grid');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function updateMonthYearDisplay() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    currentMonthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;
}

function generateCalendar() {
    calendarGrid.innerHTML = ''; // Clear previous calendar
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    
    for (let i = 1; i <= daysInMonth; i++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day-cell');
        dayCell.textContent = i;
        calendarGrid.appendChild(dayCell);
    }
}

prevMonthBtn.addEventListener('click', () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear -= 1;
    } else {
        currentMonth -= 1;
    }
    generateCalendar();
    updateMonthYearDisplay();
});

nextMonthBtn.addEventListener('click', () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear += 1;
    } else {
        currentMonth += 1;
    }
    generateCalendar();
    updateMonthYearDisplay();
});

document.addEventListener('DOMContentLoaded', () => {
    updateMonthYearDisplay();
    generateCalendar();
});
