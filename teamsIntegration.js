export function createTeamsIntegration(container) {
    const upcomingSessions = [
        {
            id: '1',
            type: 'therapy',
            title: 'Individual Therapy Session',
            therapist: 'Dr. Sarah Johnson',
            date: '2024-03-25',
            time: '14:00',
            joinLink: '#'
        },
        {
            id: '2',
            type: 'workshop',
            title: 'Mindfulness Workshop',
            date: '2024-03-26',
            time: '15:00',
            joinLink: '#'
        }
    ];

    function joinSession(session) {
        alert(`Joining ${session.type === 'therapy' ? 'therapy session' : 'workshop'} via Teams...\nA real implementation would open Microsoft Teams.`);
    }

    function submitQuestion(e) {
        e.preventDefault();
        const questionInput = container.querySelector('.question-input');
        alert('Question submitted anonymously!');
        questionInput.value = '';
    }

    container.innerHTML = `
        <h2>Microsoft Teams Integration</h2>
        
        <div class="sessions-container">
            <div class="upcoming-sessions">
                <h3>Upcoming Sessions</h3>
                ${upcomingSessions.map(session => `
                    <div class="session-card">
                        <div class="session-icon">
                            <i data-lucide="${session.type === 'therapy' ? 'video' : 'users'}"></i>
                        </div>
                        <div class="session-details">
                            <h4>${session.title}</h4>
                            ${session.therapist ? `<p>With: ${session.therapist}</p>` : ''}
                            <p>
                                <i data-lucide="calendar"></i>
                                ${new Date(`${session.date} ${session.time}`).toLocaleString()}
                            </p>
                        </div>
                        <button 
                            class="join-button btn btn-primary"
                            data-session-id="${session.id}"
                        >
                            Join Meeting
                        </button>
                    </div>
                `).join('')}
            </div>

            <div class="workshop-questions">
                <h3>Workshop Questions</h3>
                <p>Submit questions anonymously for the next workshop</p>
                <form class="question-form">
                    <textarea
                        placeholder="Type your question here..."
                        class="question-input"
                    ></textarea>
                    <button type="submit" class="submit-button btn btn-primary">
                        <i data-lucide="message-square"></i>
                        Submit Question
                    </button>
                </form>
            </div>
        </div>
    `;

    // Add event listeners
    container.querySelectorAll('.join-button').forEach(button => {
        button.addEventListener('click', () => {
            const session = upcomingSessions.find(s => s.id === button.dataset.sessionId);
            joinSession(session);
        });
    });

    container.querySelector('.question-form').addEventListener('submit', submitQuestion);

    // Initialize icons
    lucide.createIcons();
}