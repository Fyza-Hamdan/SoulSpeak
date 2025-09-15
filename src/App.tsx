import React from "react";
import Navbar from "./components/Navbar";
import MoodTracker from "./components/MoodTracker";
import TherapyCard from "./components/TherapyCard";
import ResourceCard from "./components/ResourceCard";
import Footer from "./components/Footer";
import JournalEntry from "./components/JournalEntry";
import TherapyBooking from "./components/TherapyBooking";
import TeamsIntegration from "./components/TeamsIntegration";
import { motion } from "framer-motion";
import { ThemeProvider } from "./ThemeContext"; // wrap the app
import CrisisSupport from "./components/CrisisSupport";

function App() {
  const resources = [
    {
      title: "Managing Anxiety in Daily Life",
      category: "Anxiety",
      duration: "15 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80",
    },
    {
      title: "Building Self-Confidence",
      category: "Self-Esteem",
      duration: "20 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80",
    },
    {
      title: "Mindfulness for Beginners",
      category: "Meditation",
      duration: "10 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 py-8 flex-grow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
              Welcome back, Alex
            </h1>

            {/* Mood Tracker + Therapy Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <MoodTracker />
              <TherapyCard />
            </div>

            {/* Journal Entry */}
            <JournalEntry />

            {/* Therapy Booking */}
            <TherapyBooking />

            {/* Teams Integration */}
            <TeamsIntegration />

            {/* Crisis Support */}
            <CrisisSupport />

            {/* Recommended Resources */}
            <section id="resources" className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                Recommended Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ResourceCard {...resource} />
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
