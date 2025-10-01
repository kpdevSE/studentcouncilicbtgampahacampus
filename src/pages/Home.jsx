import React, { useState } from "react";
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
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Send,
  Quote,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  ThumbsUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const Home = () => {
  const stats = [
    { label: "Active Members", value: "25+", icon: Users },
    { label: "Events Organized", value: "5+", icon: Calendar },
    { label: "Student Satisfaction", value: "98%", icon: Star },
    { label: "Years of Service", value: "3+", icon: Award },
  ];

  const achievements = [
    {
      title: "Best Student Organization 2023",
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      content:
        "The Student Council has transformed my university experience. The events are amazing and the support is incredible!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "Business Student",
      content:
        "Being part of the Student Council has helped me develop leadership skills I never knew I had. Highly recommended!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      role: "Engineering Student",
      content:
        "The community here is so welcoming. I've made lifelong friends and gained valuable experience.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const features = [
    {
      title: "Real-time Updates",
      description: "Get instant notifications about events and opportunities",
      icon: Zap,
      color: "text-yellow-500",
    },
    {
      title: "Community Support",
      description: "24/7 support from fellow students and council members",
      icon: Heart,
      color: "text-red-500",
    },
    {
      title: "Career Development",
      description: "Access to workshops, networking events, and mentorship",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      title: "Digital Platform",
      description: "Modern digital tools for seamless student experience",
      icon: Globe,
      color: "text-blue-500",
    },
  ];

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-4rem)] pt-16 flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
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
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 leading-relaxed drop-shadow mb-8">
            Join the most dynamic student organization at ICBT. We're not just
            about events – we're about creating lasting impact, fostering
            leadership, and building a community where every student thrives.
          </p>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-6 py-3 rounded-full"
              onClick={() => (window.location.href = "/past-events")}
            >
              <Calendar className="w-4 h-4 mr-2" />
              View Events
            </Button>
            <Button
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-6 py-3 rounded-full"
              onClick={() => (window.location.href = "/present-members")}
            >
              <Users className="w-4 h-4 mr-2" />
              Meet Team
            </Button>
            <Button
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-6 py-3 rounded-full"
              onClick={() => (window.location.href = "/upcoming-events")}
            >
              <Star className="w-4 h-4 mr-2" />
              Upcoming
            </Button>
          </div>
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
                  src="https://icbt.lk/wp-content/uploads/2020/10/gampaha.jpg"
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
          <div className="bg-white rounded-3xl p-12 text-gray-800 shadow-lg border">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
              <p className="text-xl text-gray-600">
                Recognized excellence in student leadership and community impact
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors">
                    <achievement.icon
                      className={`w-10 h-10 ${achievement.color}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Testimonials
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from our amazing community
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="modern-card hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-blue-500 mb-3" />
                  <p className="text-gray-700 italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Features</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Platform
            </h2>
            <p className="text-xl text-gray-600">
              Modern tools and features designed for student success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="modern-card hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className={`w-8 h-8 text-white`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Ready to Get Involved?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our community and be part of something amazing. Explore our
              platform and discover all the opportunities waiting for you.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
                onClick={() => (window.location.href = "/past-events")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Explore Events
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
                onClick={() => (window.location.href = "/present-members")}
              >
                <Users className="w-5 h-5 mr-2" />
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl opacity-90">
              Get the latest news, events, and opportunities delivered to your
              inbox
            </p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/70 focus:bg-white/20"
                required
              />
              <Button
                type="submit"
                className="bg-white text-blue-600 hover:bg-white/90 px-6"
              >
                {isSubscribed ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
            {isSubscribed && (
              <p className="mt-4 text-green-300 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Successfully subscribed!
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Explore Platform Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800">
              Explore
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Discover More
            </h2>
            <p className="text-xl text-gray-600">
              Explore our platform and discover all the amazing features
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="modern-card hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Past Events
                </h3>
                <p className="text-gray-600 mb-4">
                  Browse through our successful past events and see what we've
                  accomplished
                </p>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => (window.location.href = "/past-events")}
                >
                  View Events
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="modern-card hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Current Members
                </h3>
                <p className="text-gray-600 mb-4">
                  Meet our current student council members and learn about their
                  roles
                </p>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => (window.location.href = "/present-members")}
                >
                  Meet Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="modern-card hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Past Members
                </h3>
                <p className="text-gray-600 mb-4">
                  See our alumni members who have contributed to our success
                </p>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => (window.location.href = "/past-members")}
                >
                  View Alumni
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="modern-card hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Upcoming Events
                </h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with our upcoming events and don't miss out
                </p>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  onClick={() => (window.location.href = "/upcoming-events")}
                >
                  View Upcoming
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
