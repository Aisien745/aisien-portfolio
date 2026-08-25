import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#111A24] text-slate-300 font-sans selection:bg-[#C8A97E] selection:text-[#111A24]">
      
      {/* --- ГЛАВНЫЙ ЭКРАН (Сплит-дизайн как на референсе) --- */}
      <section className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Левая часть: Текст */}
        <div className="lg:w-1/2 flex flex-col justify-between p-10 lg:p-20 relative z-10">
          <nav className="flex justify-between items-center mb-24">
            <div className="font-bold text-xl tracking-[0.2em] text-white uppercase">
              Aisien <span className="text-[#C8A97E]">Solovev</span>
            </div>
            <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A97E]">
              <Link href="#about" className="hover:text-white transition">About</Link>
              <Link href="#projects" className="hover:text-white transition">Projects</Link>
            </div>
          </nav>

          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-7xl font-serif text-[#C8A97E] mb-8 leading-[1.1]">
              Bridging macroeconomics & engineering.
            </h1>
            <p className="text-slate-400 text-sm lg:text-base mb-12 leading-relaxed font-light">
              Economics & Management student specializing in data-driven decision making. 
              I build scalable data pipelines, automate ETL processes, and develop web applications to solve complex business challenges.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link 
                href="#projects" 
                className="px-8 py-4 border border-[#C8A97E] text-[#C8A97E] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#C8A97E] hover:text-[#111A24] transition duration-300"
              >
                View Projects
              </Link>
              <a 
                href="/CV_Aisien_Solovev.pdf" 
                target="_blank"
                className="px-8 py-4 bg-[#C8A97E] text-[#111A24] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#111A24] transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          
          <div className="mt-24 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
            Brussels, Belgium
          </div>
        </div>

        {/* Правая часть: Фоновое изображение (Ч/Б архитектура) */}
        <div 
          className="lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-cover bg-center grayscale opacity-80"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
      </section>

      {/* --- НАВЫКИ (3 колонки как "Our Locations") --- */}
      <section id="about" className="py-24 bg-[#0C131A] text-center px-6">
        <h2 className="text-3xl font-serif text-[#C8A97E] mb-4">Core competencies</h2>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto mb-16 font-light">
          Combining academic rigor in European business dynamics with high-level technical execution to extract actionable insights from raw data.
        </p>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Навык 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-48 bg-slate-800 mb-6 bg-cover bg-center grayscale opacity-70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop')" }}></div>
            <h3 className="text-[#C8A97E] text-xs font-bold uppercase tracking-[0.15em] mb-3">Macro & Finance</h3>
            <p className="text-slate-400 text-xs font-light leading-relaxed">Corporate Finance, Fundamental Valuation, Market Sizing, and Unit Economics.</p>
          </div>
          {/* Навык 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-48 bg-slate-800 mb-6 bg-cover bg-center grayscale opacity-70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')" }}></div>
            <h3 className="text-[#C8A97E] text-xs font-bold uppercase tracking-[0.15em] mb-3">Data Engineering</h3>
            <p className="text-slate-400 text-xs font-light leading-relaxed">Python (pandas), ETL automation, REST APIs, and complex web scraping.</p>
          </div>
          {/* Навык 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-48 bg-slate-800 mb-6 bg-cover bg-center grayscale opacity-70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')" }}></div>
            <h3 className="text-[#C8A97E] text-xs font-bold uppercase tracking-[0.15em] mb-3">Product Development</h3>
            <p className="text-slate-400 text-xs font-light leading-relaxed">Full-stack SaaS MVPs using Next.js, Tailwind CSS, PostgreSQL, and LLM integrations.</p>
          </div>
        </div>
      </section>

      {/* --- ПРОЕКТЫ (Темные карточки) --- */}
      <section id="projects" className="py-32 px-6 bg-[#111A24]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-serif text-[#C8A97E] mb-4">Featured projects</h2>
            <p className="text-slate-400 text-sm font-light">Applied solutions bridging business strategy and code.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Проект 1 */}
            <div className="bg-[#0C131A] border border-slate-800/50 p-8 group hover:border-[#C8A97E]/30 transition duration-500">
              <div className="text-[#C8A97E] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">SaaS MVP</div>
              <h4 className="text-xl font-serif text-white mb-4 line-clamp-2">SciTrack — Academic Literature Monitoring</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light">
                Developed a complete B2B platform integrating OpenAI to translate plain-English research topics into highly optimized boolean queries.
              </p>
              <div className="pt-6 border-t border-slate-800">
                <div className="text-white text-xs mb-1">Business Impact</div>
                <div className="text-slate-500 text-[10px] uppercase tracking-wider">Scalable freemium architecture</div>
              </div>
            </div>

            {/* Проект 2 */}
            <div className="bg-[#0C131A] border border-slate-800/50 p-8 group hover:border-[#C8A97E]/30 transition duration-500">
              <div className="text-[#C8A97E] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Data Pipeline</div>
              <h4 className="text-xl font-serif text-white mb-4 line-clamp-2">GLP-1 Therapeutics Market Sizing</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light">
                Architected an automated data extraction and modeling pipeline querying international health databases (World Bank, WHO, openFDA).
              </p>
              <div className="pt-6 border-t border-slate-800">
                <div className="text-white text-xs mb-1">Business Impact</div>
                <div className="text-slate-500 text-[10px] uppercase tracking-wider">Data-driven investment evaluation</div>
              </div>
            </div>

            {/* Проект 3 */}
            <div className="bg-[#0C131A] border border-slate-800/50 p-8 group hover:border-[#C8A97E]/30 transition duration-500">
              <div className="text-[#C8A97E] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">ETL Automation</div>
              <h4 className="text-xl font-serif text-white mb-4 line-clamp-2">E-commerce Intelligence System</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light">
                Designed a comprehensive ETL system to aggregate real-time pricing and competitor metrics across dynamic retail platforms using Python.
              </p>
              <div className="pt-6 border-t border-slate-800">
                <div className="text-white text-xs mb-1">Business Impact</div>
                <div className="text-slate-500 text-[10px] uppercase tracking-wider">Optimized operational decisions</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- СТАТИСТИКА (Блок с большими цифрами как на референсе) --- */}
      <section className="py-24 bg-[#0C131A] border-y border-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center grayscale opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop')" }}></div>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          <div>
            <div className="text-4xl lg:text-5xl font-serif text-white mb-2">3+</div>
            <div className="text-[#C8A97E] text-[10px] uppercase tracking-[0.2em]">Years Econ Study</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-serif text-white mb-2">4</div>
            <div className="text-[#C8A97E] text-[10px] uppercase tracking-[0.2em]">Data Pipelines</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-serif text-white mb-2">Full</div>
            <div className="text-[#C8A97E] text-[10px] uppercase tracking-[0.2em]">Stack SaaS</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-serif text-white mb-2">C1</div>
            <div className="text-[#C8A97E] text-[10px] uppercase tracking-[0.2em]">English Level</div>
          </div>
        </div>
      </section>

      {/* --- ПОДВАЛ --- */}
      <footer className="flex flex-col lg:flex-row min-h-[50vh]">
        <div className="lg:w-1/2 bg-[#111A24] p-12 lg:p-24 flex flex-col justify-center">
          <h2 className="text-3xl font-serif text-[#C8A97E] mb-6">Contact</h2>
          <p className="text-slate-400 text-sm font-light mb-12 max-w-sm leading-relaxed">
            Currently seeking Junior Business Analyst and Public Policy internship opportunities. Let's build something impactful.
          </p>
          
          <div className="space-y-6 text-xs font-light tracking-wide text-white">
            <div className="flex flex-col">
              <span className="text-[#C8A97E] text-[10px] uppercase tracking-[0.2em] mb-1">Email</span>
              <a href="mailto:aisien.solovev@example.com" className="hover:text-[#C8A97E] transition">aisien.solovev@example.com</a>
            </div>
            <div className="flex flex-col">
              <span className="text-[#C8A97E] text-[10px] uppercase tracking-[0.2em] mb-1">Location</span>
              <span>Brussels, Belgium (Exchange)<br/>Siena, Italy (Base)</span>
            </div>
          </div>
        </div>
        
        <div 
          className="lg:w-1/2 bg-slate-800 bg-cover bg-center grayscale opacity-80 min-h-[40vh]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop')" }}
        ></div>
      </footer>

    </div>
  );
}