export function createTherapyBooking(container) {
    const mockTherapists = [
        {
            id: '1',
            name: 'Dr. Sarah Johnson',
            specialization: 'Anxiety & Depression',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120',
            availability: ['Mon 2:00 PM', 'Wed 3:00 PM', 'Fri 1:00 PM']
        },
        {
            id: '2',
            name: 'Dr. Michael Chen',
            specialization: 'Teen Counseling',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120',
            availability: ['Tue 1:00 PM', 'Thu 4:00 PM', 'Fri 2:00 PM']
        }
    ];

    let selectedTherapist = null;
    let selectedTime = null;

    function handleTimeSlotClick(therapistId, time) {
        selectedTherapist = therapistId;
        selectedTime = time;
        renderTherapists();
    }

    function handleBooking() {
        if (selectedTherapist && selectedTime) {
            const therapist = mockTherapists.find(t => t.id === selectedTherapist);
            alert(`Booking confirmed with ${therapist.name} for ${selectedTime}`);
            selectedTherapist = null;
            selectedTime = null;
            renderTherapists();
        }
    }

    function renderTherapists() {
        const therapistList = container.querySelector('.therapist-list');
        therapistList.innerHTML = mockTherapists.map(therapist => `
            <div class="therapist-card">
                <div class="therapist-info">
                    <img
                        src="${therapist.avatar}"
                        alt="${therapist.name}"
                        class="therapist-avatar"
                    />
                    <div>
                        <h3>${therapist.name}</h3>
                        <p>${therapist.specialization}</p>
                    </div>
                </div>

                <div>
                    <h4>Available Times:</h4>
                    <div class="time-slots">
                        ${therapist.availability.map(time => `
                            <button
                                class="btn ${
                                    selectedTherapist === therapist.id && selectedTime === time
                                        ? 'btn-primary'
                                        : 'btn-secondary'
                                }"
                                data-therapist-id="${therapist.id}"
                                data-time="${time}"
                            >
                                ${time}
                            </button>
                        `).join('')}
                    </div>
                </div>

                ${selectedTherapist === therapist.id && selectedTime ? `
                    <button
                        class="btn btn-primary book-session"
                        style="margin-top: 1rem; width: 100%"
                    >
                        Book Session
                    </button>
                ` : ''}
            </div>
        `).join('');

        // Add event listeners
        therapistList.querySelectorAll('.time-slots button').forEach(button => {
            button.addEventListener('click', () => {
                handleTimeSlotClick(
                    button.dataset.therapistId,
                    button.dataset.time
                );
            });
        });

        therapistList.querySelectorAll('.book-session').forEach(button => {
            button.addEventListener('click', handleBooking);
        });
    }

    container.innerHTML = `
        <h2>Book a Therapy Session</h2>
        <p>Choose a therapist and available time slot for your session</p>
        <div class="therapist-list"></div>
    `;

    renderTherapists();
}