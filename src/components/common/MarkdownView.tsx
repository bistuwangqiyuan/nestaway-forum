'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { cn } from '@/lib/utils/cn';

type Props = {
  content: string;
  className?: string;
};

export function MarkdownView({ content, className }: Props) {
  return (
    <div className={cn('prose dark:prose-invert prose-headings:font-display prose-img:rounded-xl', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          a: ({ href, children, ...rest }) => {
            const external = href?.startsWith('http');
            return (
              <a
                href={href}
                {...rest}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                {children}
              </a>
            );
          },
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src as string} alt={alt ?? ''} loading="lazy" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
