import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { useTheme } from '../ThemeContext';

interface JournalEntryType {
  id: string;
  date: Date;
  content: string;
  mood: string;
}

const JournalEntry: React.FC = () => {
  const { theme } = useTheme(); // read dark/light mode
  const [entries, setEntries] = useState<JournalEntryType[]>([]);
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('happy');

  const saveEntry = () => {
    if (content.trim()) {
      const newEntry: JournalEntryType = {
        id: Date.now().toString(),
        date: new Date(),
        content,
        mood,
      };
      setEntries([newEntry, ...entries]);
      setContent('');
    }
  };

  const getMoodEmoji = (m: string) => {
    const emojis: Record<string, string> = {
      happy: '😊',
      calm: '😌',
      neutral: '😐',
      sad: '😔',
      anxious: '😰',
    };
    return emojis[m] || '😐';
  };

  return (
    <div
      id="journal"
      className={`rounded-xl shadow-md p-6 mb-8 ${
        theme === 'light' ? 'bg-white' : 'bg-gray-800'
      }`}
    >
      <h2 className={`text-xl font-semibold mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-gray-100'}`}>
        Journal Entry
      </h2>
      <p className={`mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
        Write your thoughts and feelings...
      </p>

      {/* Input Area */}
      <div className="space-y-3">
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="border rounded-lg px-3 py-2 text-gray-700 dark:text-gray-900 dark:bg-gray-200"
        >
          <option value="happy">Happy 😊</option>
          <option value="calm">Calm 😌</option>
          <option value="neutral">Neutral 😐</option>
          <option value="sad">Sad 😔</option>
          <option value="anxious">Anxious 😰</option>
        </select>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="How are you feeling today?"
          className="w-full border rounded-lg p-3 text-gray-700 dark:text-gray-900 dark:bg-gray-200"
        />

        <button
          onClick={saveEntry}
          className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Save className="h-4 w-4" />
          <span>Save Entry</span>
        </button>
      </div>

      {/* Previous Entries */}
      {entries.length > 0 && (
        <div className="mt-6">
          <h3 className={`text-lg font-semibold mb-3 ${theme === 'light' ? 'text-gray-800' : 'text-gray-100'}`}>
            Previous Entries
          </h3>
          <div className="space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className={`flex justify-between items-start p-4 rounded-lg shadow-sm ${
                  theme === 'light' ? 'bg-gray-50' : 'bg-gray-700 text-gray-100'
                }`}
              >
                <div>
                  <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-300'}`}>
                    {entry.date.toLocaleDateString()} {entry.date.toLocaleTimeString()}
                  </p>
                  <p>{entry.content}</p>
                </div>
                <span className="text-2xl">{getMoodEmoji(entry.mood)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JournalEntry;
