"use client"; // Обязательно для Framer Motion в App Router

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  // Базовые настройки для плавного появления при скролле
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-hidden">
      
      {/* --- ПЛАВАЮЩАЯ НАВИГАЦИЯ (Появляется сверху при загрузке) --- */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/70 backdrop-blur-lg px-6 py-3 rounded-full border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-6 md:gap-8 items-center text-sm font-medium whitespace-nowrap"
      >
        <Link href="#" className="font-extrabold text-slate-900 tracking-tight text-base">AS.</Link>
        <div className="w-px h-4 bg-slate-200"></div>
        <Link href="#about" className="text-slate-500 hover:text-slate-900 transition">About</Link>
        <Link href="#projects" className="text-slate-500 hover:text-slate-900 transition">Projects</Link>
        <Link href="#contact" className="text-slate-500 hover:text-slate-900 transition">Contact</Link>
      </motion.nav>

      {/* --- ГЛАВНЫЙ ЭКРАН (HERO) - Каскадное появление --- */}
      <section className="pt-48 pb-20 md:pt-56 md:pb-32 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for Internships
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[1.05]"
        >
          Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">macroeconomics</span> <br className="hidden md:block" /> & engineering.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium leading-relaxed mb-10"
        >
          Economics & Management student specializing in data-driven decision making. 
          I build scalable data pipelines, automate ETL processes, and develop web applications.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link href="#projects" className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-slate-800 transition shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2">
            View Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
          <a href="/CV_Aisien_Solovev.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-semibold rounded-2xl hover:bg-slate-50 transition shadow-sm flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download CV
          </a>
        </motion.div>
      </section>

      {/* --- НАВЫКИ (SKILLS) --- */}
      <section id="about" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">Core Competencies</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">Combining academic rigor in European business dynamics with high-level technical execution to extract actionable insights from raw data.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Macro & Finance",
                desc: "Corporate Finance, Fundamental Valuation, Market Sizing, and Unit Economics.",
                color: "blue",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              },
              {
                title: "Data Engineering",
                desc: "Python (pandas), ETL automation, dynamic REST API integrations, and web scraping.",
                color: "indigo",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              },
              {
                title: "Product Development",
                desc: "Full-stack SaaS MVPs using Next.js, Tailwind CSS, PostgreSQL, and LLM integrations.",
                color: "teal",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition duration-300"
              >
                <div className={`w-12 h-12 bg-${skill.color}-100 text-${skill.color}-600 rounded-xl flex items-center justify-center mb-6`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">{skill.icon}</svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{skill.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ПРОЕКТЫ --- */}
      <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-slate-500 font-medium">Applied solutions bridging business strategy and code.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              type: "SaaS MVP",
              color: "blue",
              title: "SciTrack — Academic Literature Monitoring",
              desc: "Developed a complete B2B platform integrating OpenAI to translate plain-English research topics into highly optimized boolean queries.",
              impact: "Scalable freemium architecture",
              link: "https://scitrack.vercel.app"
            },
            {
              type: "Data Pipeline",
              color: "indigo",
              title: "GLP-1 Therapeutics Market Sizing",
              desc: "Architected an automated data extraction and modeling pipeline querying international health databases (World Bank, WHO, openFDA).",
              impact: "Data-driven investment evaluation",
              link: "https://github.com/твой-ник"
            },
            {
              type: "ETL Automation",
              color: "teal",
              title: "E-commerce Intelligence System",
              desc: "Designed a comprehensive ETL system to aggregate real-time pricing and competitor metrics across dynamic retail platforms using Python.",
              impact: "Optimized operational decisions",
              link: "https://github.com/твой-ник"
            }
          ].map((project, index) => (
            <motion.a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`text-xs font-bold text-${project.color}-600 uppercase tracking-wider`}>{project.type}</div>
                <svg className={`w-5 h-5 text-slate-300 group-hover:text-${project.color}-600 transition`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{project.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{project.desc}</p>
              <div className="pt-6 border-t border-slate-100">
                <div className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Business Impact</div>
                <div className="text-slate-900 text-sm font-medium">{project.impact}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* --- СТАТИСТИКА --- */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-10 mb-20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { value: "3+", label: "Years Econ Study" },
            { value: "4", label: "Data Pipelines" },
            { value: "Full", label: "Stack SaaS" },
            { value: "C1", label: "English Level" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            >
              <div className="text-5xl font-extrabold mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- ПОДВАЛ --- */}
      <motion.footer 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        id="contact" 
        className="pb-16 pt-10 text-center px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-6">Let's build something impactful.</h2>
          <p className="text-slate-500 font-medium mb-10">Currently seeking Junior Business Analyst and Public Policy internship opportunities.</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a href="mailto:solovevaisien@gmail.com" className="px-6 py-3 bg-white border border-slate-200 text-slate-900 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition shadow-sm">
              solovevaisien@gmail.com
            </a>
            <div className="px-6 py-3 bg-white border border-slate-200 text-slate-500 font-semibold rounded-xl shadow-sm">
              Brussels / Siena
            </div>
          </div>
          
          <div className="flex justify-center gap-8 text-sm font-bold text-slate-400 uppercase tracking-wider">
            <a href="https://www.linkedin.com/in/solovevaisien/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition">LinkedIn</a>
            <a href="https://github.com/aysiens" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition">GitHub</a>
          </div>
        </div>
      </motion.footer>

    </div>
  );
}