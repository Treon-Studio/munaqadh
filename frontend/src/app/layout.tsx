export const dynamic = 'force-dynamic';

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('@/mocks/startMock');
}

import ClientAppShell from '@/components/layouts/ClientAppShell';
import Providers from '@/components/layouts/providers';
import { fontVariables } from '@/libs/font';
import { getServerT } from '@/libs/server-i18n';
import { cn } from '@/libs/utils';
import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import { DM_Sans } from "next/font/google"

import '@/styles/global.css';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import MockProvider from '@/app/MockProvider';
import NextAuthProvider from '@/components/auth/NextAuthProvider';
import SetAxiosToken from '@/components/auth/SetAxiosToken';

const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b',
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
})


export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerT('common');
  const title = await t('app.title');
  const description = await t('app.description');

  return {
    title,
    description,
  };
}

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const activeThemeValue = cookieStore.get('active_theme')?.value;
  const isScaled = activeThemeValue?.endsWith('-scaled');

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background overflow-hidden overscroll-none font-sans antialiased',
          activeThemeValue ? `theme-${activeThemeValue}` : '',
          isScaled ? 'theme-scaled' : '',
          dmSans.className
        )}
      >
        <NuqsAdapter>
          <MockProvider>
            <NextAuthProvider>
              <SetAxiosToken />
              <ClientAppShell>
                <Providers activeThemeValue={activeThemeValue as string}>{children}</Providers>
              </ClientAppShell>
            </NextAuthProvider>
          </MockProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
