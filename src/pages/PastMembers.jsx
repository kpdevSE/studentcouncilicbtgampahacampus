import React, { useState } from "react";
import {
  Users,
  Award,
  Star,
  Mail,
  Linkedin,
  Twitter,
  Calendar,
  GraduationCap,
  Phone,
  Clock,
  Trophy,
  Heart,
  Sparkles,
  Filter,
  Search,
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
import { Input } from "../components/ui/input";

const PastMembers = () => {
  const pastMembers = [
    {
      name: "Kanishka Pasindu",
      position: "President",
      programme: "BSc Computer Science",
      year: "2023-2024",
      phone: "0715644565",
      email: "kanishka.pasindu@icbt.edu",
      linkedin: "kanishka-pasindu",
      twitter: "kanishka_p",
      achievements: [
        "Outstanding Leadership Award 2023",
        "Student Council Excellence",
      ],
      bio: "Led the student council with dedication and vision, implementing numerous successful initiatives and events.",
      joinDate: "2022",
      category: "Executive",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    },
    {
      name: "Dasun Madhava",
      position: "Vice President",
      programme: "BSc Business",
      year: "2023-2024",
      email: "dasun.madhava@icbt.edu",
      linkedin: "dasun-madhava",
      twitter: "dasun_m",
      achievements: ["Strategic Planning Excellence", "Community Impact Award"],
      bio: "Supported the president in strategic planning and community engagement initiatives.",
      joinDate: "2022",
      category: "Executive",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    },
    {
      name: "Ranuli Shalinya",
      position: "Secretary",
      programme: "BSc Engineering",
      year: "2023-2024",
      email: "ranuli.shalinya@icbt.edu",
      linkedin: "ranuli-shalinya",
      twitter: "ranuli_s",
      achievements: ["Organizational Excellence", "Communication Award"],
      bio: "Ensured smooth operations and effective communication within the council and with the student body.",
      joinDate: "2022",
      category: "Executive",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    },
    {
      name: "Taslima",
      position: "Vice Secretary",
      programme: "BSc Finance",
      year: "2023-2024",
      email: "taslima@icbt.edu",
      linkedin: "taslima",
      twitter: "taslima_f",
      achievements: ["Administrative Excellence", "Support Leadership Award"],
      bio: "Provided crucial administrative support and helped maintain council records and documentation.",
      joinDate: "2022",
      category: "Executive",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    },
    {
      name: "Kavindu Weerasingha",
      position: "Head of Operation",
      programme: "BSc Computer Science",
      year: "2023-2024",
      email: "kavindu.weerasingha@icbt.edu",
      linkedin: "kavindu-weerasingha",
      twitter: "kavindu_w",
      achievements: ["Operational Excellence", "Event Management Award"],
      bio: "Oversaw day-to-day operations and ensured smooth execution of council activities and events.",
      joinDate: "2022",
      category: "Department Head",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
      name: "Ayodya Pasandul",
      position: "Head of Operation",
      programme: "BSc Business",
      year: "2023-2024",
      email: "ayodya.pasandul@icbt.edu",
      linkedin: "ayodya-pasandul",
      twitter: "ayodya_p",
      achievements: ["Team Leadership Award", "Process Improvement Excellence"],
      bio: "Led operational teams and implemented efficient processes for council activities.",
      joinDate: "2022",
      category: "Department Head",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      name: "Maleesha Denuwan",
      position: "Head of Operation",
      programme: "BSc Engineering",
      year: "2023-2024",
      email: "maleesha.denuwan@icbt.edu",
      linkedin: "maleesha-denuwan",
      twitter: "maleesha_d",
      achievements: ["Innovation in Operations", "Student Engagement Award"],
      bio: "Brought innovative approaches to operational management and student engagement strategies.",
      joinDate: "2022",
      category: "Department Head",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
    {
      name: "Pansilu Rathnayaka",
      position: "Head of Finance",
      programme: "BSc Finance",
      year: "2023-2024",
      email: "pansilu.rathnayaka@icbt.edu",
      linkedin: "pansilu-rathnayaka",
      twitter: "pansilu_r",
      achievements: [
        "Financial Management Excellence",
        "Budget Optimization Award",
      ],
      bio: "Managed council finances with transparency and efficiency, ensuring optimal resource allocation.",
      joinDate: "2022",
      category: "Department Head",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
    },
    {
      name: "Kavindu Nimesh",
      position: "Head of IT",
      programme: "BSc Computer Science",
      year: "2023-2024",
      email: "kavindu.nimesh@icbt.edu",
      linkedin: "kavindu-nimesh",
      twitter: "kavindu_n",
      achievements: ["Digital Innovation Award", "Technology Excellence"],
      bio: "Led digital transformation initiatives and maintained council's technological infrastructure.",
      joinDate: "2022",
      category: "Department Head",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    },
    {
      name: "Kavindu Malsha",
      position: "Head of IT",
      programme: "BSc Computer Science",
      year: "2023-2024",
      email: "kavindu.malsha@icbt.edu",
      linkedin: "kavindu-malsha",
      twitter: "kavindu_m",
      achievements: [
        "Technical Leadership Award",
        "System Integration Excellence",
      ],
      bio: "Collaborated on technical projects and supported digital initiatives for the council.",
      joinDate: "2022",
      category: "Department Head",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      name: "Pahan Dulaksha",
      position: "Head of Decoration",
      programme: "BSc Business",
      year: "2023-2024",
      email: "pahan.dulaksha@icbt.edu",
      linkedin: "pahan-dulaksha",
      twitter: "pahan_d",
      achievements: ["Creative Excellence Award", "Event Design Innovation"],
      bio: "Brought creative vision to council events and decorations, enhancing the visual appeal of activities.",
      joinDate: "2022",
      category: "Department Head",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
      name: "Upeka Shyamali",
      position: "Head of Decoration",
      programme: "BSc Finance",
      year: "2023-2024",
      email: "upeka.shyamali@icbt.edu",
      linkedin: "upeka-shyamali",
      twitter: "upeka_s",
      achievements: ["Artistic Leadership Award", "Visual Design Excellence"],
      bio: "Led decoration teams and created memorable visual experiences for council events.",
      joinDate: "2022",
      category: "Department Head",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    },
    {
      name: "Sanuka Wirunima",
      position: "Head of Decoration",
      programme: "BSc Engineering",
      year: "2023-2024",
      email: "sanuka.wirunima@icbt.edu",
      linkedin: "sanuka-wirunima",
      twitter: "sanuka_w",
      achievements: ["Creative Team Leadership", "Event Aesthetics Award"],
      bio: "Coordinated decoration efforts and ensured high-quality visual presentation at all council events.",
      joinDate: "2022",
      category: "Department Head",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", "Executive", "Department Head"];

  const filteredMembers = pastMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.programme.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || member.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const executiveMembers = filteredMembers.filter(
    (member) => member.category === "Executive"
  );
  const departmentHeads = filteredMembers.filter(
    (member) => member.category === "Department Head"
  );

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div
        className="relative py-20 text-white overflow-hidden bg-center bg-cover"
        style={{
          backgroundImage: `url(${
            new URL(
              "../assets/backgrounds images/main imaage new.jpg",
              import.meta.url
            ).href
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full float-animation"></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full float-animation"
          style={{ animationDelay: "3s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Trophy className="w-4 h-4 mr-2" />
              Alumni Leadership
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              Past Council Members
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto px-4">
              Honoring the dedicated leaders who shaped our student community
              and left a lasting legacy
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col gap-4">
            <div className="w-full max-w-md mx-auto md:mx-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filterCategory === category ? "default" : "outline"}
                  onClick={() => setFilterCategory(category)}
                  className="whitespace-nowrap text-sm px-3 py-2"
                >
                  <Filter className="w-3 h-3 mr-1" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          <Card className="modern-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {pastMembers.length}
              </div>
              <div className="text-gray-600">Total Alumni</div>
            </CardContent>
          </Card>
          <Card className="modern-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {executiveMembers.length}
              </div>
              <div className="text-gray-600">Executive Team</div>
            </CardContent>
          </Card>
          <Card className="modern-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {departmentHeads.length}
              </div>
              <div className="text-gray-600">Department Heads</div>
            </CardContent>
          </Card>
          <Card className="modern-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                2023-2024
              </div>
              <div className="text-gray-600">Academic Year</div>
            </CardContent>
          </Card>
        </div>

        {/* Executive Team */}
        {executiveMembers.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">
                Executive Team
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {executiveMembers.map((member, idx) => (
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
                      {member.phone && (
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Phone className="w-4 h-4" />
                          <span>{member.phone}</span>
                        </div>
                      )}
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Department Heads */}
        {departmentHeads.length > 0 && (
          <div>
            <div className="flex items-center mb-8">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">
                Department Heads
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {departmentHeads.map((member, idx) => (
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
        )}

        {/* Legacy Section */}
        <div className="mt-20 text-center">
          <Card className="modern-card bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <CardContent className="p-12">
              <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h3 className="text-3xl font-bold mb-4">Their Legacy Lives On</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                These dedicated leaders have left an indelible mark on our
                student community. Their contributions continue to inspire and
                guide the next generation of student leaders.
              </p>
              <div className="flex justify-center mt-8">
                <Badge className="bg-white/20 text-white border-white/30 px-6 py-2">
                  <Heart className="w-4 h-4 mr-2" />
                  Forever Grateful
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PastMembers;
