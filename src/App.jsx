import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import CaseStudiesPage from '@/pages/CaseStudiesPage';
import CaseStudyDetailPage from '@/pages/CaseStudyDetailPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import ScrollToTop from '@/components/ScrollToTop';
import WhoWeHelpPage from '@/pages/WhoWeHelpPage';
import BookNowPage from '@/pages/BookNowPage';
import TagManager from 'react-gtm-module';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      TagManager.initialize({ gtmId: 'GTM-MT4W7K78' });
    }
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
        <Header />
        <ScrollToTop />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/who-we-help" element={<WhoWeHelpPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
              <Route path="/book-now" element={<BookNowPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default App;
