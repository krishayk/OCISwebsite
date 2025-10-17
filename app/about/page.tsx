import Link from 'next/link';
import Placeholder from '@/components/Placeholder';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'About',
  description: 'Learn about the Official California Innovators Society and how we empower youth through hands-on workshops and real-world collaboration.',
  path: '/about',
});

export default function About() {
  return (
    <div className="fade-in">
      {/* Two Column Overview */}
      <section className="section-padding">
        <div className="container mx-auto page-padding">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="block-gap">
              <h1>About the Official California Innovators Society</h1>
              <p>
                The Official California Innovators Society (OCIS) is a student-led organization 
                dedicated to bridging the gap between academic learning and real-world application. 
                We believe that the best way to learn is by doing, and the best way to make an 
                impact is through collaboration.
              </p>
              <p>
                Founded on the principle that young people have the creativity and drive to solve 
                complex problems, OCIS creates opportunities for students to work directly with 
                local businesses, civic leaders, and community organizations to develop practical 
                solutions to real challenges.
              </p>
            </div>
            <div className="fade-up">
              <Placeholder label="Placeholder — Collaboration Image" aspect="3:2" />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto page-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-gray-900 dark:text-white">How We Work</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center fade-up">
              <div className="card p-6 block-gap">
                <h3>Partner with Local Leaders</h3>
                <p className="text-small text-muted">
                  We identify real challenges faced by local businesses and civic organizations, 
                  ensuring our work addresses genuine community needs.
                </p>
                <Placeholder label="Placeholder — Partnership" aspect="3:2" />
              </div>
              </div>
              <div className="text-center fade-up" style={{ animationDelay: '60ms' }}>
                <div className="card p-6 block-gap">
                  <h3>Run Interactive Workshops</h3>
                  <p className="text-small text-muted">
                    Students participate in hands-on, challenge-based workshops where they 
                    collaborate to develop innovative solutions using design thinking and 
                    problem-solving methodologies.
                  </p>
                  <Placeholder label="Placeholder — Workshop" aspect="3:2" />
                </div>
              </div>
              <div className="text-center fade-up" style={{ animationDelay: '120ms' }}>
                <div className="card p-6 block-gap">
                  <h3>Deliver Real Impact</h3>
                  <p className="text-small text-muted">
                    Our workshops produce tangible outcomes that benefit the community, 
                    from improved business processes to enhanced civic engagement initiatives.
                  </p>
                  <Placeholder label="Placeholder — Impact" aspect="3:2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto page-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center fade-up">
                <div className="card p-8">
                  <h3 className="mb-4">Integrity</h3>
                  <p className="text-small text-muted">
                    We maintain the highest standards of honesty and transparency in all our 
                    collaborations and communications.
                  </p>
                </div>
              </div>
              <div className="text-center fade-up" style={{ animationDelay: '60ms' }}>
                <div className="card p-8">
                  <h3 className="mb-4">Impact</h3>
                  <p className="text-small text-muted">
                    Every project we undertake is designed to create meaningful, measurable 
                    benefits for our community partners and participants.
                  </p>
                </div>
              </div>
              <div className="text-center fade-up" style={{ animationDelay: '120ms' }}>
                <div className="card p-8">
                  <h3 className="mb-4">Learning by Doing</h3>
                  <p className="text-small text-muted">
                    We believe that the most effective learning happens through hands-on 
                    experience and real-world application of knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto page-padding">
          <div className="max-w-2xl mx-auto text-center text-white fade-up">
            <h2 className="mb-6">Ready to Get Involved?</h2>
            <p className="mb-8 text-lg">
              Whether you're a student looking to make an impact, a business seeking fresh 
              perspectives, or a civic leader interested in youth engagement, we'd love to 
              hear from you.
            </p>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
