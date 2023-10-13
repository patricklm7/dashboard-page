const dashboardPage = document.getElementById('container')
const saleInfo = document.getElementById('sale-info')
const mouthRevenue = document.getElementById('mouth-revenue')
const totalProfit = document.getElementById('total-profit')
const mouthForm = document.getElementById('meses')

const mouth = mouthForm.value;
console.log(mouth);

const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const currentMonthElement = document.getElementById("currentMonth");
const calendarBody = document.getElementById("calendarBody");
const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

        function updateCalendar() {
            const date = new Date(currentYear, currentMonth, 1);
            currentMonthElement.textContent = date.toLocaleString('pt-BR', { month: 'long', year: 'numeric' });

            calendarBody.innerHTML = '';

            const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
            const firstDay = new Date(currentYear, currentMonth, 1).getDay();

            let day = 1;
            for (let i = 0; i < 6; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < 7; j++) {
                    const cell = document.createElement('td');
                    if ((i === 0 && j < firstDay) || day > daysInMonth) {
                        cell.textContent = '';
                    } else {
                        cell.textContent = day;
                        day++;
                    }
                    row.appendChild(cell);
                }
                calendarBody.appendChild(row);
            }
        }

        prevMonthBtn.addEventListener('click', () => {
            if (currentMonth === 0) {
                currentMonth = 11;
                currentYear--;
            } else {
                currentMonth--;
            }
            updateCalendar();
        });

        nextMonthBtn.addEventListener('click', () => {
            if (currentMonth === 11) {
                currentMonth = 0;
                currentYear++;
            } else {
                currentMonth++;
            }
            updateCalendar();
        });

        updateCalendar();