import React from 'react';
import { AlertTriangle, Phone, Heart } from 'lucide-react';

const CrisisSupport: React.FC = () => {
  return (
    <div
      id="crisis-support"
      className="bg-indigo-600 rounded-xl p-8 text-white mb-8"
    >
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="h-6 w-6 text-red-400" />
        <h2 className="text-2xl font-semibold">Crisis Support - You're Not Alone</h2>
      </div>

      <p className="mb-6">
        If you're experiencing a mental health crisis or having thoughts of suicide,
        please reach out for help immediately:
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-2 bg-indigo-700 p-4 rounded-lg">
          <Phone className="h-5 w-5" />
          <div>
            <strong>National Crisis Hotline</strong>
            <p>1771 - NATIONAL MINDLINE TO PROVIDE ROUND-THE-CLOCK SUPPORT FOR MENTAL HEALTH</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-indigo-700 p-4 rounded-lg">
          <Phone className="h-5 w-5" />
          <div>
            <strong>Crisis Text Line</strong>
            <p>Text +65-6669-1771 via WhatsApp</p>
          </div>
        </div>
      </div>

      <button className="w-full flex items-center justify-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors mb-6">
        <Heart className="h-5 w-5 mr-2 text-red-500" />
        Get Immediate Help
      </button>

      <div>
        <h3 className="text-lg font-semibold mb-2">Grounding Exercise</h3>
        <p className="mb-2">Try this simple 5-4-3-2-1 technique:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>5 things you can see</li>
          <li>4 things you can touch</li>
          <li>3 things you can hear</li>
          <li>2 things you can smell</li>
          <li>1 thing you can taste</li>
        </ul>
      </div>
    </div>
  );
};

export default CrisisSupport;
