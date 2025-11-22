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
import lakshani from "../assets/review huys/laskhani new.jpg";

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
      name: "Amasha Lakshani",
      role: "Computer Science Student",
      content:
        "As a senior student at ICBT, I’ve witnessed the remarkable impact of the Student Council on our campus community. It has continuously inspired leadership, collaboration, and innovation among students. The Council not only organizes meaningful events but also empowers us to develop essential skills and contribute positively to college life. Being part of this journey has truly enriched my ICBT experience.",
      rating: 5,
      avatar: lakshani,
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
      <div className="relative min-h-[calc(100vh-4rem)] pt-16 flex items-center justify-center text-foreground overflow-hidden bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-foreground/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full float-animation blur-xl"></div>
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-accent-foreground/10 rounded-full float-animation blur-xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/20 rounded-full float-animation blur-xl"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="text-center px-4 relative z-10 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 backdrop-blur-sm">
            <Star className="w-4 h-4 mr-2" />
            Award Winning Organization
          </Badge>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 gradient-text drop-shadow-lg">
            ICBT Student Council
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-foreground/90 drop-shadow">
            Empowering Students, Building Community
          </p>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed drop-shadow mb-8 px-4">
            Join the most dynamic student organization at ICBT. We're not just
            about events – we're about creating lasting impact, fostering
            leadership, and building a community where every student thrives.
          </p>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 px-4">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary/30 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base shadow-lg shadow-primary/30"
              onClick={() => (window.location.href = "/past-events")}
            >
              <Calendar className="w-4 h-4 mr-2" />
              View Events
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary/30 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base shadow-lg shadow-primary/30"
              onClick={() => (window.location.href = "/present-members")}
            >
              <Users className="w-4 h-4 mr-2" />
              Meet Team
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary/30 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base shadow-lg shadow-primary/30"
              onClick={() => (window.location.href = "/upcoming-events")}
            >
              <Star className="w-4 h-4 mr-2" />
              Upcoming
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              Making a difference, one student at a time
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="modern-card text-center p-6 hover:scale-105 transition-transform"
              >
                <CardContent className="p-0">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-20">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">About Us</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                What is the Student Council?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                The ICBT Student Council is the official representative body of
                all students at the International College of Business and
                Technology. We serve as the bridge between students and
                administration, ensuring every voice is heard and every concern
                is addressed.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our mission is to enhance student life through organizing
                engaging events, providing comprehensive support services, and
                advocating for student interests. We work tirelessly to create a
                vibrant, inclusive campus community where every student can
                thrive academically, socially, and personally.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="px-4 py-2 bg-secondary text-secondary-foreground">
                  <Shield className="w-4 h-4 mr-2" />
                  Student Advocacy
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 bg-secondary text-secondary-foreground">
                  <Globe className="w-4 h-4 mr-2" />
                  Global Community
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 bg-secondary text-secondary-foreground">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
            <Card className="modern-card hover:scale-105 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-primary-foreground" />
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
                <div className="w-16 h-16 bg-gradient-to-br from-accent-foreground/80 to-accent-foreground rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-foreground" />
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
                <div className="w-16 h-16 bg-gradient-to-br from-chart-2 to-chart-2/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-foreground" />
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
          <div className="bg-card rounded-3xl p-12 text-foreground shadow-lg border border-border">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
              <p className="text-xl text-muted-foreground">
                Recognized excellence in student leadership and community impact
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/80 transition-colors">
                    <achievement.icon
                      className={`w-10 h-10 ${achievement.color}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Testimonials
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from our amazing community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
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
                  <Quote className="w-6 h-6 text-primary mb-3" />
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-chart-2/20 text-chart-2 border-chart-2/30">Features</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Our Platform
            </h2>
            <p className="text-xl text-muted-foreground">
              Modern tools and features designed for student success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="modern-card hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-foreground rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className={`w-8 h-8 text-primary-foreground`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Get Involved?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community and be part of something amazing. Explore our
              platform and discover all the opportunities waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-lg shadow-primary/30"
                onClick={() => (window.location.href = "/past-events")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Explore Events
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
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
      <div className="py-20 bg-gradient-to-r from-primary via-primary/90 to-accent-foreground text-primary-foreground">
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
                className="flex-1 bg-background/20 border-primary-foreground/20 text-foreground placeholder-primary-foreground/70 focus:bg-background/30"
                required
              />
              <Button
                type="submit"
                className="bg-background text-primary hover:bg-background/90 px-6"
              >
                {isSubscribed ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
            {isSubscribed && (
              <p className="mt-4 text-chart-2 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Successfully subscribed!
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Explore Platform Section */}
      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Explore
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Discover More
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our platform and discover all the amazing features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="modern-card hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Past Events
                </h3>
                <p className="text-muted-foreground mb-4">
                  Browse through our successful past events and see what we've
                  accomplished
                </p>
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => (window.location.href = "/past-events")}
                >
                  View Events
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="modern-card hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-chart-2 to-chart-2/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Current Members
                </h3>
                <p className="text-muted-foreground mb-4">
                  Meet our current student council members and learn about their
                  roles
                </p>
                <Button
                  className="w-full bg-chart-2 hover:bg-chart-2/90 text-foreground"
                  onClick={() => (window.location.href = "/present-members")}
                >
                  Meet Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="modern-card hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-foreground/80 to-accent-foreground rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Past Members
                </h3>
                <p className="text-muted-foreground mb-4">
                  See our alumni members who have contributed to our success
                </p>
                <Button
                  className="w-full bg-accent-foreground/80 hover:bg-accent-foreground text-foreground"
                  onClick={() => (window.location.href = "/past-members")}
                >
                  View Alumni
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="modern-card hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-chart-4 to-chart-4/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Upcoming Events
                </h3>
                <p className="text-muted-foreground mb-4">
                  Stay updated with our upcoming events and don't miss out
                </p>
                <Button
                  className="w-full bg-chart-4 hover:bg-chart-4/90 text-foreground"
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
