import { AppShell } from '@/components/layout/AppShell';
import { RightRail } from '@/components/common/RightRail';
import { HomePage } from '@/components/home/HomePage';
import { buildMetadata } from '@/lib/utils/seo';

export const metadata = buildMetadata({
  path: '/',
  title: '旅居社区首页',
});

export default function Page() {
  return (
    <AppShell rightRail={<RightRail />}>
      <HomePage />
    </AppShell>
  );
}
