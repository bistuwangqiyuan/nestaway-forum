import * as React from 'react';
import { TopNav } from './TopNav';
import { MobileSidebar } from './MobileSidebar';
import { Sidebar } from './Sidebar';
import { BottomTabBar } from './BottomTabBar';
import { Footer } from './Footer';

type Props = {
  children: React.ReactNode;
  rightRail?: React.ReactNode;
  hideRightRail?: boolean;
};

export function AppShell({ children, rightRail, hideRightRail = false }: Props) {
  return (
    <>
      <TopNav />
      <MobileSidebar />
      <div className="container-fluid pt-6 pb-24 lg:pb-12 flex gap-6 items-start">
        <Sidebar />
        <main className="flex-1 min-w-0">{children}</main>
        {!hideRightRail && (
          <aside className="hidden xl:block w-[300px] shrink-0">
            <div className="sticky top-[calc(var(--header-h)+1rem)] flex flex-col gap-4">
              {rightRail}
            </div>
          </aside>
        )}
      </div>
      <Footer />
      <BottomTabBar />
    </>
  );
}
