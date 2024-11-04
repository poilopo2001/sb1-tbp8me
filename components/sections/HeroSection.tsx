"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Find Expert Craftsmen in Luxembourg
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl">
            Get free quotes from verified professionals for all your home improvement needs.
          </p>
          <div className="mt-10 max-w-xl mx-auto">
            <div className="flex rounded-md shadow-sm">
              <Input type="text" placeholder="What service do you need?" className="rounded-l-md rounded-r-none border-r-0" />
              <Button size="lg" className="rounded-l-none">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}