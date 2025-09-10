import { createDashboard } from './dashboard.js';
import { createTeamsIntegration } from './teamsIntegration.js';
import { createJournalEntry } from './journalEntry.js';
import { createTherapyBooking } from './therapyBooking.js';
import { createCrisisSupport } from './crisisSupport.js';
import { createMoodTracker } from './moodTracker.js';

// Import Chart.js
import Chart from 'chart.js/auto';

// Make Chart available globally
window.Chart = Chart;

// Initialize Lucide icons
lucide.createIcons();

// Theme toggling
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    themeIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    themeToggle.querySelector('span').textContent = isDark ? 'Light Mode' : 'Dark Mode';
    lucide.createIcons();
});

// Sidebar toggling
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Initialize components
const mainContent = document.querySelector('.main-content');
createDashboard(mainContent);

// Replace the mood tracker card with the enhanced component
const moodTrackerCard = mainContent.querySelector('.dashboard-card');
if (moodTrackerCard) {
    createMoodTracker(moodTrackerCard);
}

createTeamsIntegration(document.getElementById('teamsIntegration'));
createJournalEntry(document.getElementById('journalEntry'));
createTherapyBooking(document.getElementById('therapyBooking'));
createCrisisSupport(document.getElementById('crisisSupport'));