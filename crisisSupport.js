export function createCrisisSupport(container) {
    container.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem">
            <i data-lucide="alert-triangle" style="color: #dc2626"></i>
            <h2>Crisis Support - You're Not Alone</h2>
        </div>
        
        <p>If you're experiencing a mental health crisis or having thoughts of suicide, please reach out for help immediately:</p>

        <div class="emergency-contacts">
            <div class="emergency-number">
                <i data-lucide="phone" style="margin-right: 0.5rem"></i>
                <div>
                    <strong>National Crisis Hotline</strong>
                    <p>988 - Available 24/7</p>
                </div>
            </div>

            <div class="emergency-number">
                <i data-lucide="phone" style="margin-right: 0.5rem"></i>
                <div>
                    <strong>Crisis Text Line</strong>
                    <p>Text HOME to 741741</p>
                </div>
            </div>

            <button class="btn btn-danger" style="width: 100%; margin-top: 1rem">
                <i data-lucide="heart" style="margin-right: 0.5rem"></i>
                Get Immediate Help
            </button>
        </div>

        <div style="margin-top: 1rem">
            <h3>Grounding Exercise</h3>
            <p>Try this simple 5-4-3-2-1 technique:</p>
            <ul style="margin-left: 1.5rem; margin-top: 0.5rem">
                <li>5 things you can see</li>
                <li>4 things you can touch</li>
                <li>3 things you can hear</li>
                <li>2 things you can smell</li>
                <li>1 thing you can taste</li>
            </ul>
        </div>
    `;

    // Initialize icons
    lucide.createIcons();
}