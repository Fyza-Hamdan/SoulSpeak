import React from 'react';
import { BookOpen, Clock } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  category: string;
  duration: string;
  imageUrl: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, category, duration, imageUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform duration-200 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <BookOpen className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm text-indigo-600 dark:text-indigo-400">{category}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
          <Clock className="h-4 w-4" />
          <span className="text-sm">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
