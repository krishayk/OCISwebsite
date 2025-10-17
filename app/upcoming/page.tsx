'use client';

import { useState } from 'react';
import Link from 'next/link';
import Placeholder from '@/components/Placeholder';
import Modal from '@/components/Modal';

export default function Upcoming() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  return (
    <div className="fade-in">
      {/* Header */}
      <section className="section-padding">
        <div className="container mx-auto page-padding text-center">
          <h1 className="mb-6">Upcoming Workshops</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expanding innovation beyond business into civic impact.
          </p>
        </div>
      </section>

      {/* Current Event - CIVIC Innovation */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto page-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-gray-900 dark:text-white">Our Next</h2>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
              <div className="block-gap">
                <h3 className="text-gray-900 dark:text-white">CIVIC Innovation</h3>
                <p className="text-lg text-gray-900 dark:text-white">
                  CIVIC Innovation expands on the BASS concept by focusing on community and civic 
                  challenges. Students will collaborate with city officials and local organizations 
                  to create solutions that address sustainability, accessibility, and civic engagement. 
                  The upcoming workshop will feature participation from the Mayor, recognizing and 
                  supporting youth led innovation in the community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="btn-primary"
                  >
                    Get Notified
                  </button>
                  <Link href="/contact" className="btn-secondary text-center">
                    Partner With Us
                  </Link>
                </div>
              </div>
              <div className="fade-up">
                <Placeholder label="Placeholder — CIVIC Innovation Graphic" aspect="16:9" />
              </div>
            </div>

            {/* Details Block */}
            <div className="card p-8">
              <h4 className="mb-6">Event Details</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">Date</h5>
                  <p className="text-muted">To Be Announced</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Location</h5>
                  <p className="text-muted">To Be Announced</p>
                </div>
              </div>
              <p className="text-small text-muted mt-4">
                Details will be shared as the event approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container mx-auto page-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-gray-900 dark:text-white">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="fade-up">
                <div className="card p-6">
                  <h3 className="mb-4">Future Workshop Series</h3>
                  <p className="text-small text-muted mb-4">
                    Additional workshops focusing on technology, sustainability, and community development 
                    are in the planning stages.
                  </p>
                  <Placeholder label="Placeholder — Future Workshop" aspect="3:2" />
                </div>
              </div>
              <div className="fade-up" style={{ animationDelay: '60ms' }}>
                <div className="card p-6">
                  <h3 className="mb-4">Community Partnerships</h3>
                  <p className="text-small text-muted mb-4">
                    New collaborations with local organizations and businesses to expand our impact 
                    across California.
                  </p>
                  <Placeholder label="Placeholder — Partnership" aspect="3:2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Get Notified"
      >
        {isSubmitted ? (
          <div className="text-center py-4">
            <p className="text-green-600 font-medium">Thanks! We'll notify you when details are available.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-button hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 btn-primary"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
