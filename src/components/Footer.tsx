
import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://github.com/yourusername', '_blank')}
              className="hover:bg-accent"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('mailto:your.email@example.com', '_blank')}
              className="hover:bg-accent"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}
              className="hover:bg-accent"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Built with React, TypeScript, and Tailwind CSS</p>
            <p>Designed & Developed by Your Name</p>
            <p className="text-xs">© 2024 PhraseLock. A portfolio project demonstrating secure password generation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
