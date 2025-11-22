import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import logo from "../assets/LOGOS/ICBT LOGO.jpg";

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/50 tech-border"
          : "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link
            to="/"
            className="flex items-center space-x-3 group relative z-10"
          >
            <div className="relative">
              <img
                src={logo}
                alt="ICBT Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 ring-2 ring-primary/20 group-hover:ring-primary/40"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/0 via-primary/20 to-accent-foreground/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base md:text-xl text-foreground group-hover:text-primary transition-colors font-mono tracking-tight">
                ICBT Student Council
              </span>
              <span className="text-xs text-muted-foreground hidden md:block font-mono">
                &lt;Empowering Students /&gt;
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              asChild
              variant="ghost"
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 font-mono ${
                isActive("/")
                  ? "bg-primary text-primary-foreground shadow-lg tech-glow hover:bg-primary/90"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <Link to="/">Home</Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 font-mono ${
                    location.pathname.includes("event")
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  } flex items-center space-x-1.5`}
                >
                  <span>Events</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 min-w-[200px] bg-card/95 backdrop-blur-xl border border-border/50 shadow-xl rounded-xl p-2 tech-accent">
                <DropdownMenuItem asChild>
                  <Link
                    to="/past-events"
                    className={`w-full px-4 py-2.5 rounded-lg transition-all duration-200 font-mono text-sm ${
                      isActive("/past-events")
                        ? "bg-accent text-accent-foreground font-medium"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    Past Events
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/upcoming-events"
                    className={`w-full px-4 py-2.5 rounded-lg transition-all duration-200 font-mono text-sm ${
                      isActive("/upcoming-events")
                        ? "bg-accent text-accent-foreground font-medium"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    Upcoming Events
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 font-mono ${
                    location.pathname.includes("member")
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  } flex items-center space-x-1.5`}
                >
                  <span>Members</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 min-w-[200px] bg-card/95 backdrop-blur-xl border border-border/50 shadow-xl rounded-xl p-2 tech-accent">
                <DropdownMenuItem asChild>
                  <Link
                    to="/present-members"
                    className={`w-full px-4 py-2.5 rounded-lg transition-all duration-200 font-mono text-sm ${
                      isActive("/present-members")
                        ? "bg-accent text-accent-foreground font-medium"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    Present Members
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/past-members"
                    className={`w-full px-4 py-2.5 rounded-lg transition-all duration-200 font-mono text-sm ${
                      isActive("/past-members")
                        ? "bg-accent text-accent-foreground font-medium"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    Past Members
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-card/95 backdrop-blur-xl border-l border-border/50 tech-accent"
            >
              <div className="px-2 pt-6 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt="ICBT Logo"
                    className="w-10 h-10 rounded-xl object-cover shadow-md ring-2 ring-primary/20"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-foreground font-mono">
                      ICBT Student Council
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      &lt;Empowering Students /&gt;
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-1 mt-6">
                <Button
                  asChild
                  variant="ghost"
                  className={`justify-start px-4 py-3 rounded-lg transition-all font-mono ${
                    isActive("/")
                      ? "bg-accent text-accent-foreground font-medium"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/">Home</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={`justify-start px-4 py-3 rounded-lg transition-all font-mono ${
                    isActive("/past-events")
                      ? "bg-accent text-accent-foreground font-medium"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/past-events">Past Events</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={`justify-start px-4 py-3 rounded-lg transition-all font-mono ${
                    isActive("/upcoming-events")
                      ? "bg-accent text-accent-foreground font-medium"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/upcoming-events">Upcoming Events</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={`justify-start px-4 py-3 rounded-lg transition-all font-mono ${
                    isActive("/present-members")
                      ? "bg-accent text-accent-foreground font-medium"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/present-members">Present Members</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={`justify-start px-4 py-3 rounded-lg transition-all font-mono ${
                    isActive("/past-members")
                      ? "bg-accent text-accent-foreground font-medium"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/past-members">Past Members</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
