import React, { useState } from "react";
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
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Upcoming Events
        </h1>

        {upcomingEvents.map((event) => (
          <Card key={event.id} className="mb-8 overflow-hidden modern-card">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.poster}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <CardHeader>
                  <CardTitle className="text-3xl">{event.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <Badge variant="outline">{event.date}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <Badge variant="outline">{event.time}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <Badge variant="outline">{event.venue}</Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
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
                      />
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                    <Input
                      type="text"
                      placeholder="Programme"
                      value={formData.programme}
                      onChange={(e) =>
                        setFormData({ ...formData, programme: e.target.value })
                      }
                    />
                    <Textarea
                      placeholder="Additional Notes (Optional)"
                      value={formData.note}
                      onChange={(e) =>
                        setFormData({ ...formData, note: e.target.value })
                      }
                      rows={3}
                    />
                    <div className="flex items-center justify-between">
                      <Button
                        onClick={(e) => handleRegistration(e, event.id)}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                      >
                        Register Now
                      </Button>
                      <div className="text-muted-foreground">
                        <span className="font-bold text-2xl text-blue-600">
                          {registrationCounts[event.id] || 0}
                        </span>{" "}
                        registrations
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
