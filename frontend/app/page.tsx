import Link from 'next/link';
import Image from 'next/image';
// Fungsi untuk mengambil data dari API Laravel
async function getPosts() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
  // Melakukan request ke endpoint API Laravel
  const res = await fetch(`${API_URL}/api/posts`, {
    // Memastikan Next.js selalu mengambil data terbaru (tidak di-cache terlalu lama)
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data from API');
  }

  return res.json();
}

// Komponen Home sekarang bersifat 'async'
export default async function Home() {
  // Memanggil fungsi getPosts untuk mendapatkan data dari database
  const posts = await getPosts();

  // Sort posts to match navbar order
  const navbarOrder = [
    'email-communication',
    'effective-business-writing',
    'memo',
    'business-letter',
    'minutes-of-meeting',
    'importance-of-data',
  ];
  const sortedPosts = [...posts]
    .filter((p: any) => p.slug !== 'faq')
    .sort((a: any, b: any) => navbarOrder.indexOf(a.slug) - navbarOrder.indexOf(b.slug));

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            Professional Development
          </span>
          <h1 className="text-4xl font-extrabold text-gray-950 dark:text-white tracking-tight sm:text-6xl mb-6 transition-colors duration-300">
            How to Write <span className="text-blue-600 dark:text-blue-400">Effective</span><br /> Business Communication.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-slate-300 mx-auto leading-relaxed transition-colors duration-300">
            A comprehensive guide to mastering the art of written communication in the workplace, from email writing to the accurate use of data.
          </p>
        </div>
        {/* Wave into dark section */}
        <div className="w-full bg-white dark:bg-slate-900 overflow-hidden leading-none transition-colors duration-300 -my-1 relative z-10">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block scale-105" style={{ height: '80px' }}>
            <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" className="fill-slate-900 dark:fill-white transition-colors duration-300" />
          </svg>
        </div>
      </div>
      {/* Definition & Hook Section */}
      <div className="relative pt-24 pb-0 bg-slate-900 dark:bg-white overflow-hidden transition-colors duration-300">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-800 dark:bg-slate-200 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-50 transition-colors duration-300"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -left-24 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-15"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl opacity-15"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              The Power of Words
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white dark:text-slate-900 mb-6 leading-tight transition-colors duration-300">
              What Is Written Business Communication?
            </h2>
            <p className="text-slate-400 dark:text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
              The foundation of every professional relationship — examined through its most essential forms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="text-slate-300 dark:text-slate-700 text-lg leading-relaxed space-y-6 transition-colors duration-300">
              <p>
                <strong className="text-white dark:text-slate-900 transition-colors duration-300">Written business communication</strong> is the process of delivering information, instructions, or decisions in written form within a workplace or organizational setting. It spans <em className="text-blue-300 dark:text-blue-600">emails, memos, formal letters,</em> and <em className="text-blue-300 dark:text-blue-600">meeting minutes</em> — each serving a distinct purpose in the professional world.
              </p>
              <p>
                Unlike spoken exchanges, written messages leave a lasting record. They can be stored, printed, and cited as official evidence — making them indispensable in legal, audit, and high-stakes decision-making contexts where accountability matters most.
              </p>
              <p className="text-white dark:text-slate-900 font-semibold text-lg border-l-4 border-blue-500 pl-5 py-2 bg-blue-500/5 dark:bg-blue-500/10 rounded-r-lg transition-colors duration-300">
                The quality of your business writing is a direct reflection of your professionalism. Clear, structured messages build trust; ambiguous or careless ones erode it.
              </p>
            </div>

            <div className="bg-slate-800/50 dark:bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-slate-700 dark:border-slate-200 shadow-2xl relative group hover:-translate-y-2 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative">
                <svg className="w-12 h-12 text-blue-400 dark:text-blue-500 mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-2xl font-medium text-white dark:text-slate-900 leading-snug mb-8 transition-colors duration-300">
                  "The most successful leaders are rarely the ones with the best ideas — they are the ones who can communicate those ideas most effectively."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-slate-800 dark:ring-white transition-shadow duration-300">
                    KB
                  </div>
                  <div>
                    <div className="text-white dark:text-slate-900 font-bold transition-colors duration-300">KombisBlog Editorial</div>
                    <div className="text-blue-400 dark:text-blue-600 text-sm transition-colors duration-300">Business Communication Specialists</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {[
              { icon: '📄', label: 'Leaves a Record', desc: 'Written messages can be stored, printed, and cited as official evidence in legal or audit contexts.' },
              { icon: '🤝', label: 'Builds Trust', desc: 'Clear and structured writing reflects professionalism and strengthens relationships.' },
              { icon: '🎯', label: 'Drives Action', desc: 'Well-crafted communication removes ambiguity and motivates decisive responses.' },
            ].map((pillar) => (
              <div key={pillar.label} className="bg-slate-800/60 dark:bg-slate-50 border border-slate-700 dark:border-slate-200 rounded-2xl p-6 flex flex-col gap-3 hover:border-blue-500/50 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300">
                <span className="text-3xl">{pillar.icon}</span>
                <h4 className="text-white dark:text-slate-900 font-bold text-lg transition-colors duration-300">{pillar.label}</h4>
                <p className="text-slate-400 dark:text-slate-600 text-sm leading-relaxed transition-colors duration-300">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-slate-900 mb-6 transition-colors duration-300">Ready to elevate your professional writing?</h3>
            <p className="text-slate-400 dark:text-slate-600 text-lg max-w-3xl mx-auto mb-10 leading-relaxed transition-colors duration-300">
              Whether you are drafting a quick internal memo, crafting a formal business letter to a client, or presenting hard data to stakeholders — the principles of clarity, courtesy, and completeness remain constant. Explore our comprehensive guides below to master every essential form.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
        </div>
        {/* Wave out of dark section */}
        <div className="w-full bg-white dark:bg-slate-900 overflow-hidden leading-none transition-colors duration-300 -my-1 relative z-10">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block scale-105" style={{ height: '80px' }}>
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,0 L0,0 Z" className="fill-slate-900 dark:fill-white transition-colors duration-300" />
          </svg>
        </div>
      </div>
      {/* Grid Section - Menampilkan data dari API */}
      <div className="bg-gradient-to-b from-white via-gray-50/60 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            Core Curriculum
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-8 leading-tight transition-colors duration-300">
            Master the Mechanics of Communication
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 pb-24 pt-6 px-4 sm:px-6 lg:px-8">
          {/* Kita melakukan map pada variabel 'posts' yang didapat dari database */}
          {sortedPosts.map((post: any) => (
            <Link
              key={post.id}
              href={`/artikel/${post.slug}`}
              className="flex flex-col group bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden hover:shadow-2xl hover:border-gray-200 dark:hover:border-slate-500 transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              {/* Wadah Gambar */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-white dark:bg-slate-800 border-b border-gray-50 dark:border-slate-700 transition-colors duration-300">
                {/* Kita panggil post.image_url sesuai nama kolom di database */}
                <Image
                  src={post.image_url}
                  alt={`Cover for ${post.title}`}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-7xl) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/5 dark:bg-white/5 group-hover:bg-black/0 dark:group-hover:bg-white/0 transition-colors pointer-events-none"></div>
              </div>

              {/* Bagian Teks */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed flex-1 line-clamp-3 transition-colors duration-300">
                  {post.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 transition-colors duration-300">
                  Read More
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── COMMON MISTAKES & BEST PRACTICES ────────────────────── */}
      <div className="bg-white dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Dos and Don'ts
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 dark:text-white mb-6 leading-tight transition-colors duration-300">
              Communication Pitfalls & Best Practices
            </h2>
            <p className="text-gray-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
              Avoid common traps and adopt proven strategies to make your business communication more effective and professional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Common Mistakes */}
            <div className="bg-red-50/50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  Common Mistakes
                </h3>
              </div>
              
              <ul className="space-y-5">
                {[
                  { title: 'Uninformative email subject lines', desc: 'Subjects such as "Info" or "Hello" do not help recipients understand the priority of the message.' },
                  { title: 'Overly long and wordy language', desc: 'One long paragraph often hides the main point.' },
                  { title: 'No clear follow-up', desc: 'Recipients do not know what to do after reading the message.' },
                  { title: 'Choosing the wrong medium', desc: 'Using email for information that should be issued as an official memo, or vice versa.' },
                  { title: 'Not checking spelling and grammar', desc: 'Small mistakes can damage a professional impression.' },
                  { title: 'Meeting minutes are not distributed on time', desc: 'Meeting decisions that are not recorded promptly risk being forgotten or misunderstood.' },
                  { title: 'Ignoring supporting data', desc: 'Claims without data are easy to dispute and difficult to justify.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 group">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-200 dark:bg-red-900/40 flex items-center justify-center text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-gray-900 dark:text-white font-semibold transition-colors duration-300">{item.title}: </strong>
                      <span className="text-gray-600 dark:text-slate-400 transition-colors duration-300">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best Practices */}
            <div className="bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  Best Practices
                </h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  'Define the purpose of the message before writing',
                  'Choose the appropriate document type based on context and audience',
                  'Use active sentences and get straight to the point',
                  'Include relevant data or facts to support the message',
                  'Review before sending or printing the document',
                  'Keep copies of all important communications',
                  'Distribute meeting minutes no later than 24 hours after the meeting ends',
                  'Use consistent formats and templates across the organization',
                  'Avoid discriminatory or insensitive language',
                  'Update knowledge of digital communication ethics regularly'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 group items-start">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-200 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>


      {/* ── WAVE: white → slate-900 ────────────────────────────── */}
      <div className="bg-slate-900 dark:bg-white overflow-hidden leading-none transition-colors duration-300 -my-1 relative z-10">
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block scale-105" style={{ height: '72px' }}>
          <path
            d="M0,36 C180,0 360,72 540,36 C720,0 900,72 1080,36 C1260,0 1380,54 1440,36 L1440,0 L0,0 Z"
            className="fill-white dark:fill-slate-900 transition-colors duration-300"
          />
        </svg>
      </div>

      {/* ── FAQ SECTION ─────────────────────────────────────────── */}
      <div className="bg-slate-900 dark:bg-white py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-3 block">Got Questions?</span>
            <h2 className="text-3xl font-extrabold text-white dark:text-slate-900 transition-colors duration-300">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {([
              { q: 'What is the main difference between a memo and an email?', a: 'A memo is used for formal internal communication and is usually printed or distributed in a fixed format. Email is more flexible, can be used for both internal and external communication, and does not always require a standard format.' },
              { q: 'Are business letters still relevant in the digital era?', a: 'Yes. Business letters remain relevant for formal communication with external parties, especially in legal contexts, official offers, or correspondence with government agencies that require original signatures and letterhead.' },
              { q: 'Who is responsible for preparing meeting minutes?', a: 'Meeting minutes are usually prepared by a secretary or note-taker appointed before the meeting begins. In some organizations, this responsibility is rotated among team members.' },
              { q: 'How can data be included in business communication without seeming excessive?', a: 'Use the data most relevant to the main message. Present it in short sentences or tables. Avoid including every available number because it can confuse the reader.' },
              { q: 'What makes business writing feel unprofessional?', a: 'Some of the main factors are spelling errors, ambiguous sentences, a tone that does not match the situation, no clear follow-up, and using an inappropriate communication medium for the context.' },
            ] as { q: string; a: string }[]).map((item, i) => (
              <details
                key={i}
                className="group bg-slate-800/60 dark:bg-slate-50 border border-slate-700 dark:border-slate-200 rounded-xl overflow-hidden hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-colors duration-200"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none select-none">
                  <span className="text-white dark:text-slate-900 font-semibold text-sm leading-snug transition-colors duration-300">{item.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-slate-600 dark:border-slate-300 flex items-center justify-center text-slate-400 dark:text-slate-500 group-open:border-blue-500 group-open:text-blue-400 text-base font-light transition-colors duration-200">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-slate-400 dark:text-slate-600 text-sm leading-relaxed border-t border-slate-800/60 dark:border-slate-200 transition-colors duration-300">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
