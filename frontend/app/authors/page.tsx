export default function AuthorsPage() {
  const authors = [
    { name: 'Rezki Langit Ramadhan', role: 'Leader of Kombis Team', initials: 'RLR', gradient: 'from-blue-400 to-indigo-500', desc: 'The visionary behind Kombis, orchestrating the team\'s efforts and ensuring project goals align with user needs. With strong leadership and strategic planning, Rezki drives the project forward from concept to completion.' },
    { name: 'Muhammad Adib Arkan', role: 'Curriculum Designer', initials: 'MAA', gradient: 'from-emerald-400 to-teal-500', desc: 'Crafts the structure and flow of the educational content. By blending pedagogical best practices with engaging content strategies, Bestar ensures that the learning experience is both intuitive and highly effective.' },
    { name: 'Bestar Khan', role: 'Curriculum Writer', initials: 'BK', gradient: 'from-orange-400 to-rose-500', desc: 'The wordsmith behind the rich content of the platform. With a talent for breaking down complex topics into easy-to-understand lessons, Adib ensures that every article and guide delivers maximum value to the readers.' },
    { name: 'Rifa Faviandra', role: 'Backend Developer', initials: 'RF', gradient: 'from-purple-400 to-pink-500', desc: 'Powers the platform from behind the scenes. Specializing in robust API architecture and database management, Rifa ensures that the Kombis platform runs seamlessly, securely, and efficiently at all times.' }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            Meet The Team
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 dark:text-white mb-6 leading-tight transition-colors duration-300">
            Our Expert Authors
          </h1>
          <p className="text-gray-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Passionate professionals dedicated to helping you master the art of written business communication.
          </p>
        </div>
        
        <div className="space-y-24 md:space-y-32">
          {authors.map((author, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                {/* Avatar / Image Side */}
                <div className="w-full md:w-5/12 flex justify-center relative">
                  <div className={`relative w-56 h-56 lg:w-72 lg:h-72 rounded-[2.5rem] bg-gradient-to-tr ${author.gradient} flex items-center justify-center text-white font-bold text-6xl shadow-2xl ring-8 ring-slate-50 dark:ring-slate-800 transform ${isEven ? 'rotate-3' : '-rotate-3'} hover:rotate-0 hover:scale-105 transition-all duration-500`}>
                    {author.initials}
                    {/* Decorative glowing blob */}
                    <div className={`absolute ${isEven ? '-bottom-10 -right-10' : '-bottom-10 -left-10'} w-32 h-32 bg-gradient-to-tr ${author.gradient} opacity-40 -z-10 rounded-full blur-2xl`}></div>
                  </div>
                </div>

                {/* Text Side */}
                <div className={`w-full md:w-7/12 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{author.name}</h3>
                  <div className="text-blue-600 dark:text-blue-400 text-xl font-semibold mb-6 transition-colors duration-300">{author.role}</div>
                  <p className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed mb-8 transition-colors duration-300">
                    {author.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
