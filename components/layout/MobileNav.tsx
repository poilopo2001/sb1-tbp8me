"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from 'lucide-react';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8">
          <Link href="/" className="text-lg font-medium">Home</Link>
          <Link href="#services" className="text-lg font-medium">Services</Link>
          <Link href="#craftsmen" className="text-lg font-medium">Craftsmen</Link>
          <Link href="#blog" className="text-lg font-medium">Blog</Link>
          <Link href="#contact" className="text-lg font-medium">Contact</Link>
          <Button className="mt-4">Get a Free Quote</Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}