import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl text-white flex items-center justify-center shadow-md group-hover:scale-105 transition">
              <span className="font-bold text-lg">IC</span>
            </div>
            <span className="font-bold text-lg md:text-xl text-gray-900">
              ICBT Student Council
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Button
              asChild
              variant={isActive("/") ? "secondary" : "ghost"}
              className={`px-4 ${
                isActive("/")
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Link to="/">Home</Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:bg-gray-100 flex items-center space-x-1"
                >
                  <span>Events</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/past-events">Past Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/upcoming-events">Upcoming Events</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:bg-gray-100 flex items-center space-x-1"
                >
                  <span>Council Members</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/present-members">Present Members</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/past-members">Past Members</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-800"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="px-2 pt-6 pb-2 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl text-white flex items-center justify-center">
                    <span className="font-semibold">IC</span>
                  </div>
                  <span className="font-semibold">ICBT Student Council</span>
                </div>
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                <Button asChild variant="ghost" className="justify-start">
                  <Link to="/">Home</Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start">
                  <Link to="/past-events">Past Events</Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start">
                  <Link to="/upcoming-events">Upcoming Events</Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start">
                  <Link to="/present-members">Present Members</Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start">
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
