import React from "react";
import {
  Users,
  Calendar,
  BookOpen,
  Award,
  Target,
  Heart,
  Star,
  TrendingUp,
  Globe,
  Shield,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const Home = () => {
  const stats = [
    { label: "Active Members", value: "25+", icon: Users },
    { label: "Events Organized", value: "5+", icon: Calendar },
    { label: "Student Satisfaction", value: "98%", icon: Star },
    { label: "Years of Service", value: "3+", icon: Award },
  ];

  const achievements = [
    {
      title: "Best Student Organization 2024",
      description:
        "Awarded by the Ministry of Education for outstanding student leadership",
      icon: Award,
      color: "text-yellow-500",
    },
    {
      title: "Community Impact Award",
      description:
        "Recognized for our community service initiatives and social impact",
      icon: Heart,
      color: "text-red-500",
    },
    {
      title: "Innovation Excellence",
      description:
        "Leading digital transformation in student engagement and services",
      icon: TrendingUp,
      color: "text-green-500",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative min-h-[calc(100vh-4rem)] pt-16 flex items-center justify-center text-white overflow-hidden bg-center bg-cover"
        style={{
          backgroundImage: `url(${
            new URL(
              "../assets/backgrounds images/main imaage new.jpg",
              import.meta.url
            ).href
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full float-animation"></div>
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full float-animation"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="text-center px-4 relative z-10 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Star className="w-4 h-4 mr-2" />
            Award Winning Organization
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text drop-shadow-lg">
            ICBT Student Council
          </h1>
          <p className="text-2xl md:text-3xl mb-8 opacity-95 drop-shadow">
            Empowering Students, Building Community
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 leading-relaxed drop-shadow">
            Join the most dynamic student organization at ICBT. We're not just
            about events – we're about creating lasting impact, fostering
            leadership, and building a community where every student thrives.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Making a difference, one student at a time
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="modern-card text-center p-6 hover:scale-105 transition-transform"
              >
                <CardContent className="p-0">
                  <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">About Us</Badge>
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                What is the Student Council?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                The ICBT Student Council is the official representative body of
                all students at the International College of Business and
                Technology. We serve as the bridge between students and
                administration, ensuring every voice is heard and every concern
                is addressed.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our mission is to enhance student life through organizing
                engaging events, providing comprehensive support services, and
                advocating for student interests. We work tirelessly to create a
                vibrant, inclusive campus community where every student can
                thrive academically, socially, and personally.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  Student Advocacy
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Globe className="w-4 h-4 mr-2" />
                  Global Community
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Target className="w-4 h-4 mr-2" />
                  Excellence Focus
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800"
                  alt="Students"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full pulse-glow"></div>
            </div>
          </div>

          {/* Core Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="modern-card hover:scale-105 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Student Advocacy</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg leading-relaxed">
                  We represent student interests and work closely with
                  administration to improve campus life, academic policies, and
                  student welfare programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="modern-card hover:scale-105 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Events & Activities</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg leading-relaxed">
                  From cultural festivals to career fairs, we organize diverse
                  events that enrich student life and create memorable
                  experiences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="modern-card hover:scale-105 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Student Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg leading-relaxed">
                  Providing comprehensive resources, guidance, and support to
                  help students succeed academically and develop personally.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
              <p className="text-xl opacity-80">
                Recognized excellence in student leadership and community impact
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                    <achievement.icon
                      className={`w-10 h-10 ${achievement.color}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
