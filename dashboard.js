export function createDashboard(container) {
    container.innerHTML = `
        <header class="dashboard-header">
            <h1>Welcome back, Sarah</h1>
            <p>How are you feeling today?</p>
        </header>

        <div class="dashboard-grid">
            <div class="dashboard-card">
                <div class="card-header">
                    <h3 class="card-title">Mood Tracker</h3>
                    <i data-lucide="bar-chart"></i>
                </div>
                <p class="card-value">Positive trend</p>
                <p class="card-description">Last 7 days</p>
            </div>

            <div class="dashboard-card">
                <div class="card-header">
                    <h3 class="card-title">Next Session</h3>
                    <i data-lucide="calendar"></i>
                </div>
                <p class="card-value">Tomorrow, 2 PM</p>
                <p class="card-description">with Dr. Smith</p>
            </div>

            <div class="dashboard-card">
                <div class="card-header">
                    <h3 class="card-title">Resources</h3>
                    <i data-lucide="book-open"></i>
                </div>
                <p class="card-value">3 new articles</p>
                <p class="card-description">Based on your interests</p>
            </div>

            <div class="dashboard-card">
                <div class="card-header">
                    <h3 class="card-title">Community</h3>
                    <i data-lucide="message-circle"></i>
                </div>
                <p class="card-value">5 new posts</p>
                <p class="card-description">In your groups</p>
            </div>
        </div>

        <!-- Component containers -->
        <div id="teamsIntegration" class="teams-integration"></div>
        <div id="journalEntry" class="journal-section"></div>
        <div id="therapyBooking" class="booking-section"></div>
        <div id="crisisSupport" class="crisis-support"></div>
    `;

    // Initialize icons
    lucide.createIcons();
}