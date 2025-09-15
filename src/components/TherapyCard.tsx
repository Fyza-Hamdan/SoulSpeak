import React from "react";
import { Video, Calendar, Clock } from "lucide-react";

const TherapyCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-colors">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Next Therapy Session
      </h2>

      <div className="space-y-4">
        {/* Doctor Info */}
        <div className="flex items-center space-x-3">
          <Video className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <div>
            <p className="text-gray-800 dark:text-gray-100 font-medium">
              Dr. Sarah Johnson
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Licensed Clinical Psychologist
            </p>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center space-x-3">
          <Calendar className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <p className="text-gray-700 dark:text-gray-200">
            Thursday, October 23rd
          </p>
        </div>

        {/* Time */}
        <div className="flex items-center space-x-3">
          <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <p className="text-gray-700 dark:text-gray-200">
            2:00 PM - 3:00 PM
          </p>
        </div>

        {/* Join Button */}
        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors">
          Join Session
        </button>
      </div>
    </div>
  );
};

export default TherapyCard;
