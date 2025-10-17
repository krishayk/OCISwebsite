import Placeholder from '@/components/Placeholder';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Workshops',
  description: 'Explore our hands-on workshops where students collaborate with local businesses to create real-world solutions and community impact.',
  path: '/workshops',
});

export default function Workshops() {
  return (
    <div className="fade-in">
      {/* Header */}
      <section className="section-padding">
        <div className="container mx-auto page-padding text-center">
          <h1 className="mb-6">Our Workshops</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Where creativity meets real world impact.
          </p>
        </div>
      </section>

      {/* BASS Recap */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto page-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-gray-900 dark:text-white">Businesses Assisted by Student Support (BASS) Workshop</h2>
            <p className="mb-8 text-lg text-gray-900 dark:text-white">
              Our inaugural workshop brought together students and local business owners to create 
              real solutions for community challenges. Students developed marketing strategies, 
              websites, and operational improvements that directly benefited local businesses. 
              This collaborative approach demonstrated the power of youth innovation when paired 
              with real-world business needs.
            </p>
            
            {/* Workshop Images Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="fade-up">
                <Placeholder label="Placeholder — Students Collaborating" aspect="3:2" />
              </div>
              <div className="fade-up" style={{ animationDelay: '60ms' }}>
                <Placeholder label="Placeholder — Team Pitching" aspect="3:2" />
              </div>
              <div className="fade-up" style={{ animationDelay: '120ms' }}>
                <Placeholder label="Placeholder — Workshop Group" aspect="3:2" />
              </div>
            </div>

            {/* Pull Quote */}
            <div className="card p-8 text-center">
              <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                "Students worked directly with local businesses to bring ideas to life and 
                strengthen the community."
              </blockquote>
              <cite className="text-small text-gray-500 dark:text-gray-400">— Workshop Participant</cite>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
