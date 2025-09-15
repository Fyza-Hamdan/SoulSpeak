import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Smile, Meh, Frown } from "lucide-react";

const MoodTracker = () => {
  const moodData = [
    { day: "Mon", mood: 3 },
    { day: "Tue", mood: 4 },
    { day: "Wed", mood: 2 },
    { day: "Thu", mood: 5 },
    { day: "Fri", mood: 4 },
    { day: "Sat", mood: 3 },
    { day: "Sun", mood: 4 },
  ];

  const moods = [
    { icon: Frown, label: "Not Great", value: 1 },
    { icon: Meh, label: "Okay", value: 3 },
    { icon: Smile, label: "Great", value: 5 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-colors">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Mood Tracker
      </h2>

      {/* Mood Buttons */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          {moods.map((mood) => (
            <button
              key={mood.label}
              className="flex flex-col items-center p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
            >
              <mood.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-1" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {mood.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={moodData}>
            <XAxis dataKey="day" stroke="#9CA3AF" />
            <YAxis
              stroke="#9CA3AF"
              domain={[1, 5]}
              ticks={[1, 2, 3, 4, 5]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                color: "#F9FAFB",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="mood"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={{ fill: "#4F46E5", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MoodTracker;
