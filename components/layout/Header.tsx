"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg" alt="QuoteEase Logo" width={40} height={40} />
            <span className="hidden font-bold sm:inline-block">QuoteEase</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#craftsmen">Craftsmen</Link>
            <Link href="#blog">Blog</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="hidden md:flex">Get a Free Quote</Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}