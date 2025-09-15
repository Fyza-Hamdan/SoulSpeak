// src/components/ImmediateSupport.tsx
import React from "react";
import { AlertTriangle, Phone, Heart } from "lucide-react";

export default function ImmediateSupport() {
  return (
    <div className="space-y-6 md:w-1/2">
      {/* Crisis Support Container */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="text-red-600 w-6 h-6" />
          <h2 className="text-xl font-semibold text-gray-800">
            Crisis Support - You're Not Alone
          </h2>
        </div>

        <p className="text-gray-700 mb-4">
          If you're experiencing a mental health crisis or having thoughts of
          suicide, please reach out for help immediately:
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-gray-600" />
            <div>
              <strong>National Crisis Hotline</strong>
              <p className="text-gray-600">988 - Available 24/7</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-gray-600" />
            <div>
              <strong>Crisis Text Line</strong>
              <p className="text-gray-600">Text HOME to 741741</p>
            </div>
          </div>
        </div>

        <button className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2">
          <Heart className="w-5 h-5" />
          Get Immediate Help
        </button>

        {/* Grounding Exercise */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Grounding Exercise</h3>
          <p className="text-gray-700 mb-2">Try this simple 5-4-3-2-1 technique:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>5 things you can see</li>
            <li>4 things you can touch</li>
            <li>3 things you can hear</li>
            <li>2 things you can smell</li>
            <li>1 thing you can taste</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
