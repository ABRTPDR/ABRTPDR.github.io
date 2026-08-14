import instagram from '../assets/instagram.svg';
import wordpress from '../assets/wordpress.svg';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-xs text-gray-600">
        
        {/* Title */}
        <a 
          href="https://ecbits.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-700 transition-colors"
        >
          <span>Election Commission, BITS Pilani</span>
        </a>

        {/* Instagram Link */}
        <a 
          href="https://www.instagram.com/ecbitspilani/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-700 transition-colors"
        >
          <img src={instagram} className="w-4 h-4" />
          <span>Follow our Instagram</span>
        </a>

        {/* WordPress Link */}
        <a 
          href="https://bitselections.wordpress.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-700 transition-colors"
        >
          <img src={wordpress} className="w-4 h-4" />
          <span>Old WordPress site</span>
        </a>

      </div>
    </footer>
  );
}