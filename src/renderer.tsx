import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import { Code } from './components/code';
import { P } from './components/p';
import { Hn } from './components/hn';
import { RendererCSSMap } from './types';
import { setTheme } from './theme-set';
import { Anchor } from './components/a';
import { Blockquote } from './components/blockquote';
import { OL } from './components/ol';
import { UL } from './components/ul';
import { LI } from './components/li';
import { Image } from './components/img';
import { Table } from './components/table';
import { Pre } from './components/pre';

interface MarkdownRendererProps {
  markdown: string;
  CSS?: Partial<RendererCSSMap>;
  classNamePrefix?: string;
}

/**
 *
 * @param markdown markdown string
 * @param CSS e.g. ...CSS={{ h1: { color:'blue' }, h2: 'className', p: CSS_VAR }}...
 * @param classNamePrefix When CSS is defined externally without injection (e.g. module CSS), you can apply a prefix. In this case, classNames are assigned in the format prefix-h1, prefix-h2; if no prefix is provided, each tag automatically receives a className such as md-renderer-h1. When the CSS prop is injected, the prefix is ignored.
 */
export function Renderer({ markdown, CSS, classNamePrefix }: MarkdownRendererProps) {
  const cssmap = setTheme(CSS);

  const pf = classNamePrefix ?? 'md-renderer-';
  const prefix = (tagName: keyof RendererCSSMap) =>
    typeof cssmap[tagName] === 'string' ? cssmap[tagName] : `${pf}${tagName}`;

  const inlineCSS = (tagName: keyof RendererCSSMap) => {
    if (typeof cssmap[tagName] === 'function') return cssmap[tagName]();
    if (typeof cssmap[tagName] === 'object') return cssmap[tagName];
  };

  return (
    <ReactMarkdown
      children={markdown}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      components={{
        a: ({ ...props }) => (
          <Anchor className={prefix('a')} css={inlineCSS('a')} {...props} />
        ),
        blockquote: ({ ...props }) => (
          <Blockquote
            className={prefix('blockquote')}
            css={inlineCSS('blockquote')}
            {...props}
          />
        ),
        pre: ({ ...props }) => (
          <Pre className={prefix('pre')} css={inlineCSS('pre')} {...props} />
        ),
        code: ({ ...props }) => (
          <Code className={prefix('code')} css={inlineCSS('code')} {...props} />
        ),
        h1: ({ ...props }) => (
          <Hn depth="h1" className={prefix('h1')} css={inlineCSS('h1')} {...props} />
        ),
        h2: ({ ...props }) => (
          <Hn depth="h2" className={prefix('h2')} css={inlineCSS('h2')} {...props} />
        ),
        h3: ({ ...props }) => (
          <Hn depth="h3" className={prefix('h3')} css={inlineCSS('h3')} {...props} />
        ),
        h4: ({ ...props }) => (
          <Hn depth="h4" className={prefix('h4')} css={inlineCSS('h4')} {...props} />
        ),
        h5: ({ ...props }) => (
          <Hn depth="h5" className={prefix('h5')} css={inlineCSS('h5')} {...props} />
        ),
        h6: ({ ...props }) => (
          <Hn depth="h6" className={prefix('h6')} css={inlineCSS('h6')} {...props} />
        ),
        ol: ({ ...props }) => (
          <OL className={prefix('ol')} css={inlineCSS('ol')} {...props} />
        ),
        ul: ({ ...props }) => (
          <UL className={prefix('ul')} css={inlineCSS('ul')} {...props} />
        ),
        li: ({ ...props }) => (
          <LI className={prefix('li')} css={inlineCSS('li')} {...props} />
        ),
        table: ({ ...props }) => (
          <Table className={prefix('table')} css={inlineCSS('table')} {...props} />
        ),
        img: ({ ...props }) => (
          <Image className={prefix('img')} css={inlineCSS('img')} {...props} />
        ),
        p: ({ ...props }) => <P className={prefix('p')} css={inlineCSS('p')} {...props} />
      }}
    />
  );
}
