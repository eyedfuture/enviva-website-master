import NextHead from 'next/head';

const defaultDescription = '';
const defaultKeywords = '';
const defaultOGURL = '';
const defaultOGImage = '/public/assets/img/cover.jpg';

const date = new Date();
const time = date.getMilliseconds();

interface IProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  ogImage?: string;
}

const Head: React.FC<IProps> = ({
  title,
  description,
  keywords,
  url,
  ogImage,
}) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title ? `${title} | Enviva Me` : 'Enviva Me'}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description || defaultDescription} />
    <meta name="keywords" content={keywords || defaultKeywords} />

    <link rel="icon" type="image/png" href="/static/assets/img/favicon.png" />

    <meta property="og:url" content={url || defaultOGURL} />
    <meta property="og:title" content={title || ''} />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />
    <meta name="twitter:site" content={url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || defaultOGImage} />
    <meta property="og:image" content={ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:updated_time" content={`${time}`} />
  </NextHead>
);

export default Head;
