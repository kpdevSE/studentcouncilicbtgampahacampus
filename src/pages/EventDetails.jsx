import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  Award,
  ArrowLeft,
  Share2,
  Heart,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const EventDetails = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const event = location.state?.event;

  if (!event) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Event not found</CardTitle>
            <CardDescription>
              The event you're looking for doesn't exist or has been removed.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button onClick={() => navigate("/past-events")}>
              Back to Events
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
        setActiveImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Ensure page starts at top when opening or switching events
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div
        className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden bg-center bg-cover"
        style={{ backgroundImage: `url(${event.images && event.images[0]})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full float-animation"></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full float-animation"
          style={{ animationDelay: "3s" }}
        ></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <Button
            variant="ghost"
            onClick={() => navigate("/past-events")}
            className="mb-8 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Button>

          <div className="max-w-4xl mx-auto">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Award className="w-4 h-4 mr-2" />
                {event.category || "Event"}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {event.title}
              </h1>
              <p className="text-xl opacity-90 mb-8">{event.shortDesc}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                  <Calendar className="w-5 h-5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5" />
                  <span>{event.attendees || "N/A"} attendees</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5" />
                  <span>{event.rating || "N/A"} rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Event Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Event Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {event.images.map((img, idx) => (
              <Card
                key={idx}
                className="modern-card overflow-hidden hover:scale-105 transition-all duration-300 group cursor-zoom-in"
                onClick={() => {
                  setActiveImage(img);
                  setIsLightboxOpen(true);
                }}
              >
                <div
                  className="bg-white flex items-center justify-center"
                  style={{ height: "220px" }}
                >
                  <img
                    src={img}
                    alt={`Event ${idx + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Details */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="modern-card">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">About the Event</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  {event.fullDesc}
                </p>

                {event.highlights && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Event Highlights
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {event.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm font-medium">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Event Info Card */}
            <Card className="modern-card">
              <CardHeader>
                <CardTitle className="text-xl">Event Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-semibold">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-semibold">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Venue</p>
                    <p className="font-semibold">{event.venue}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Attendees</p>
                    <p className="font-semibold">{event.attendees || "N/A"}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="font-semibold">{event.rating || "N/A"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Category Badge */}
            {event.category && (
              <Card className="modern-card">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Badge className="text-lg px-6 py-3">
                      {event.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setIsLightboxOpen(false);
            setActiveImage(null);
          }}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <img
              src={activeImage || ""}
              alt="Full size"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              aria-label="Close"
              className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full px-3 py-1"
              onClick={() => {
                setIsLightboxOpen(false);
                setActiveImage(null);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showScrollTop && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white/50 px-4 py-3"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default EventDetails;
