import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <>
      <section id="about" className="flex items-center justify-center bg-transparent mt-16 mb-36">
        <div className="container mx-auto">
          <h2 className="mt-4 mx-8 md:mx-0 text-3xl font-bold text-slate-50 leading-snug text-center font-reem-kufi">Query IQ is a powerful developer tool that provides holistic insights on your SQL database.</h2>
          <div className="mt-24 flex flex-wrap gap-14 justify-center bg-transparent">
            <div className='group inline-block overflow-hidden rounded-2xl bg-gradient-to-tr from-purple-800 to-teal-400 p-2 md:p-10 pb-4 text-white shadow-[5px_6px_20px_4px] shadow-indigo-700/70 duration-700 transition hover:scale-105 hover:from-purple-700 hover:to-teal-300 w-7/12 md:w-[325px] md:h-[450px] mx-8'>
              <div className="flex flex-col items-center h-full justify-center transition-transform transform-gpu group-hover:scale-105">
                <div>
                  <Image
                    src="https://user-images.githubusercontent.com/108748353/256357255-34175d9e-c633-4b22-8f57-2569b9b4475d.png"
                    alt="database health"
                    width={225}
                    height={0}
                    className='w-[125px] sm:w-[125px] md:w-[175px] lg:w-[225px] min-w-[32px] max-w-[225px] filter drop-shadow'
                  />
                </div>
                <h2 className="text-xl font-bold text-slate-50 mt-4 text-center font-reem-kufi">Database Health Metrics</h2>
                <p className="mt-2 text-slate-50 text-center">
                  Monitor crucial metrics for your database such as query execution time, memory usage, cache-hit ratio, and more!
                </p>
              </div>
            </div>
            <div className="group inline-block overflow-hidden rounded-2xl bg-gradient-to-tr from-purple-800 to-teal-400 p-2 md:p-10 pb-4 text-white shadow-[5px_6px_20px_4px] shadow-indigo-700/70 duration-700 transition hover:scale-105 hover:from-purple-700 hover:to-teal-300 w-7/12 md:w-[325px] md:h-[450px] mx-8">
              <div className="flex flex-col items-center h-full justify-center transition-transform transform-gpu group-hover:scale-105">
                <div>
                  <Image
                    src="https://user-images.githubusercontent.com/103613430/256677692-a395862f-9cf6-4427-99f6-c99fe0a36b1e.png"
                    alt="query log"
                    width={225}
                    height={0}
                    className='w-[125px] pt-2 sm:w-[125px] md:w-[175px] lg:w-[225px] min-w-[32px] max-w-[225px] filter drop-shadow'
                  />
                </div>
                <h2 className="text-xl font-bold text-slate-50 mt-4 text-center font-reem-kufi">Customizable Query Log</h2>
                <p className="mt-2 text-slate-50 text-center">
                  Keep tabs on the queries you make to your database, give them custom labels, and easily compare query performance.
                </p>
              </div>
            </div>
            <div className="group inline-block overflow-hidden rounded-2xl bg-gradient-to-tr from-purple-800 to-teal-400 p-2 md:p-10 pb-4 text-white shadow-[5px_6px_20px_4px] shadow-indigo-700/70 duration-700 transition hover:scale-105 hover:from-purple-700 hover:to-teal-300 w-7/12 md:w-[325px] md:h-[450px] mx-8">
              <div className="flex flex-col items-center h-full justify-center transition-transform transform-gpu group-hover:scale-105">
                <div>
                  <Image
                    src="https://user-images.githubusercontent.com/108748353/256357302-ea8b14b7-08f0-4ba5-b6ec-9233a1c69860.png"
                    alt="query performance image"
                    width={225}
                    height={0}
                    className='w-[125px] sm:w-[125px] md:w-[175px] lg:w-[225px] min-w-[32px] max-w-[225px] filter drop-shadow'
                  />
                </div>
                <h2 className="text-xl font-bold text-slate-50 mt-4 text-center font-reem-kufi">Query Performance</h2>
                <p className="mt-2 text-slate-50 text-center">
                  Receive a granular level analysis of individual query performance by aggregating actual time, rows, and width.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
