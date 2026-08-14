import highlightBlur from '../assets/highlightBlur.svg';

export default function Candidates() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Title & Subtitle */}
      <div className="z-0 relative text-center mb-12 flex flex-col items-center justify-center">
        
        <img 
          src={highlightBlur} 
          alt="" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-auto -z-10 opacity-80 pointer-events-none" 
        />

        <div className="relative z-10">
          <h1 className="text-4xl font-heading text-gray-900 mb-2">Candidates</h1>
          <p className="text-2xl font-serif italic text-gray-800">
            Students' Union Elections 2026–27
          </p>
        </div>
        
      </div>

      <div className="space-y-12">
        {/* Presidential Candidates */}
        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Presidential Candidates
          </h2>
          <div className="min-h-[160px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl"></div>
        </section>

        {/* General Secretarial Candidates */}
        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4 border-b border-gray-200 pb-2">
            General Secretarial Candidates
          </h2>
          <div className="min-h-[160px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl"></div>
        </section>

        {/* Hostel Representative Candidates */}
        <section>
          <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
            <h2 className="text-2xl font-heading text-gray-900">
              Hostel Representative (H-Rep) Candidates
            </h2>
            <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 uppercase tracking-wider">
              Select Bhawan
              <svg className="w-5 h-5 transform rotate-90 group-hover:translate-x-1 transition-transform scale-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </button>
          </div>
          <div className="min-h-[160px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl"></div>
        </section>

        {/* Day Scholar Representative Candidates */}
        <section>
          <h2 className="text-2xl font-heading text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Day Scholar Representative (D-Rep) Candidates
          </h2>
          <div className="min-h-[160px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl"></div>
        </section>
      </div>
    </main>
  );
}