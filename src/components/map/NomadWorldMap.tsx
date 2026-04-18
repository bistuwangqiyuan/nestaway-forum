'use client';

import * as React from 'react';
import Link from 'next/link';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import type { City } from '@/types';
import { useT, pickLocalized } from '@/lib/i18n';
import { fmtCount } from '@/lib/utils/format';
import { cn } from '@/lib/utils/cn';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

type Props = { cities: City[]; className?: string };

export function NomadWorldMap({ cities, className }: Props) {
  const { locale } = useT();
  const [hover, setHover] = React.useState<City | null>(null);

  const max = Math.max(...cities.map((c) => c.stats.nomadsOnline));
  const radius = (n: number) => 4 + Math.sqrt(n / max) * 14;

  return (
    <div className={cn('relative card overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900', className)}>
      <ComposableMap projectionConfig={{ scale: 145 }} width={980} height={460} style={{ width: '100%', height: 'auto' }}>
        <ZoomableGroup zoom={1} maxZoom={4} minZoom={0.8}>
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: { rsmKey: string }[] }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="rgb(226 232 240)"
                  stroke="rgb(241 245 249)"
                  strokeWidth={0.4}
                  className="dark:!fill-slate-800 dark:!stroke-slate-900"
                  style={{
                    default: { outline: 'none' },
                    hover: { fill: 'rgb(209 242 229)', outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>
          {cities.map((c) => (
            <Marker key={c.slug} coordinates={[c.coords.lng, c.coords.lat]}>
              <Link href={`/cities/${c.slug}`}>
                <g
                  onMouseEnter={() => setHover(c)}
                  onMouseLeave={() => setHover(null)}
                  className="cursor-pointer"
                >
                  <circle r={radius(c.stats.nomadsOnline) + 4} fill="rgba(14,124,102,0.15)" />
                  <circle
                    r={radius(c.stats.nomadsOnline)}
                    fill={c.isHot ? '#F4A258' : '#0E7C66'}
                    stroke="#fff"
                    strokeWidth={1.5}
                  />
                </g>
              </Link>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {hover && (
        <div className="absolute top-3 left-3 px-3 py-2 rounded-lg bg-white/95 dark:bg-slate-900/95 shadow-pop text-xs">
          <div className="font-semibold text-slate-900 dark:text-slate-100">
            {hover.flag} {pickLocalized(hover.name, locale)} · {pickLocalized(hover.country, locale)}
          </div>
          <div className="text-slate-500 dark:text-slate-400 mt-0.5">
            在地旅居者 <span className="num-tabular text-brand-700 dark:text-brand-300 font-semibold">{fmtCount(hover.stats.nomadsOnline)}</span>
          </div>
        </div>
      )}

      <div className="absolute bottom-3 right-3 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-[11px] text-slate-500 dark:text-slate-400 shadow-soft">
        <span className="inline-block w-2 h-2 rounded-full bg-brand-600" />常规
        <span className="inline-block w-2 h-2 rounded-full bg-warm-500 ml-2" />热门
      </div>
    </div>
  );
}
