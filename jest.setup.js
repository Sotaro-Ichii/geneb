import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
    };
  },
  usePathname() {
    return '/';
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock environment variables
process.env.NEXT_PUBLIC_MODE = 'portfolio';
process.env.NEXT_PUBLIC_SITE_URL = 'https://test.com';
process.env.NEXT_PUBLIC_CONTACT_URL = 'https://test.com/contact';
process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'G-TEST123';
