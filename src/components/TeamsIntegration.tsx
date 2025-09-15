import React, { useState } from 'react';
import { Video, Users, Calendar, MessageSquare } from 'lucide-react';

interface Session {
  id: string;
  type: 'therapy' | 'workshop';
  title: string;
  therapist?: string;
  date: string;
  time: string;
  joinLink: string;
}

const upcomingSessions: Session[] = [
  {
    id: '1',
    type: 'therapy',
    title: 'Individual Therapy Session',
    therapist: 'Dr. Sarah Johnson',
    date: '2025-10-23',
    time: '14:00',
    joinLink: '#',
  },
  {
    id: '2',
    type: 'workshop',
    title: 'Mindfulness Workshop',
    date: '2025-11-05',
    time: '15:00',
    joinLink: '#',
  },
];

const TeamsIntegration: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [submittedQuestions, setSubmittedQuestions] = useState<string[]>([]);

  const joinSession = (session: Session) => {
    alert(
      `Joining ${session.type === 'therapy' ? 'therapy session' : 'workshop'} via Teams...\nA real implementation would open Microsoft Teams.`
    );
  };

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      setSubmittedQuestions([question, ...submittedQuestions]);
      setQuestion('');
      alert('Question submitted anonymously!');
    }
  };

  return (
    <div
      id="teams"
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8 transition-colors"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Microsoft Teams Integration
      </h2>

      {/* Upcoming Sessions */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
          Upcoming Sessions
        </h3>
        <div className="space-y-4">
          {upcomingSessions.map((session) => (
            <div
              key={session.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm transition-colors"
            >
              <div className="flex items-center space-x-4">
                {session.type === 'therapy' ? (
                  <Video className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                ) : (
                  <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                )}
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">{session.title}</h4>
                  {session.therapist && (
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      With: {session.therapist}
                    </p>
                  )}
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Calendar className="h-4 w-4 mr-1 dark:text-gray-300" />
                    {new Date(`${session.date}T${session.time}`).toLocaleString()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => joinSession(session)}
                className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
              >
                Join
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Workshop Questions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
          Workshop Questions
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-3">
          Submit questions anonymously for the next workshop
        </p>
        <form onSubmit={handleSubmitQuestion} className="space-y-3">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-400 transition-colors"
          />
          <button
            type="submit"
            className="flex items-center bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Submit Question
          </button>
        </form>

        {submittedQuestions.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Submitted Questions:
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
              {submittedQuestions.map((q, idx) => (
                <li key={idx}>{q}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamsIntegration;
