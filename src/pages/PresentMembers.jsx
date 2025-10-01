import React from "react";
import {
  Users,
  Award,
  Star,
  Mail,
  Linkedin,
  Twitter,
  Calendar,
  GraduationCap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const PresentMembers = () => {
  const presentMembers = [
    {
      name: "Pansilu Rathanayake",
      position: "President",
      programme: "BSc Computer Science",
      year: "Final Year",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      email: "pansilu.rathanayake@icbt.edu",
      linkedin: "pansilu-rathanayake",
      twitter: "pansilu_r",
      achievements: [
        "Student Leader of the Year 2024",
        "Outstanding Leadership Award",
      ],
      bio: "Leading the student council with vision and dedication, implementing innovative initiatives for student welfare and campus development.",
      joinDate: "2023",
      category: "Executive",
    },
    {
      name: "Anjith Kithmal",
      position: "Vice President",
      programme: "BSc Business Management",
      year: "Final Year",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      email: "anjith.kithmal@icbt.edu",
      linkedin: "anjith-kithmal",
      twitter: "anjith_k",
      achievements: ["Strategic Planning Excellence", "Community Impact Award"],
      bio: "Supporting the president in strategic planning and community engagement, driving positive change across campus initiatives.",
      joinDate: "2023",
      category: "Executive",
    },
    {
      name: "Chathumi Kriyesha",
      position: "Secretary",
      programme: "BSc IT",
      year: "3rd Year",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      email: "chathumi.kriyesha@icbt.edu",
      linkedin: "chathumi-kriyesha",
      twitter: "chathumi_k",
      achievements: ["Organizational Excellence", "Communication Award"],
      bio: "Ensuring smooth operations and effective communication within the council and with the student body.",
      joinDate: "2023",
      category: "Executive",
    },
    {
      name: "Sandini Gimhani",
      position: "Vice Secretary",
      programme: "BSc Accounting",
      year: "3rd Year",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      email: "sandini.gimhani@icbt.edu",
      linkedin: "sandini-gimhani",
      twitter: "sandini_g",
      achievements: ["Administrative Excellence", "Support Leadership Award"],
      bio: "Providing crucial administrative support and helping maintain council records and documentation.",
      joinDate: "2023",
      category: "Executive",
    },
    {
      name: "Ayodya Bandara",
      position: "Head of Operation",
      programme: "BSc Marketing",
      year: "3rd Year",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      email: "ayodya.bandara@icbt.edu",
      linkedin: "ayodya-bandara",
      twitter: "ayodya_b",
      achievements: ["Operational Excellence", "Event Management Award"],
      bio: "Overseeing day-to-day operations and ensuring smooth execution of council activities and events.",
      joinDate: "2023",
      category: "Department Head",
    },
    {
      name: "Ayodya",
      position: "Assistant Head of Operation",
      programme: "BSc Business",
      year: "2nd Year",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      email: "ayodya@icbt.edu",
      linkedin: "ayodya",
      twitter: "ayodya_a",
      achievements: ["Team Leadership Award", "Process Improvement Excellence"],
      bio: "Supporting operational teams and implementing efficient processes for council activities.",
      joinDate: "2023",
      category: "Department Head",
    },
    {
      name: "Rasindu Randheera",
      position: "Head of Finance",
      programme: "BSc Finance",
      year: "3rd Year",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
      email: "rasindu.randheera@icbt.edu",
      linkedin: "rasindu-randheera",
      twitter: "rasindu_r",
      achievements: [
        "Financial Management Excellence",
        "Budget Optimization Award",
      ],
      bio: "Managing council finances with transparency and efficiency, ensuring optimal resource allocation.",
      joinDate: "2023",
      category: "Department Head",
    },
    {
      name: "Chanuka Weerasinghe",
      position: "Assistant Head of Finance",
      programme: "BSc Accounting",
      year: "2nd Year",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      email: "chanuka.weerasinghe@icbt.edu",
      linkedin: "chanuka-weerasinghe",
      twitter: "chanuka_w",
      achievements: [
        "Financial Analysis Excellence",
        "Support Leadership Award",
      ],
      bio: "Supporting financial management and ensuring accurate record-keeping for council operations.",
      joinDate: "2023",
      category: "Department Head",
    },
    {
      name: "Kavindu Nimesh",
      position: "Head of IT",
      programme: "BSc Computer Science",
      year: "3rd Year",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      email: "kavindu.nimesh@icbt.edu",
      linkedin: "kavindu-nimesh",
      twitter: "kavindu_n",
      achievements: ["Digital Innovation Award", "Technology Excellence"],
      bio: "Leading digital transformation initiatives and maintaining council's technological infrastructure.",
      joinDate: "2023",
      category: "Department Head",
    },
    {
      name: "Lahiru Lakshan",
      position: "Assistant Head of IT",
      programme: "BSc Computer Science",
      year: "2nd Year",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      email: "lahiru.lakshan@icbt.edu",
      linkedin: "lahiru-lakshan",
      twitter: "lahiru_l",
      achievements: [
        "Technical Leadership Award",
        "System Integration Excellence",
      ],
      bio: "Supporting technical projects and digital initiatives for the council.",
      joinDate: "2023",
      category: "Department Head",
    },
    {
      name: "Janith Jeewantha",
      position: "Head of Decoration",
      programme: "BSc Business",
      year: "3rd Year",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      email: "janith.jeewantha@icbt.edu",
      linkedin: "janith-jeewantha",
      twitter: "janith_j",
      achievements: ["Creative Excellence Award", "Event Design Innovation"],
      bio: "Bringing creative vision to council events and decorations, enhancing the visual appeal of activities.",
      joinDate: "2023",
      category: "Department Head",
    },
    {
      name: "Dinil Seniru",
      position: "Assistant Head of Decoration",
      programme: "BSc Finance",
      year: "2nd Year",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      email: "dinil.seniru@icbt.edu",
      linkedin: "dinil-seniru",
      twitter: "dinil_s",
      achievements: ["Artistic Leadership Award", "Visual Design Excellence"],
      bio: "Supporting decoration teams and creating memorable visual experiences for council events.",
      joinDate: "2023",
      category: "Department Head",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full float-animation"></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full float-animation"
          style={{ animationDelay: "3s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Users className="w-4 h-4 mr-2" />
              Leadership Team
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Present Council Members
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Meet the dedicated leaders who are shaping the future of our
              student community
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Executive Team */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Executive Team</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {presentMembers
              .filter((member) => member.category === "Executive")
              .map((member, idx) => (
                <Card
                  key={idx}
                  className="modern-card overflow-hidden hover:scale-105 transition-all duration-300 group"
                >
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500 text-white">
                        <Award className="w-3 h-3 mr-1" />
                        Executive
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90">
                        {member.year}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {member.name}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {member.position}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-base">
                      {member.bio}
                    </CardDescription>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <GraduationCap className="w-4 h-4" />
                        <span>{member.programme}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {member.joinDate}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.achievements
                          .slice(0, 2)
                          .map((achievement, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {achievement}
                            </Badge>
                          ))}
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Mail className="w-4 h-4 mr-1" />
                          Contact
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Linkedin className="w-4 h-4 mr-1" />
                          Connect
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Department Heads Team */}
        <div>
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">
              Department Heads
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {presentMembers
              .filter((member) => member.category === "Department Head")
              .map((member, idx) => (
                <Card
                  key={idx}
                  className="modern-card overflow-hidden hover:scale-105 transition-all duration-300 group"
                >
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90">
                        {member.year}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {member.name}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {member.position}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-base">
                      {member.bio}
                    </CardDescription>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <GraduationCap className="w-4 h-4" />
                        <span>{member.programme}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {member.joinDate}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.achievements
                          .slice(0, 2)
                          .map((achievement, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {achievement}
                            </Badge>
                          ))}
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Mail className="w-4 h-4 mr-1" />
                          Contact
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Linkedin className="w-4 h-4 mr-1" />
                          Connect
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentMembers;
