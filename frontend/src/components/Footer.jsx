import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Fixed Made with Emergent badge */}
      <a
        href="https://app.emergent.sh"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-full px-4 py-2 text-gray-400 hover:text-white hover:border-gray-600 transition-all shadow-lg"
      >
        <ExternalLink className="w-4 h-4" />
        <span className="text-sm">Made with Emergent</span>
      </a>
    </>
  );
};

export default Footer;
