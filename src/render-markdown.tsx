import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import { Code } from './components/code';
import { P } from './components/p';
import { Hn } from './components/hn';
import { RendererCSSSet } from './types';
import { themeSet } from './theme-set';
import { Anchor } from './components/a';
import { Blockquote } from './components/blockquote';
import { OL } from './components/ol';
import { UL } from './components/ul';
import { LI } from './components/li';
import { Image } from './components/img';
import { Table } from './components/table';

interface MarkdownRendererProps {
  markdown: string;
  CSS: Partial<RendererCSSSet>;
  classNamePrefix?: string;
}

export function MDRenderer({ markdown, CSS, classNamePrefix }: MarkdownRendererProps) {
  const cssmap = themeSet(CSS);
  const prefix = classNamePrefix ?? 'md-renderer-';

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      components={{
        a: ({ ...props }) => <Anchor className={`${prefix}a`} {...props} />,
        blockquote: ({ ...props }) => (
          <Blockquote className={`${prefix}blockquote`} {...props} />
        ),
        code: ({ ...props }) => <Code className={`${prefix}code`} {...props} />,
        h1: ({ ...props }) => <Hn depth="h1" className={`${prefix}h1`} {...props} />,
        h2: ({ ...props }) => <Hn depth="h2" className={`${prefix}h2`} {...props} />,
        h3: ({ ...props }) => <Hn depth="h3" className={`${prefix}h3`} {...props} />,
        h4: ({ ...props }) => <Hn depth="h4" className={`${prefix}h4`} {...props} />,
        h5: ({ ...props }) => <Hn depth="h5" className={`${prefix}h5`} {...props} />,
        h6: ({ ...props }) => <Hn depth="h6" className={`${prefix}h6`} {...props} />,
        ol: ({ ...props }) => <OL className={`${prefix}ol`} {...props} />,
        ul: ({ ...props }) => <UL className={`${prefix}h6`} {...props} />,
        li: ({ ...props }) => <LI className={`${prefix}h6`} {...props} />,
        table: ({ ...props }) => <Table className={`${prefix}h6`} {...props} />,
        img: ({ ...props }) => <Image className={`${prefix}h6`} {...props} />,
        p: ({ ...props }) => <P className={`${prefix}h6`} {...props} />
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
