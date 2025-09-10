export function createMoodTracker(container) {
    const moodData = [
        { day: 'Mon', mood: 3 },
        { day: 'Tue', mood: 4 },
        { day: 'Wed', mood: 2 },
        { day: 'Thu', mood: 5 },
        { day: 'Fri', mood: 4 },
        { day: 'Sat', mood: 3 },
        { day: 'Sun', mood: 4 },
    ];

    const moods = [
        { icon: 'frown', label: 'Not Great', value: 1 },
        { icon: 'meh', label: 'Okay', value: 3 },
        { icon: 'smile', label: 'Great', value: 5 },
    ];

    let currentMood = null;
    let chart = null;

    function updateMoodData(newMood) {
        // Update today's mood (assuming Sunday is the last day)
        moodData[moodData.length - 1].mood = newMood;
        
        // Update the chart
        if (chart) {
            chart.data.datasets[0].data = moodData.map(d => d.mood);
            chart.update();
        }

        // Update the visual feedback
        updateMoodButtons();
    }

    function updateMoodButtons() {
        const buttons = container.querySelectorAll('.mood-button');
        buttons.forEach(button => {
            const moodValue = parseInt(button.dataset.mood);
            if (moodValue === currentMood) {
                button.classList.add('selected');
            } else {
                button.classList.remove('selected');
            }
        });
    }

    function initChart() {
        const canvas = container.querySelector('#moodChart');
        const ctx = canvas.getContext('2d');

        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: moodData.map(d => d.day),
                datasets: [{
                    label: 'Mood',
                    data: moodData.map(d => d.mood),
                    borderColor: '#4F46E5',
                    backgroundColor: 'rgba(79, 70, 229, 0.1)',
                    borderWidth: 2,
                    pointBackgroundColor: '#4F46E5',
                    pointBorderColor: '#4F46E5',
                    pointRadius: 4,
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const moodLabels = {
                                    1: 'Very Sad',
                                    2: 'Sad', 
                                    3: 'Okay',
                                    4: 'Good',
                                    5: 'Great'
                                };
                                return `Mood: ${moodLabels[context.parsed.y]}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 1,
                        max: 5,
                        ticks: {
                            stepSize: 1,
                            callback: function(value) {
                                const moodLabels = {
                                    1: '😢',
                                    2: '😔',
                                    3: '😐',
                                    4: '😊',
                                    5: '😄'
                                };
                                return moodLabels[value];
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    container.innerHTML = `
        <div class="mood-tracker-container">
            <h2 class="mood-tracker-title">Mood Tracker</h2>
            
            <div class="mood-selector">
                <div class="mood-buttons">
                    ${moods.map(mood => `
                        <button
                            class="mood-button"
                            data-mood="${mood.value}"
                        >
                            <i data-lucide="${mood.icon}" class="mood-icon"></i>
                            <span class="mood-label">${mood.label}</span>
                        </button>
                    `).join('')}
                </div>
            </div>

            <div class="chart-container">
                <canvas id="moodChart"></canvas>
            </div>
        </div>
    `;

    // Add event listeners
    container.querySelectorAll('.mood-button').forEach(button => {
        button.addEventListener('click', () => {
            const moodValue = parseInt(button.dataset.mood);
            currentMood = moodValue;
            updateMoodData(moodValue);
        });
    });

    // Initialize icons and chart
    lucide.createIcons();
    
    // Initialize chart after a short delay to ensure canvas is rendered
    setTimeout(() => {
        initChart();
    }, 100);
}