import NextHead from 'next/head';
import faviconIco from './assets/favicon.ico';
import faviconSvg from './assets/favicon.svg';

export const Head = () => {
  return (
      <NextHead>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"
        />
        <title>Obs Notes</title>

        <link
          rel="icon"
          href={faviconIco.src}
          sizes="any"
        />
        <link
          rel="icon"
          href={faviconSvg.src}
          type="image/svg+xml"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
          integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
          crossOrigin="anonymous"
        />
      </NextHead>
  );
};
