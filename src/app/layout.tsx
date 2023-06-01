import 'destyle.css';
import '@/styles/global.scss';
import { ReactNode, Suspense } from 'react';
import { StyledComponentsRegistry } from '@/app/styling/StyledComponentsRegistry';
import { HistoryProvider } from '@/contexts/HistoryContext';
import { AllPageLayout } from '@/components/layouts/AllPageLayout';
import { NavigationEvents } from '@/components/organisms/NavigationEvents';

export const metadata = {
  title: 'next-view-transition',
  description: 'Generated by create next app',
  openGraph: {
    title: 'next-view-transition',
    description: 'Generated by create next app',
    utl: 'https://next-view-transition.netlify.app/',
    siteName: 'next-view-transition',
    images: [{
      url: 'https://next-view-transition.netlify.app/images/counterattack-of-the-timer.jpg',
      width: 1200,
      height: 630
    }],
    local: 'ja_JP',
    type: 'website',
    authors: ['君塚史高']
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://next-view-transition.netlify.app/images/counterattack-of-the-timer.jpg'],
    creator: '@ki_230'
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <HistoryProvider>
          <>
            <StyledComponentsRegistry>
              <AllPageLayout>{ children }</AllPageLayout>
            </StyledComponentsRegistry>
            <Suspense fallback={null}>
              <NavigationEvents />
            </Suspense>
          </>
        </HistoryProvider>
      </body>
    </html>
  )
}
