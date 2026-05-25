'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
} from '@mui/material';
import {
  ArrowForward,
  Close,
  OpenInNew,
  CalendarMonth,
  Person,
  ArrowOutward,
  PictureAsPdf,
  Download,
  Visibility,
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const PdfThumbnail = dynamic(() => import('@/components/PdfThumbnail'), {
  ssr: false,
  loading: () => (
    <Box
      sx={{
        width: '100%',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderRadius: '12px 12px 0 0',
      }}
    >
      <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
        Loading...
      </Typography>
    </Box>
  ),
});

const WebThumbnail = dynamic(() => import('@/components/webThumbnail'), {
  ssr: false,
  loading: () => (
    <Box
      sx={{
        width: '100%',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderRadius: '12px 12px 0 0',
      }}
    >
      <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
        Loading preview...
      </Typography>
    </Box>
  ),
});

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: string;
  tags: string[];
  image: string;
  client: string;
  duration: string;
  year: string;
  features: string[];
  results: string[];
  liveUrl?: string;
  isWebThumbnail?: boolean;
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const categories: string[] = [
    'All',
    'WordPress',
    'WooCommerce',
    'LinkedIn',
    'Podcast',
    'Marketing',
    'E-Commerce',
    'Application',
  ];

  const amcLetters = [
    {
      region: 'Dubai',
      flag: '🇦🇪',
      label: 'United Arab Emirates',
      file: '/amc/Dubai.pdf',
      color: '#f59e0b',
      description: 'Annual Maintenance Contract for our Dubai-based operations and client services.',
    },
    {
      region: 'KSA',
      flag: '🇸🇦',
      label: 'Kingdom of Saudi Arabia',
      file: '/amc/KSA.pdf',
      color: '#10b981',
      description: 'Official AMC document for Kingdom of Saudi Arabia client partnerships.',
    },
    {
      region: 'UK',
      flag: '🇬🇧',
      label: 'United Kingdom',
      file: '/amc/UK.pdf',
      color: '#3b82f6',
      description: 'Maintenance contract letter for our United Kingdom based clientele.',
    },
  ];

const projects: Project[] = [
  {
    id: 1,
    title: 'Exizenly: Your Trusted Partner in Acquiring Your Business',
    subtitle: 'WordPress & LinkedIn Marketing',
    description: 'Are you a motivated seller looking for a partner you can truly trust? Exizenly is here to be that partner for you.',
    fullDescription: 'We provided comprehensive support for Exizenly including WordPress website development and LinkedIn marketing strategy.',
    category: 'WordPress',
    tags: ['WordPress', 'LinkedIn Marketing', 'Hosted Website', 'Video Testimonial'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Exizenly',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://exizenly.com/',
    isWebThumbnail: true,
    features: ['WordPress Website Development', 'LinkedIn Marketing Strategy', 'Content Distribution Optimization', 'Brand Visibility Enhancement', 'Lead Generation System', 'Video Testimonial Production'],
    results: ['Increased brand visibility by 150%', 'Generated quality leads consistently', 'Strong LinkedIn engagement growth', 'Professional web presence established'],
  },
  {
    id: 2,
    title: 'Consult Clarity',
    subtitle: 'Enterprise Support',
    description: 'We provided comprehensive support across website management, LinkedIn strategy, and various tools for seamless user experience.',
    fullDescription: 'Consult Clarity received comprehensive enterprise-level support across website management, LinkedIn strategy, and digital tools.',
    category: 'WordPress',
    tags: ['Enterprise Support', 'Website Management', 'LinkedIn Strategy'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Consult Clarity',
    duration: '4 Months',
    year: '2024',
    liveUrl: 'https://www.consultclarity.org/',
    isWebThumbnail: true,
    features: ['Website Management & Optimization', 'LinkedIn Strategy Development', 'Content Distribution System', 'User Experience Enhancement', 'Digital Tools Implementation', 'Performance Analytics Setup'],
    results: ['Seamless user experience achieved', 'Optimized content distribution', 'Enhanced online presence', 'Improved client engagement metrics'],
  },
  {
    id: 3,
    title: 'Influens - Digital Creative Agency',
    subtitle: 'WordPress Development',
    description: 'Our dedicated team takes pride in delivering innovative and customized Digital Solutions by focusing on the big picture!',
    fullDescription: 'We developed a comprehensive WordPress website for Influens, a digital creative agency. The platform showcases their innovative digital solutions and helps connect with target audiences across different platforms.',
    category: 'WordPress',
    tags: ['WordPress', 'Creative Agency', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Influens',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://influens.com/',
    isWebThumbnail: true,
    features: ['WordPress Website Development', 'Creative Portfolio Showcase', 'Digital Solutions Display', 'Audience Engagement Tools', 'Mobile Responsive Design', 'SEO Optimization'],
    results: ['Professional brand presence established', 'Increased audience engagement', 'Strong digital footprint', 'Enhanced lead generation'],
  },
  {
    id: 4,
    title: 'The Purposeco',
    subtitle: 'LinkedIn Prospecting',
    description: 'We provided essential support to our client\'s LinkedIn strategy, optimizing their online presence for increased visibility.',
    fullDescription: 'For The Purposeco, we delivered strategic LinkedIn prospecting services that transformed their online presence with strategic content distribution for increased visibility and engagement.',
    category: 'LinkedIn',
    tags: ['LinkedIn Prospecting', 'Content Strategy', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'The Purposeco',
    duration: '3 Months',
    year: '2023',
    liveUrl: 'https://www.thepurposeco.co/',
    isWebThumbnail: true,
    features: ['LinkedIn Strategy Optimization', 'Strategic Content Distribution', 'Online Presence Enhancement', 'Visibility & Engagement Growth', 'Connection Building', 'Brand Positioning'],
    results: ['Increased LinkedIn visibility by 200%', 'Higher engagement rates achieved', 'Quality connections generated', 'Strong online presence established'],
  },
  {
    id: 5,
    title: 'Bio-Aktive - Curcumin Supplement',
    subtitle: 'WordPress Development',
    description: 'The world\'s first biosoluble curcumin supplement with over 200 combined years of team experience.',
    fullDescription: 'We developed a WordPress website for Bio-Aktive, the world\'s first biosoluble curcumin supplement. The platform showcases their groundbreaking health products backed by a team from multi-billion dollar multi-national companies.',
    category: 'WordPress',
    tags: ['WordPress', 'Health Supplements', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Bio-Aktive',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://www.bio-aktive.com/',
    isWebThumbnail: true,
    features: ['WordPress Website Development', 'Product Showcase', 'Scientific Content Display', 'Brand Storytelling', 'E-Commerce Ready', 'Mobile Optimized'],
    results: ['Professional brand presence', 'Global product visibility', 'Enhanced credibility', 'Strong market entry'],
  },
  {
    id: 6,
    title: 'Kenneth Hellem - The Future Is Remote',
    subtitle: 'Podcast Management',
    description: 'We took the reins of a dynamic Podcast Management project across Apple Podcasts, Spotify, and Google Podcasts.',
    fullDescription: 'We managed Kenneth Hellem\'s "The Future Is Remote" podcast providing comprehensive support across Apple Podcasts, Spotify, and Google Podcasts with streamlined content distribution.',
    category: 'Podcast',
    tags: ['Podcast Management', 'Content Distribution', 'Apple Podcasts'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Kenneth Hellem',
    duration: '4 Months',
    year: '2024',
    liveUrl: 'https://podcasts.apple.com/us/podcast/the-future-is-remote-w-kenneth-hellem/id1647050090',
    isWebThumbnail: true,
    features: ['Podcast Production & Editing', 'Multi-Platform Distribution', 'Apple Podcasts Management', 'Spotify Optimization', 'Google Podcasts Setup', 'Audience Growth Strategy'],
    results: ['Seamless multi-platform presence', 'Streamlined content distribution', 'Audience growth across platforms', 'Professional podcast production'],
  },
  {
    id: 7,
    title: 'Digital Procurement Made Simple',
    subtitle: 'WordPress Development',
    description: 'Find procurement software that matches your unique requirements in just a few clicks. 100% FREE.',
    fullDescription: 'We developed a comprehensive WordPress platform for a digital procurement solution helping users find procurement software matching their unique requirements with solution maps and multi-criteria search.',
    category: 'WordPress',
    tags: ['WordPress', 'Web Development', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Digital Procurement',
    duration: '3 Months',
    year: '2023',
    liveUrl: 'https://procurementsoftware.site/',
    isWebThumbnail: true,
    features: ['WordPress Website Development', 'Advanced Search & Filter System', 'Solution Maps Integration', 'Multi-Module Software Listings', 'User-Friendly Interface', 'SEO Optimization'],
    results: ['User-friendly procurement platform launched', 'Advanced search functionality implemented', 'Free platform with honest reviews', 'Strong organic traffic growth'],
  },
  {
    id: 8,
    title: 'MoiLeon - Special Sector Solutions',
    subtitle: 'WordPress Development',
    description: 'A group of expertise in special sectors to find solutions and enhance the quality of different markets.',
    fullDescription: 'We developed a WordPress website for MoiLeon, a group of expertise in special sectors finding solutions and enhancing different markets. The platform showcases their specialized sector solutions and market expertise.',
    category: 'WordPress',
    tags: ['WordPress', 'Consulting', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'MoiLeon',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://moileon.com/',
    isWebThumbnail: true,
    features: ['WordPress Website Development', 'Sector Solutions Showcase', 'Market Expertise Display', 'Consulting Services', 'Responsive Design', 'Content Management System'],
    results: ['Professional consulting presence', 'Enhanced market visibility', 'Streamlined service presentation', 'Strong brand positioning'],
  },
  {
    id: 9,
    title: 'Leadership Expose',
    subtitle: 'WordPress Development',
    description: 'Your Leadership Story Is Your Message To Millions - Enabling leaders across the globe to share their story.',
    fullDescription: 'We developed a WordPress platform for Leadership Expose, enabling leaders globally to share their stories, build visibility, and impart wisdom to other leaders and businesses.',
    category: 'WordPress',
    tags: ['WordPress', 'Leadership', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Leadership Expose',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://leadershipexpose.com/',
    isWebThumbnail: true,
    features: ['WordPress Website Development', 'Leadership Content Platform', 'Story Sharing System', 'Visibility Building Tools', 'Community Engagement', 'SEO Optimization'],
    results: ['Global leadership platform launched', 'Increased leader visibility', 'Growing community engagement', 'Strong content distribution'],
  },
  {
    id: 10,
    title: 'La Hacienda Tile',
    subtitle: 'Magento E-Commerce',
    description: 'Specializing in Mexican tile, copper sinks, farmhouse sinks and ceramic at the best possible price.',
    fullDescription: 'We built a Magento e-commerce platform for La Hacienda Tile specializing in Mexican tile, copper sinks, farmhouse sinks, and ceramic with best quality products at the best possible price.',
    category: 'E-Commerce',
    tags: ['Magento', 'E-Commerce', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'La Hacienda Tile',
    duration: '3 Months',
    year: '2023',
    liveUrl: 'https://www.lahaciendatile.com/',
    isWebThumbnail: true,
    features: ['Magento E-Commerce Development', 'Product Catalog Management', 'Payment Gateway Integration', 'Shipping & Inventory Management', 'Customer Account Management', 'Mobile Responsive Design'],
    results: ['Full e-commerce platform launched', 'Increased online sales significantly', 'Streamlined product management', 'Enhanced customer shopping experience'],
  },
  {
    id: 11,
    title: 'Luxury Homes - Real Estate',
    subtitle: 'WordPress Development',
    description: 'Luxury Homes is ready to welcome you home in Mumbai with exciting developments and investment properties.',
    fullDescription: 'We developed a WordPress real estate discovery website for Luxury Homes, a Mumbai-based brokerage with a global mindset bringing together exciting developments and investment properties.',
    category: 'WordPress',
    tags: ['WordPress', 'Real Estate', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Luxury Homes Mumbai',
    duration: '2.5 Months',
    year: '2023',
    liveUrl: 'https://www.dluxuryhomes.com/',
    isWebThumbnail: true,
    features: ['WordPress Property Listing Platform', 'Advanced Property Search & Filter', 'Property Detail Pages', 'Agent Contact System', 'Virtual Tour Integration', 'SEO Optimization'],
    results: ['Luxury real estate platform launched', 'Increased property inquiries', 'Strong organic search visibility', 'Enhanced user experience for buyers'],
  },
  {
    id: 12,
    title: 'The Home Zen - Garden & Pool Maintenance',
    subtitle: 'PHP Laravel Development',
    description: 'Garden, Home and Swimming Pool Maintenance Services in Dubai with custom designed solutions.',
    fullDescription: 'We developed a comprehensive PHP Laravel website for The Home Zen, a Dubai-based maintenance services company offering garden, home, and swimming pool maintenance with custom-designed solutions.',
    category: 'E-Commerce',
    tags: ['PHP', 'Laravel', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'The Home Zen',
    duration: '3 Months',
    year: '2024',
    liveUrl: 'https://www.thehomezen.com/',
    isWebThumbnail: true,
    features: ['PHP Laravel Backend Development', 'Service Booking System', 'Custom Solution Designer', 'Client Portal', 'Payment Integration', 'Admin Dashboard'],
    results: ['Streamlined service booking process', 'Increased client satisfaction', 'Efficient service management', 'Growing customer base in Dubai'],
  },
  {
    id: 13,
    title: 'Phoenix Perform - Team Building',
    subtitle: 'Marketing & Podcast Management',
    description: 'Utilizing research on organizational change & brain science, we go beyond standard team-building exercises.',
    fullDescription: 'We provided comprehensive marketing and podcast management support for Phoenix Perform, utilizing research on organizational change and brain science to go beyond standard team-building exercises and coaching sessions.',
    category: 'Marketing',
    tags: ['Marketing', 'Podcast Management', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Phoenix Perform',
    duration: '3 Months',
    year: '2024',
    liveUrl: 'https://www.phoenixperform.com/',
    isWebThumbnail: true,
    features: ['Digital Marketing Strategy', 'Podcast Production', 'Content Marketing', 'Brand Development', 'Social Media Management', 'Website Optimization'],
    results: ['Enhanced brand authority', 'Growing podcast audience', 'Increased engagement', 'Strong market positioning'],
  },
  {
    id: 14,
    title: 'Possible Music',
    subtitle: 'WordPress Development',
    description: 'A dynamic music platform showcasing creative talents and musical productions.',
    fullDescription: 'We developed a WordPress website for Possible Music, a dynamic music platform that showcases creative talents and musical productions with an engaging user experience.',
    category: 'WordPress',
    tags: ['WordPress', 'Music', 'Creative'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Possible Music',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://possible-music.com/',
    isWebThumbnail: true,
    features: ['WordPress Website Development', 'Music Portfolio Showcase', 'Audio Integration', 'Artist Profiles', 'Event Management', 'Mobile Responsive'],
    results: ['Professional music platform launched', 'Enhanced artist visibility', 'Growing audience engagement', 'Strong creative presence'],
  },
  {
    id: 15,
    title: 'Meet John Doolittle',
    subtitle: 'WordPress Development',
    description: 'As a retired Navy SEAL captain, I travel the country speaking to organizations about overcoming adversity.',
    fullDescription: 'We developed a WordPress website for John Doolittle, a retired Navy SEAL captain who travels the country speaking about leadership, trust, and resilience. The platform showcases his speaking engagements and expertise.',
    category: 'WordPress',
    tags: ['WordPress', 'Speaking', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'John Doolittle',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://johndoolittle.com/',
    isWebThumbnail: true,
    features: ['WordPress Website Development', 'Speaking Engagement Booking', 'Leadership Content', 'Brand Storytelling', 'Contact System', 'Mobile Optimized'],
    results: ['Professional speaker brand established', 'Increased booking inquiries', 'Enhanced online credibility', 'Growing audience reach'],
  },
  {
    id: 16,
    title: 'Eureka Conveying Growth',
    subtitle: 'WordPress Development',
    description: 'Striving hard to maintain top-notch position in today\'s fiercely competitive market with expansion plans.',
    fullDescription: 'We developed a WordPress website for Eureka Belting, a company striving to maintain top position in the competitive market with plans for expanding manufacturing capabilities and market presence.',
    category: 'WordPress',
    tags: ['WordPress', 'Manufacturing', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Eureka Belting',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://eurekabeltings.com/',
    isWebThumbnail: true,
    features: ['WordPress Website Development', 'Manufacturing Showcase', 'Product Catalog', 'Company Profile', 'Contact System', 'SEO Optimization'],
    results: ['Professional manufacturing presence', 'Enhanced market credibility', 'Increased business inquiries', 'Strong online footprint'],
  },
  {
    id: 17,
    title: 'Saudi Arabia Sotheby\'s International Realty',
    subtitle: 'PHP Laravel Development',
    description: 'No other luxury real estate company offers the same breadth of knowledge, reach and experience.',
    fullDescription: 'We developed a PHP Laravel real estate platform for Saudi Arabia Sotheby\'s International Realty, offering luxury real estate with decades of expertise in living an exceptional life.',
    category: 'E-Commerce',
    tags: ['PHP', 'Laravel', 'Real Estate'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Sotheby\'s Realty KSA',
    duration: '4 Months',
    year: '2024',
    liveUrl: 'https://sothebysrealty.sa/en',
    isWebThumbnail: true,
    features: ['PHP Laravel Development', 'Luxury Property Listings', 'Advanced Search', 'Agent Portal', 'Multilingual Support', 'Premium Design'],
    results: ['Luxury real estate platform launched', 'Enhanced brand prestige', 'Increased property inquiries', 'Strong market presence in KSA'],
  },
  {
    id: 18,
    title: 'Creative Curator - Digital Agency',
    subtitle: 'WordPress Development',
    description: 'A dedicated team delivering innovative digital solutions with focus on the big picture.',
    fullDescription: 'We developed a WordPress website for Creative Curator, a digital agency that prides itself on delivering innovative and customized digital solutions by focusing on impactful experiences.',
    category: 'WordPress',
    tags: ['WordPress', 'Digital Agency', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Creative Curator',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://www.creativecurator.in/',
    isWebThumbnail: true,
    features: ['WordPress Website Development', 'Portfolio Showcase', 'Service Display', 'Client Engagement', 'Responsive Design', 'SEO Ready'],
    results: ['Professional agency presence', 'Enhanced portfolio visibility', 'Increased client inquiries', 'Strong digital brand'],
  },
  {
    id: 19,
    title: 'Curcumin Pro - Health Supplement',
    subtitle: 'WordPress Development',
    description: 'Premium curcumin supplement website showcasing health benefits and product information.',
    fullDescription: 'We developed a WordPress website for Curcumin Pro, a premium curcumin supplement brand. The platform showcases health benefits, product information, and scientific research behind their formulations.',
    category: 'WordPress',
    tags: ['WordPress', 'Health', 'E-Commerce Ready'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Curcumin Pro',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://curcuminpro.com/',
    isWebThumbnail: true,
    features: ['WordPress Website Development', 'Product Information Display', 'Health Benefits Showcase', 'Scientific Research Section', 'E-Commerce Ready', 'Mobile Optimized'],
    results: ['Professional health brand presence', 'Clear product communication', 'Enhanced credibility', 'Growing customer interest'],
  },
  {
    id: 20,
    title: 'GR Convent School',
    subtitle: 'WordPress Development',
    description: 'Education for all & Excellence in Education - a premier educational institution since 2006.',
    fullDescription: 'We developed a WordPress website for GR Convent School, an educational institution founded in 2006 focused on providing quality education and excellence in learning.',
    category: 'WordPress',
    tags: ['WordPress', 'Education', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'GR Convent School',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://grconventschool.in/',
    isWebThumbnail: true,
    features: ['WordPress Website Development', 'School Information Display', 'Admission System', 'Event Calendar', 'Gallery Section', 'Parent Communication'],
    results: ['Professional school website launched', 'Improved parent communication', 'Increased admission inquiries', 'Enhanced institutional credibility'],
  },
  {
    id: 21,
    title: 'MMUSA - Muscle Building Supplements',
    subtitle: 'WordPress Development',
    description: 'One of the best muscle building supplement stores with proven formulas for fitness goals.',
    fullDescription: 'We developed a WordPress e-commerce website for MMUSA, a leading muscle building supplement store known for proven formulas like creatine serum helping customers achieve their fitness goals.',
    category: 'WordPress',
    tags: ['WordPress', 'Supplements', 'E-Commerce'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'MMUSA',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://mmusa.com/',
    isWebThumbnail: true,
    features: ['WordPress E-Commerce', 'Product Catalog', 'Supplement Information', 'Shopping Cart', 'Payment Integration', 'Fitness Blog'],
    results: ['Professional supplement store launched', 'Increased online sales', 'Better product visibility', 'Growing customer base'],
  },
  {
    id: 22,
    title: 'Savannah Tours - Discover Tanzania',
    subtitle: 'WordPress Development',
    description: 'A privately owned family company with 42 years of operation in the Tanzanian tourism industry.',
    fullDescription: 'We developed a WordPress website for Savannah Tours, a family-owned company with 42 years of experience in Tanzanian tourism, offering personalized tailor-made safaris and travel experiences.',
    category: 'WordPress',
    tags: ['WordPress', 'Tourism', 'Hosted Website'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Savannah Tours',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://savannahtz.co.tz/',
    isWebThumbnail: true,
    features: ['WordPress Website Development', 'Tour Packages Display', 'Safari Booking System', 'Gallery & Media', 'Customer Testimonials', 'Mobile Responsive'],
    results: ['Enhanced tourism presence', 'Increased booking inquiries', 'Better customer engagement', 'Strong brand in Tanzania market'],
  },
  {
    id: 23,
    title: 'SpeakUp - Women Safety App',
    subtitle: 'Mobile Application',
    description: 'A free application launched by Rajasthan Police for women safety and emergency response.',
    fullDescription: 'We developed SpeakUp, a free mobile application launched by Rajasthan Police for women safety in the Ajmer range with emergency features, OTP registration, and GPS tracking.',
    category: 'Application',
    tags: ['Application', 'Women Safety', 'Mobile App'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Rajasthan Police',
    duration: '4 Months',
    year: '2023',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.vbm.speakup&hl=en_IN&gl=US',
    isWebThumbnail: true,
    features: ['Mobile App Development', 'OTP Registration System', 'Emergency Alert System', 'GPS Location Tracking', 'Quick Dial Emergency', 'Safety Resources Section'],
    results: ['Women safety app launched successfully', 'Adopted by Rajasthan Police officially', 'Serving women across Ajmer range', 'Quick emergency response enabled'],
  },
  // ===== WOOCOMMERCE PROJECTS =====
  {
    id: 24,
    title: 'Goshopia - Online Shopping UAE',
    subtitle: 'WooCommerce E-Commerce',
    description: 'A comprehensive WooCommerce e-commerce platform for Goshopia, offering a seamless online shopping experience in the UAE.',
    fullDescription: 'We developed a full-featured WooCommerce e-commerce platform for Goshopia, a UAE-based online shopping destination with custom theme, payment gateway, and complete e-commerce optimization.',
    category: 'WooCommerce',
    tags: ['WooCommerce', 'E-Commerce', 'UAE', 'Online Shopping'],
    image: '',
    client: 'Goshopia',
    duration: '3 Months',
    year: '2024',
    liveUrl: 'https://goshopia.com/',
    isWebThumbnail: true,
    features: ['WooCommerce Platform Development', 'Custom Theme Design', 'UAE Payment Gateway Integration', 'Product Management System', 'Order Tracking System', 'Multi-language Support', 'Mobile Responsive Design', 'SEO Optimization'],
    results: ['Full-featured e-commerce platform launched', 'Seamless shopping experience for UAE customers', 'Increased online sales and conversions', 'Strong market presence in UAE e-commerce'],
  },
  {
    id: 25,
    title: 'Akke Knitwear - Premium Knitwear',
    subtitle: 'WooCommerce E-Commerce',
    description: 'A stylish WooCommerce e-commerce website for Akke Knitwear showcasing and selling premium knitwear products online.',
    fullDescription: 'We created a visually appealing WooCommerce e-commerce website for Akke Knitwear with clean design, smooth browsing, and complete inventory management.',
    category: 'WooCommerce',
    tags: ['WooCommerce', 'E-Commerce', 'Knitwear', 'Fashion'],
    image: '',
    client: 'Akke Knitwear',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://akkeknitwear.com/',
    isWebThumbnail: true,
    features: ['WooCommerce Store Setup', 'Premium Product Showcase', 'Custom Product Categories', 'Size & Color Variations', 'Secure Checkout System', 'Inventory Management', 'Newsletter Integration', 'Social Media Integration'],
    results: ['Beautiful online store launched', 'Enhanced product visibility', 'Streamlined order management', 'Growing online customer base'],
  },
  {
    id: 26,
    title: 'Gentle Wench - Women Fashion',
    subtitle: 'WooCommerce E-Commerce',
    description: 'A modern WooCommerce fashion e-commerce website for Gentle Wench offering trendy women clothing and accessories.',
    fullDescription: 'We developed a modern WooCommerce e-commerce platform for Gentle Wench with sophisticated design, easy navigation, and seamless shopping experience.',
    category: 'WooCommerce',
    tags: ['WooCommerce', 'E-Commerce', 'Fashion', 'Women Clothing'],
    image: '',
    client: 'Gentle Wench',
    duration: '2.5 Months',
    year: '2024',
    liveUrl: 'https://www.gentlewench.com/',
    isWebThumbnail: true,
    features: ['WooCommerce Fashion Store', 'Trendy UI/UX Design', 'Product Filtering & Search', 'Wishlist Functionality', 'Size Guide Integration', 'Secure Payment Processing', 'Order Tracking', 'Customer Reviews System'],
    results: ['Elegant fashion e-commerce launched', 'Improved user shopping experience', 'Higher conversion rates achieved', 'Strong brand online presence'],
  },
  {
    id: 27,
    title: 'Joco Cups - Premium Drinkware',
    subtitle: 'WooCommerce E-Commerce',
    description: 'A premium WooCommerce e-commerce website for Joco Cups offering high-quality reusable cups and drinkware products.',
    fullDescription: 'We built a premium WooCommerce e-commerce platform for Joco Cups with clean, minimalist design reflecting commitment to sustainability and quality.',
    category: 'WooCommerce',
    tags: ['WooCommerce', 'E-Commerce', 'Drinkware', 'Sustainable'],
    image: '',
    client: 'Joco Cups',
    duration: '2 Months',
    year: '2024',
    liveUrl: 'https://jococups.com/',
    isWebThumbnail: true,
    features: ['WooCommerce Store Development', 'Minimalist Brand Design', 'Product Customization Options', 'Bulk Order System', 'Subscription Integration', 'Eco-friendly Brand Messaging', 'Secure Checkout', 'Shipping Calculator'],
    results: ['Premium drinkware store launched', 'Enhanced brand credibility online', 'Streamlined ordering process', 'Growing customer engagement'],
  },
];
  const stats = [
    { number: '250+', label: 'Projects Delivered' },
    { number: '120+', label: 'Happy Clients' },
    { number: '8+', label: 'Years Experience' },
    { number: '15+', label: 'Countries Served' },
  ];

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      WordPress: '#21759B',
      WooCommerce: '#96588a',
      LinkedIn: '#0A66C2',
      Podcast: '#a855f7',
      Marketing: '#f59e0b',
      'E-Commerce': '#ec4899',
      Application: '#10b981',
    };
    return colors[category] || '#3b82f6';
  };

  const handleOpenProject = (project: Project) => {
    // Agar project ke paas liveUrl hai, to directly us URL ko naye tab mein open karo
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else {
      // Nahi to pehle jaisa modal open karo
      setSelectedProject(project);
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <Navbar />

      <Box
        sx={{
          backgroundColor: '#050d1a',
          fontFamily: "'Poppins', sans-serif",
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        {/* Background Glows */}
        <Box
          sx={{
            position: 'absolute',
            top: '5%',
            left: '-8%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            right: '-8%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        {/* ===== HERO SECTION ===== */}
        <Box sx={{ pt: { xs: 14, md: 16 }, pb: { xs: 4, md: 6 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#3b82f6',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  letterSpacing: 2,
                  mb: 2,
                  textTransform: 'uppercase',
                }}
              >
                Our Portfolio
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Explore Our{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Handcrafted Masterpieces
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  maxWidth: '650px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                Explore our portfolio of handcrafted masterpiece projects across WordPress,
                WooCommerce, LinkedIn marketing, podcast management, and business solutions.
              </Typography>
            </Box>

            {/* Stats */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(4,1fr)' },
                gap: 3,
                maxWidth: '900px',
                mx: 'auto',
                mb: { xs: 5, md: 7 },
              }}
            >
              {stats.map((stat, i) => (
                <Box
                  key={i}
                  sx={{
                    textAlign: 'center',
                    p: 2.5,
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'rgba(59,130,246,0.3)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: 800,
                      fontSize: { xs: '1.8rem', md: '2.2rem' },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Category Chips */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <Chip
                  key={cat}
                  label={cat}
                  onClick={() => setActiveCategory(cat)}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.85rem',
                    px: 1.5,
                    py: 2.5,
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backgroundColor: activeCategory === cat ? '#3b82f6' : 'rgba(255,255,255,0.05)',
                    color: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.7)',
                    border: `1px solid ${activeCategory === cat ? '#3b82f6' : 'rgba(255,255,255,0.1)'}`,
                    '&:hover': {
                      backgroundColor: activeCategory === cat ? '#2563eb' : 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                />
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== PROJECTS GRID ===== */}
        <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 5, md: 7 } }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.9rem',
                mb: 4,
              }}
            >
              Showing{' '}
              <Box component="span" sx={{ color: '#3b82f6', fontWeight: 600 }}>
                {filteredProjects.length}
              </Box>{' '}
              projects
              {activeCategory !== 'All' && (
                <>
                  {' '}in{' '}
                  <Box component="span" sx={{ color: '#3b82f6', fontWeight: 600 }}>
                    {activeCategory}
                  </Box>
                </>
              )}
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' },
                gap: 3,
              }}
            >
              {filteredProjects.map((project) => (
                <Box
                  key={project.id}
                  onClick={() => handleOpenProject(project)}
                  sx={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      borderColor: 'rgba(59,130,246,0.3)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                      '& .project-image': { transform: 'scale(1.08)' },
                      '& .view-btn': { opacity: 1, transform: 'translateY(0)' },
                      '& .overlay': { opacity: 1 },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    {/* Web Thumbnail ya Regular Image */}
                    {project.isWebThumbnail && project.liveUrl ? (
                      <Box sx={{ position: 'absolute', inset: 0 }}>
                        <WebThumbnail url={project.liveUrl} width={400} height={220} />
                      </Box>
                    ) : (
                      <Box
                        className="project-image"
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          transition: 'transform 0.6s ease',
                        }}
                      />
                    )}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(0deg, rgba(5,13,26,0.7) 0%, transparent 50%)',
                        pointerEvents: 'none',
                      }}
                    />
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(59,130,246,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none',
                      }}
                    >
                      <Box
                        className="view-btn"
                        sx={{
                          backgroundColor: '#3b82f6',
                          color: '#fff',
                          px: 3,
                          py: 1.2,
                          borderRadius: '10px',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          opacity: 0,
                          transform: 'translateY(10px)',
                          transition: 'all 0.4s ease 0.1s',
                        }}
                      >
                        {project.liveUrl ? 'Visit Website' : 'View Details'} <ArrowOutward sx={{ fontSize: 18 }} />
                      </Box>
                    </Box>
                    <Chip
                      label={project.category}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 14,
                        left: 14,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.72rem',
                        backgroundColor: getCategoryColor(project.category),
                        color: '#fff',
                        borderRadius: '6px',
                        height: '26px',
                        zIndex: 5,
                      }}
                    />
                    <Chip
                      label={project.year}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 14,
                        right: 14,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.72rem',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(10px)',
                        color: '#fff',
                        borderRadius: '6px',
                        height: '26px',
                        zIndex: 5,
                      }}
                    />
                    {project.liveUrl && (
                      <Chip
                        label="LIVE"
                        size="small"
                        sx={{
                          position: 'absolute',
                          bottom: 14,
                          right: 14,
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.65rem',
                          backgroundColor: '#10b981',
                          color: '#fff',
                          borderRadius: '6px',
                          height: '22px',
                          zIndex: 5,
                        }}
                      />
                    )}
                  </Box>

                  <Box sx={{ p: 3 }}>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        mb: 0.5,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                      }}
                    >
                      {project.subtitle}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '1.15rem',
                        lineHeight: 1.3,
                        mb: 1.5,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '0.85rem',
                        lineHeight: 1.6,
                        mb: 2.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2 }}>
                      {project.tags.slice(0, 3).map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            height: '24px',
                            backgroundColor: 'rgba(255,255,255,0.06)',
                            color: 'rgba(255,255,255,0.6)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '6px',
                          }}
                        />
                      ))}
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pt: 2,
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'rgba(255,255,255,0.4)' }}>
                        <Person sx={{ fontSize: 15 }} />
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.78rem' }}>
                          {project.client}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'rgba(255,255,255,0.4)' }}>
                        <CalendarMonth sx={{ fontSize: 15 }} />
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.78rem' }}>
                          {project.duration}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== AMC LETTERS SECTION ===== */}
        <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 8 } }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#3b82f6',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  letterSpacing: 2,
                  mb: 1.5,
                  textTransform: 'uppercase',
                }}
              >
                Official Documents
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: '1.6rem', md: '2rem' },
                  mb: 1.5,
                }}
              >
                Client Trust &{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  AMC Letters
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  maxWidth: '550px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                Official Annual Maintenance Contract letters from our trusted clients
                across the globe — a testament to our long-term partnerships.
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 3,
                maxWidth: '950px',
                mx: 'auto',
              }}
            >
              {amcLetters.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: `${item.color}55`,
                      boxShadow: `0 15px 40px rgba(0,0,0,0.3), 0 0 20px ${item.color}15`,
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <PdfThumbnail file={item.file} width={300} />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '40px',
                        background: 'linear-gradient(0deg, #0a1225, transparent)',
                        pointerEvents: 'none',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '8px',
                        px: 1.2,
                        py: 0.4,
                      }}
                    >
                      <PictureAsPdf sx={{ fontSize: 14, color: '#ef4444' }} />
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          color: '#fff',
                          fontSize: '0.7rem',
                          fontWeight: 600,
                        }}
                      >
                        PDF
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '8px',
                        px: 1.2,
                        py: 0.4,
                      }}
                    >
                      <Typography sx={{ fontSize: '1.2rem', lineHeight: 1 }}>
                        {item.flag}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          color: '#fff',
                          fontWeight: 700,
                          fontSize: '1.15rem',
                        }}
                      >
                        {item.region}
                      </Typography>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.4,
                          backgroundColor: `${item.color}18`,
                          border: `1px solid ${item.color}33`,
                          borderRadius: '6px',
                          px: 1,
                          py: 0.2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: item.color,
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            color: item.color,
                            fontSize: '0.65rem',
                            fontWeight: 600,
                          }}
                        >
                          Verified
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: 'rgba(255,255,255,0.4)',
                        fontSize: '0.78rem',
                        mb: 1.5,
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '0.82rem',
                        lineHeight: 1.6,
                        mb: 2.5,
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                      <Button
                        component="a"
                        href={item.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<Visibility sx={{ fontSize: 16 }} />}
                        variant="contained"
                        fullWidth
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          backgroundColor: item.color,
                          color: '#fff',
                          textTransform: 'none',
                          fontWeight: 600,
                          fontSize: '0.82rem',
                          py: 1,
                          borderRadius: '10px',
                          boxShadow: 'none',
                          '&:hover': {
                            backgroundColor: item.color,
                            opacity: 0.85,
                            boxShadow: `0 4px 15px ${item.color}44`,
                            transform: 'translateY(-1px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        View
                      </Button>
                      <Button
                        component="a"
                        href={item.file}
                        download
                        startIcon={<Download sx={{ fontSize: 16 }} />}
                        variant="outlined"
                        fullWidth
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          color: 'rgba(255,255,255,0.7)',
                          borderColor: 'rgba(255,255,255,0.15)',
                          textTransform: 'none',
                          fontWeight: 600,
                          fontSize: '0.82rem',
                          py: 1,
                          borderRadius: '10px',
                          '&:hover': {
                            borderColor: item.color,
                            color: item.color,
                            backgroundColor: `${item.color}10`,
                            transform: 'translateY(-1px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Download
                      </Button>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== CTA SECTION ===== */}
        <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 8 } }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box
              sx={{
                background: 'linear-gradient(135deg, #1a2f5c, #0f1f3d)',
                borderRadius: '24px',
                p: { xs: 4, md: 6 },
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(59,130,246,0.2)',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-10%',
                  width: '400px',
                  height: '400px',
                  background: 'radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)',
                  filter: 'blur(50px)',
                  pointerEvents: 'none',
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: '1.6rem', md: '2.2rem' },
                  mb: 2,
                  position: 'relative',
                }}
              >
                Have a project in mind?
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '1rem',
                  maxWidth: '500px',
                  mx: 'auto',
                  mb: 4,
                  lineHeight: 1.7,
                  position: 'relative',
                }}
              >
                Let&apos;s discuss how we can bring your ideas to life and deliver
                results that matter.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(59,130,246,0.4)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #2563eb, #1d4ed8)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Start a Project
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    borderColor: 'rgba(255,255,255,0.3)',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: '10px',
                    '&:hover': {
                      borderColor: '#3b82f6',
                      backgroundColor: 'rgba(59,130,246,0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Our Process
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* ===== PROJECT DETAIL MODAL (sirf bina liveUrl wale projects ke liye) ===== */}
      <Dialog
        open={modalOpen}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              backgroundColor: '#0a1628',
              backgroundImage: 'none',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
              maxHeight: '90vh',
            },
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          {selectedProject && (
            <Box>
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  zIndex: 10,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(10px)',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#ef4444' },
                }}
              >
                <Close />
              </IconButton>

              <Box
                sx={{
                  height: { xs: '200px', md: '300px' },
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${selectedProject.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(0deg, #0a1628 0%, transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />
                <Box sx={{ position: 'absolute', bottom: 20, left: 24, zIndex: 2 }}>
                  <Chip
                    label={selectedProject.category}
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      backgroundColor: getCategoryColor(selectedProject.category),
                      color: '#fff',
                      borderRadius: '8px',
                      mb: 1,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: { xs: '1.3rem', md: '1.8rem' },
                    }}
                  >
                    {selectedProject.title}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ p: { xs: 3, md: 4 } }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                    mb: 3,
                    pb: 3,
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {[
                    { label: 'Client', value: selectedProject.client },
                    { label: 'Duration', value: selectedProject.duration },
                    { label: 'Year', value: selectedProject.year },
                  ].map((meta, i) => (
                    <Box key={i}>
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          color: 'rgba(255,255,255,0.4)',
                          fontSize: '0.75rem',
                          mb: 0.3,
                        }}
                      >
                        {meta.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          color: '#fff',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                        }}
                      >
                        {meta.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  {selectedProject.fullDescription}
                </Typography>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 3,
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: '14px',
                      p: 3,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#3b82f6',
                        fontWeight: 700,
                        fontSize: '1rem',
                        mb: 2,
                      }}
                    >
                      🚀 Key Features
                    </Typography>
                    {selectedProject.features.map((f, i) => (
                      <Box key={i} sx={{ display: 'flex', gap: 1, mb: 1.2, alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: '#3b82f6',
                            mt: 0.8,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.85rem',
                          }}
                        >
                          {f}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      background: 'rgba(16,185,129,0.05)',
                      borderRadius: '14px',
                      p: 3,
                      border: '1px solid rgba(16,185,129,0.15)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#10b981',
                        fontWeight: 700,
                        fontSize: '1rem',
                        mb: 2,
                      }}
                    >
                      📈 Results Achieved
                    </Typography>
                    {selectedProject.results.map((r, i) => (
                      <Box key={i} sx={{ display: 'flex', gap: 1, mb: 1.2, alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: '#10b981',
                            mt: 0.8,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.85rem',
                          }}
                        >
                          {r}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForward />}
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      borderColor: 'rgba(255,255,255,0.2)',
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 3,
                      py: 1.2,
                      borderRadius: '10px',
                      '&:hover': {
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59,130,246,0.1)',
                      },
                    }}
                  >
                    Start Similar Project
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}