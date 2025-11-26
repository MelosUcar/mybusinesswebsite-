import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { MarketplacePage } from './components/pages/MarketplacePage';
import { SubscriptionBoxesPage } from './components/pages/SubscriptionBoxesPage';
import { EducationHubPage } from './components/pages/EducationHubPage';
import { CommunityHubPage } from './components/pages/CommunityHubPage';
import { PricingPage } from './components/pages/PricingPage';
import { BlogPage } from './components/pages/BlogPage';
import { HelpCentrePage } from './components/pages/HelpCentrePage';

export type Page =
  | 'home'
  | 'about'
  | 'marketplace'
  | 'subscriptions'
  | 'education'
  | 'community'
  | 'pricing'
  | 'blog'
  | 'help';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'marketplace': return <MarketplacePage />;
      case 'subscriptions': return <SubscriptionBoxesPage />;
      case 'education': return <EducationHubPage />;
      case 'community': return <CommunityHubPage />;
      case 'pricing': return <PricingPage />;
      case 'blog': return <BlogPage />;
      case 'help': return <HelpCentrePage />;
      default: return <HomePage />;
    }
  };

  return (
    <>
      <Navbar setPage={setPage} />
      {renderPage()}
      <Footer />
    </>
  );
}
