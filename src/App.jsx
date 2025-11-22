import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import PastEvents from "./pages/PastEvents";
import EventDetails from "./pages/EventDetails";
import UpcomingEvents from "./pages/UpcomingEvents";
import PresentMembers from "./pages/PresentMembers";
import PastMembers from "./pages/PastMembers";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 tech-grid opacity-30 pointer-events-none z-0" />
      <Navigation />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/event-details/:id" element={<EventDetails />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/present-members" element={<PresentMembers />} />
          <Route path="/past-members" element={<PastMembers />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
