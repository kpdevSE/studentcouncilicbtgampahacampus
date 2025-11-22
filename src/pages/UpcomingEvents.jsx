import React, { useState, useEffect } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";

const UpcomingEvents = () => {
  const [registrationCounts, setRegistrationCounts] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    email: "",
    phone: "",
    programme: "",
    note: "",
  });

  const upcomingEvents = [
    {
      id: 4,
      title: "Career Fair 2025",
      date: "October 15, 2025",
      time: "9:00 AM - 4:00 PM",
      venue: "Exhibition Hall",
      location: "ICBT Campus, Colombo",
      poster:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      description:
        "Connect with top employers and explore career opportunities. Leading companies from various industries will be present to recruit talented students. Bring your CV and be ready for on-spot interviews!",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRegistration = (e, eventId) => {
    e.preventDefault();
    setRegistrationCounts((prev) => ({
      ...prev,
      [eventId]: (prev[eventId] || 0) + 1,
    }));
    setFormData({
      fullName: "",
      studentId: "",
      email: "",
      phone: "",
      programme: "",
      note: "",
    });
    alert(
      "Registration successful! Total registrations: " +
        ((registrationCounts[eventId] || 0) + 1)
    );
  };

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-primary via-primary/90 to-accent-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-background/20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full float-animation"></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full float-animation"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full float-animation" style={{ animationDelay: "1.5s" }}></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <Badge className="mb-6 bg-background/20 text-background border-background/30 hover:bg-background/30 backdrop-blur-sm">
              <Calendar className="w-4 h-4 mr-2" />
              Upcoming Events
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Upcoming Events
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto px-4">
              Don't miss out on exciting events and opportunities. Register now and be part of our amazing community!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {upcomingEvents.length === 0 ? (
          <Card className="modern-card text-center p-12">
            <CardContent>
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <CardTitle className="text-2xl mb-2">No Upcoming Events</CardTitle>
              <CardDescription className="text-lg">
                Check back soon for exciting upcoming events!
              </CardDescription>
            </CardContent>
          </Card>
        ) : (
          upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="mb-8 overflow-hidden modern-card hover:shadow-2xl transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={event.poster}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white shadow-lg">
                      <Calendar className="w-3 h-3 mr-1" />
                      Upcoming
                    </Badge>
                  </div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-3xl md:text-4xl mb-4">{event.title}</CardTitle>
                    <CardDescription className="text-base md:text-lg leading-relaxed text-gray-600">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0">
                    <div className="space-y-3 mb-6 p-4 bg-card rounded-xl border border-border">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/20 rounded-lg">
                          <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Date</p>
                          <Badge variant="outline" className="mt-1 border-primary/30 text-primary">
                            {event.date}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-accent-foreground/20 rounded-lg">
                          <Clock className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Time</p>
                          <Badge variant="outline" className="mt-1 border-accent-foreground/30 text-accent-foreground">
                            {event.time}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-chart-2/20 rounded-lg">
                          <MapPin className="w-5 h-5 text-chart-2" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Venue</p>
                          <Badge variant="outline" className="mt-1 border-chart-2/30 text-chart-2">
                            {event.venue}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg text-foreground mb-3">Registration Form</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          type="text"
                          placeholder="Full Name"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                        <Input
                          type="text"
                          placeholder="Student ID"
                          value={formData.studentId}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              studentId: e.target.value,
                            })
                          }
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <Input
                        type="text"
                        placeholder="Programme"
                        value={formData.programme}
                        onChange={(e) =>
                          setFormData({ ...formData, programme: e.target.value })
                        }
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                      <Textarea
                        placeholder="Additional Notes (Optional)"
                        value={formData.note}
                        onChange={(e) =>
                          setFormData({ ...formData, note: e.target.value })
                        }
                        rows={3}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
                        <Button
                          onClick={(e) => handleRegistration(e, event.id)}
                          className="w-full sm:w-auto bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 px-8 py-6 text-base font-semibold"
                        >
                          Register Now
                        </Button>
                        <div className="text-center sm:text-right">
                          <p className="text-sm text-muted-foreground mb-1">Total Registrations</p>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-3xl text-primary">
                              {registrationCounts[event.id] || 0}
                            </span>
                            <span className="text-muted-foreground">students</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
