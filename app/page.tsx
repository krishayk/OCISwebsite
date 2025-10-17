import Link from 'next/link';
import Placeholder from '@/components/Placeholder';

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto page-padding">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="block-gap">
              <h1 className="text-center lg:text-left">
                Empowering Students. Strengthening Communities.
              </h1>
              <p className="text-center lg:text-left text-lg">
                The Official California Innovators Society connects youth innovation with real-world business and civic challenges across California.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/about" className="btn-primary text-center">
                  Learn More
                </Link>
                <Link href="/workshops" className="btn-secondary text-center">
                  Explore Workshops
                </Link>
              </div>
            </div>
            <div className="fade-up">
              <Placeholder label="Placeholder — Hero Image" aspect="16:9" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="section-padding">
        <div className="container mx-auto page-padding">
          <div className="grid md:grid-cols-3 gap-8 card-gap">
            <div className="fade-up">
              <div className="card p-6 block-gap">
                <h3>What We Do</h3>
                <p className="text-small text-muted">
                  Hands on workshops that tackle real world challenges.
                </p>
                <Placeholder label="Placeholder — Visual" aspect="3:2" />
              </div>
            </div>
            <div className="fade-up" style={{ animationDelay: '60ms' }}>
              <div className="card p-6 block-gap">
                <h3>Who We Work With</h3>
                <p className="text-small text-muted">
                  Students, educators, businesses, and civic leaders.
                </p>
                <Placeholder label="Placeholder — Visual" aspect="3:2" />
              </div>
            </div>
            <div className="fade-up" style={{ animationDelay: '120ms' }}>
              <div className="card p-6 block-gap">
                <h3>Our Mission</h3>
                <p className="text-small text-muted">
                  Empower youth to innovate through collaboration and action.
                </p>
                <Placeholder label="Placeholder — Visual" aspect="3:2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Row */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto page-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-up">
              <p className="font-medium text-gray-900 dark:text-white">Student led collaboration with local partners</p>
            </div>
            <div className="text-center fade-up" style={{ animationDelay: '60ms' }}>
              <p className="font-medium text-gray-900 dark:text-white">Actionable business and technology solutions</p>
            </div>
            <div className="text-center fade-up" style={{ animationDelay: '120ms' }}>
              <p className="font-medium text-gray-900 dark:text-white">Community centered outcomes</p>
            </div>
            <div className="text-center fade-up" style={{ animationDelay: '180ms' }}>
              <p className="font-medium text-gray-900 dark:text-white">Practical leadership and innovation skills</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
