'use client';

import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { postRepo, userRepo, cityRepo, groupRepo, tagRepo } from '@/lib/repository';
import { useSearchHistoryStore } from '@/stores/useSearchHistoryStore';
import { useT } from '@/lib/i18n';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Tabs } from '@/components/ui/Tabs';
import { PostCard } from '@/components/common/PostCard';
import { UserCard } from '@/components/common/UserCard';
import { CityCard } from '@/components/common/CityCard';
import { GroupCard } from '@/components/common/GroupCard';
import Link from 'next/link';
import { pickLocalized } from '@/lib/i18n';

export function SearchClient() {
  const { t, locale } = useT();
  const router = useRouter();
  const sp = useSearchParams();
  const initial = sp.get('q') ?? '';
  const [q, setQ] = React.useState(initial);
  const [tab, setTab] = React.useState('all');
  const pushHistory = useSearchHistoryStore((s) => s.push);

  React.useEffect(() => {
    setQ(sp.get('q') ?? '');
  }, [sp]);

  const run = () => {
    const k = q.trim();
    if (!k) return;
    pushHistory(k);
    router.push(`/search?q=${encodeURIComponent(k)}`);
  };

  const k = initial.trim().toLowerCase();
  const posts = k ? postRepo.search(k, 40) : [];
  const users = k
    ? userRepo.list().filter((u) => u.username.toLowerCase().includes(k) || u.displayName.toLowerCase().includes(k))
    : [];
  const cities = k
    ? cityRepo.list().filter((c) => c.slug.includes(k) || c.name.zh.includes(k) || c.name.en.toLowerCase().includes(k))
    : [];
  const groups = k
    ? groupRepo.list().filter((g) => g.slug.includes(k) || g.name.zh.includes(k) || g.name.en.toLowerCase().includes(k))
    : [];
  const tags = k ? tagRepo.list().filter((tg) => tg.slug.includes(k) || tg.name.zh.includes(k)) : [];

  return (
    <div className="space-y-6">
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          run();
        }}
      >
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('search.placeholder')} className="flex-1" />
        <Button type="submit">{t('search.title')}</Button>
      </form>

      {k && (
        <>
          <Tabs
            value={tab}
            onChange={setTab}
            items={[
              { key: 'all', label: t('search.tabs.all') },
              { key: 'posts', label: t('search.tabs.posts'), count: posts.length },
              { key: 'users', label: t('search.tabs.users'), count: users.length },
              { key: 'cities', label: t('search.tabs.cities'), count: cities.length },
              { key: 'groups', label: t('search.tabs.groups'), count: groups.length },
            ]}
          />
          {tab === 'all' && (
            <div className="space-y-8">
              {posts.length > 0 && (
                <section>
                  <h2 className="font-semibold mb-3">{t('search.tabs.posts')}</h2>
                  <div className="flex flex-col gap-3">
                    {posts.slice(0, 6).map((p) => (
                      <PostCard key={p.id} post={p} variant="mini" />
                    ))}
                  </div>
                </section>
              )}
              {users.length > 0 && (
                <section>
                  <h2 className="font-semibold mb-3">{t('search.tabs.users')}</h2>
                  <div className="flex flex-col gap-3">
                    {users.slice(0, 5).map((u) => (
                      <UserCard key={u.id} user={u} variant="compact" />
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
          {tab === 'posts' && (
            <div className="flex flex-col gap-4">
              {posts.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          )}
          {tab === 'users' && (
            <div className="flex flex-col gap-3">
              {users.map((u) => (
                <UserCard key={u.id} user={u} />
              ))}
            </div>
          )}
          {tab === 'cities' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {cities.map((c) => (
                <CityCard key={c.slug} city={c} variant="compact" />
              ))}
            </div>
          )}
          {tab === 'groups' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {groups.map((g) => (
                <GroupCard key={g.slug} group={g} />
              ))}
            </div>
          )}
          {tags.length > 0 && (
            <section>
              <h2 className="font-semibold mb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tg) => (
                  <Link key={tg.slug} href={`/tags/${tg.slug}`} className="pill">
                    #{pickLocalized(tg.name, locale)}
                  </Link>
                ))}
              </div>
            </section>
          )}
          {!posts.length && !users.length && !cities.length && !groups.length && !tags.length && (
            <p className="text-center text-slate-500 py-12">{t('search.empty.title')}</p>
          )}
        </>
      )}
    </div>
  );
}
