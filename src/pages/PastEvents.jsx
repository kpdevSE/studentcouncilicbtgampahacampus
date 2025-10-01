import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, MapPin, Clock, Star, Award, Eye } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const PastEvents = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const pastEvents = [
    {
      id: 1,
      title: "Christmas Night 2023",
      date: "December 20, 2023",
      time: "6:00 PM - 10:00 PM",
      venue: "Main Hall",
      location: "ICBT Campus, Gampaha",
      shortDesc:
        "A magical evening of music, dance, and fellowship organized by the Student Council.",
      fullDesc:
        "ICBT Gampaha Student Council presented an enchanting Christmas Night filled with performances, carols, and student-led showcases. The event brought together students, staff, and families to celebrate the spirit of the season.",
      images: [
        new URL(
          "../assets/2023 christmas night/new main image.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/2023 christmas night/girls ballon dancing.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/2023 christmas night/ballon dancing'.jpg",
          import.meta.url
        ).href,
      ],
      attendees: 150,
      rating: 4.8,
      category: "Cultural",
      highlights: ["Carols", "Dance", "Photo Booth", "Food Stalls"],
      featured: true,
    },
    {
      id: 2,
      title: "Cricket Match 2023",
      date: "August 15, 2023",
      time: "9:00 AM - 6:00 PM",
      venue: "College Grounds",
      location: "ICBT Campus, Gampaha",
      shortDesc:
        "Friendly inter-batch cricket tournament hosted by the Student Council.",
      fullDesc:
        "The ICBT Gampaha Student Council organized a spirited cricket tournament promoting teamwork and sportsmanship. Batches competed throughout the day with energetic support from the crowd.",
      images: [
        new URL("../assets/2023 cricket match/main image.jpg", import.meta.url)
          .href,
        new URL(
          "../assets/2023 cricket match/batting shot.jpg",
          import.meta.url
        ).href,
        new URL("../assets/2023 cricket match/runners up.jpg", import.meta.url)
          .href,
      ],
      attendees: 120,
      rating: 4.6,
      category: "Sports",
      highlights: ["Trophies", "Team Spirit", "Cheer Squads", "Snacks"],
      featured: false,
    },
    {
      id: 3,
      title: "Christmas Night 2024",
      date: "December 18, 2024",
      time: "6:00 PM - 10:00 PM",
      venue: "Main Hall",
      location: "ICBT Campus, Gampaha",
      shortDesc:
        "An elegant festive night with gift exchanges and dance performances.",
      fullDesc:
        "Presented by the ICBT Gampaha Student Council, Christmas Night 2024 featured lively dance acts, gift-passing games, and community bonding that made lasting memories.",
      images: [
        new URL(
          "../assets/christams night 2024/main image.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/christams night 2024/secondmain image.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/christams night 2024/giftpassing.jpg",
          import.meta.url
        ).href,
      ],
      attendees: 120,
      rating: 4.7,
      category: "Cultural",
      highlights: ["Gift Passing", "Dance", "Decorations", "Community"],
      featured: true,
    },
    {
      id: 4,
      title: "Echo Night 2024",
      date: "June 22, 2024",
      time: "5:00 PM - 9:00 PM",
      venue: "Auditorium",
      location: "ICBT Campus, Gampaha",
      shortDesc: "A vibrant talent showcase featuring bands and dance crews.",
      fullDesc:
        "Echo Night 2024 highlighted the performing arts at ICBT Gampaha, with the Student Council curating a lineup of music and dance that energized the campus.",
      images: [
        new URL("../assets/echo night 2024/main image.jpg", import.meta.url)
          .href,
        new URL("../assets/echo night 2024/dancing boys.jpg", import.meta.url)
          .href,
        new URL("../assets/echo night 2024/dancingboys3.jpg", import.meta.url)
          .href,
      ],
      attendees: 100,
      rating: 4.6,
      category: "Cultural",
      highlights: ["Live Music", "Dance Crews", "Lights & Sound", "Crowd"],
      featured: true,
    },
    {
      id: 5,
      title: "Erabadu Mangalya 2024",
      date: "April 10, 2024",
      time: "9:00 AM - 3:00 PM",
      venue: "Playground",
      location: "Urban Council, Gampaha",
      shortDesc:
        "Traditional Sinhala-Tamil New Year celebrations with games and culture.",
      fullDesc:
        "The Student Council at ICBT Gampaha hosted Erabadu Mangalya with traditional games, music, and cultural activities that brought the community together.",
      images: [
        new URL(
          "../assets/erabadu mangalya 2024/main image.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/erabadu mangalya 2024/announcing.jpg",
          import.meta.url
        ).href,
        new URL("../assets/erabadu mangalya 2024/babare.jpg", import.meta.url)
          .href,
      ],
      attendees: 150,
      rating: 4.9,
      category: "Cultural",
      highlights: [
        "Oil Lamping",
        "Awurudu Kumara",
        "Traditional Games",
        "Prizes",
      ],
      featured: false,
    },
    {
      id: 6,
      title: "Awurudu Utsawaya 2025",
      date: "April 12, 2025",
      time: "9:00 AM - 4:00 PM",
      venue: "Playground",
      location: "Sumedha School, Gampaha",
      shortDesc:
        "Sinhala and Tamil New Year festival with traditional competitions.",
      fullDesc:
        "ICBT Gampaha Student Council presented Awurudu Utsawaya 2025 featuring classic new year games, cultural attire, and joyful celebrations across the campus.",
      images: [
        new URL(
          "../assets/icbt awurudu utsawaya 2025/main image.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/icbt awurudu utsawaya 2025/banis kanawa.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/icbt awurudu utsawaya 2025/kiriuturanawa.jpg",
          import.meta.url
        ).href,
      ],
      attendees: 150,
      rating: 4.8,
      category: "Cultural",
      highlights: [
        "Oil Lamping",
        "Awurudu Kumara",
        "Traditional Games",
        "Prizes",
      ],
      featured: false,
    },
  ];

  // Ensure page starts at top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    navigate(`/event-details/${event.id}`, { state: { event } });
  };

  const sortedEvents = [...pastEvents].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div
        className="relative py-20 text-white overflow-hidden bg-center bg-cover"
        style={{
          backgroundImage: `url(${
            new URL("../assets/awareka mal image.jpg", import.meta.url).href
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full float-animation"></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full float-animation"
          style={{ animationDelay: "3s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Award className="w-4 h-4 mr-2" />
              Past Events Archive
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Past Events</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Relive the amazing moments from our successful events that brought
              our community together
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div>
          <div className="flex items-center mb-8">
            <Calendar className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Events</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedEvents.map((event) => (
              <Card
                key={event.id}
                className="modern-card overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={event.images[0]}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{event.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-base">
                    {event.shortDesc}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.highlights.slice(0, 2).map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => handleEventClick(event)}
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
