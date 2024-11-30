import React from 'react';

interface FooterProps {
  companyName?: string;
  showSocialLinks?: boolean;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  companyName = 'Your Company Name',
  showSocialLinks = false,
  className = '',
}) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className={`py-4 mt-auto ${className}`.trim()}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-600">
            {year} {companyName}
          </p>
          {showSocialLinks && (
            <div className="mt-2 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">GitHub</a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
