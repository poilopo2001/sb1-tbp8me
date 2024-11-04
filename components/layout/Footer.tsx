import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/placeholder.svg" alt="QuoteEase Logo" width={40} height={40} />
              <span className="font-bold">QuoteEase</span>
            </Link>
            <p className="text-gray-400">Find the best craftsmen for your projects in Luxembourg.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="#craftsmen" className="text-gray-400 hover:text-white">Craftsmen</Link></li>
              <li><Link href="#blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Main St, Luxembourg City</p>
              <p>Email: info@quoteease.com</p>
              <p>Phone: +352 123 456 789</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Your email" className="bg-gray-700 text-white" />
              <Button variant="secondary">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 QuoteEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}