import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";

const PastMembers = () => {
  const pastMembers = [
    {
      name: "Ravindu Dissanayake",
      position: "President",
      programme: "BSc Computer Science",
      year: "2023-2024",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    },
    {
      name: "Imesha Gunawardena",
      position: "Vice President",
      programme: "BSc Business",
      year: "2023-2024",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    },
    {
      name: "Chathura Bandara",
      position: "Secretary",
      programme: "BSc Engineering",
      year: "2023-2024",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    },
    {
      name: "Sachini Alwis",
      position: "Treasurer",
      programme: "BSc Finance",
      year: "2022-2023",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Past Council Members
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastMembers.map((member, idx) => (
            <Card
              key={idx}
              className="overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      {member.position}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-2">
                  {member.programme}
                </CardDescription>
                <Badge variant="outline" className="text-xs">
                  {member.year}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastMembers;
