import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const socialLinks = [
    {
      icon: Twitter,
      href: 'https://twitter.com/intellisync',
      label: 'Twitter',
    },
    {
      icon: Github,
      href: 'https://github.com/intellisync',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/company/intellisync',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:contact@intellisync.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                </Button>
              );
            })}
          </div>
          
          <p className="text-sm text-muted-foreground">
            Powered by{' '}
            <a
              href="https://intellisync.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Intellisync Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}