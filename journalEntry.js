export function createJournalEntry(container) {
    let entries = [];

    function saveEntry(content, mood) {
        if (content.trim()) {
            const newEntry = {
                id: Date.now().toString(),
                date: new Date(),
                content,
                mood
            };
            entries = [newEntry, ...entries];
            renderEntries();
            return true;
        }
        return false;
    }

    function renderEntries() {
        const entriesContainer = container.querySelector('.previous-entries');
        entriesContainer.innerHTML = entries.map(entry => `
            <div class="mood-entry">
                <div>
                    <p class="mood-date">
                        ${entry.date.toLocaleDateString()} ${entry.date.toLocaleTimeString()}
                    </p>
                    <p class="mood-note">${entry.content}</p>
                </div>
                <span class="mood-emoji">
                    ${getMoodEmoji(entry.mood)}
                </span>
            </div>
        `).join('');
    }

    function getMoodEmoji(mood) {
        const emojis = {
            happy: '😊',
            calm: '😌',
            neutral: '😐',
            sad: '😔',
            anxious: '😰'
        };
        return emojis[mood] || '😐';
    }

    container.innerHTML = `
        <h2>Journal Entry</h2>
        <p>Write your thoughts and feelings...</p>

        <div class="journal-entry">
            <select class="mood-select btn btn-secondary">
                <option value="happy">Happy 😊</option>
                <option value="calm">Calm 😌</option>
                <option value="neutral">Neutral 😐</option>
                <option value="sad">Sad 😔</option>
                <option value="anxious">Anxious 😰</option>
            </select>

            <textarea
                class="journal-input"
                placeholder="How are you feeling today?"
            ></textarea>

            <button class="save-button btn btn-primary">
                <i data-lucide="save"></i>
                Save Entry
            </button>
        </div>

        <div style="margin-top: 2rem">
            <h3>Previous Entries</h3>
            <div class="previous-entries"></div>
        </div>
    `;

    // Add event listeners
    const saveButton = container.querySelector('.save-button');
    const journalInput = container.querySelector('.journal-input');
    const moodSelect = container.querySelector('.mood-select');

    saveButton.addEventListener('click', () => {
        if (saveEntry(journalInput.value, moodSelect.value)) {
            journalInput.value = '';
        }
    });

    // Initialize icons
    lucide.createIcons();
}