import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';

interface Therapist {
  id: string;
  name: string;
  specialization: string;
  avatar: string;
  availability: string[];
}

const mockTherapists: Therapist[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialization: 'Anxiety & Depression',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120',
    availability: ['Mon 2:00 PM', 'Wed 3:00 PM', 'Fri 1:00 PM'],
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialization: 'Teen Counseling',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120',
    availability: ['Tue 1:00 PM', 'Thu 4:00 PM', 'Fri 2:00 PM'],
  },
];

const TherapyBooking: React.FC = () => {
  const { theme } = useTheme();
  const [selectedTherapist, setSelectedTherapist] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleBooking = () => {
    if (selectedTherapist && selectedTime) {
      const therapist = mockTherapists.find((t) => t.id === selectedTherapist);
      alert(`Booking confirmed with ${therapist?.name} for ${selectedTime}`);
      setSelectedTherapist(null);
      setSelectedTime(null);
    }
  };

  return (
    <div
      id="therapy-booking"
      className={`rounded-xl shadow-md p-6 mb-8 ${
        theme === 'light' ? 'bg-white' : 'bg-gray-800 text-gray-100'
      }`}
    >
      <h2 className={`text-xl font-semibold mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-gray-100'}`}>
        Book a Therapy Session
      </h2>
      <p className={`mb-6 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
        Choose a therapist and available time slot for your session
      </p>

      <div className="space-y-6">
        {mockTherapists.map((therapist) => (
          <div
            key={therapist.id}
            className={`rounded-lg p-4 shadow-sm ${
              theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'
            }`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={therapist.avatar}
                alt={therapist.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{therapist.name}</h3>
                <p className="text-sm">{therapist.specialization}</p>
              </div>
            </div>

            <h4 className="text-sm font-medium mb-2">Available Times:</h4>
            <div className="flex flex-wrap gap-2">
              {therapist.availability.map((time) => (
                <button
                  key={time}
                  onClick={() => {
                    setSelectedTherapist(therapist.id);
                    setSelectedTime(time);
                  }}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    selectedTherapist === therapist.id && selectedTime === time
                      ? 'bg-indigo-600 text-white'
                      : theme === 'light'
                      ? 'bg-white border border-gray-300 text-gray-700 hover:bg-indigo-50'
                      : 'bg-gray-600 text-gray-100 hover:bg-gray-500'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>

            {selectedTherapist === therapist.id && selectedTime && (
              <button
                onClick={handleBooking}
                className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Book Session
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TherapyBooking;
