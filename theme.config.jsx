export default {
  logo: <strong>Showcase.js</strong>,
  project: {
    link: "https://github.com/yuan-alex/showcase",
  },
  docsRepositoryBase:
    "https://github.com/yuan-alex/showcase/blob/main/packages/site",
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Showcase.js",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:image" content="/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  ),
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="/" target="_blank">
          Alex Yuan
        </a>
        .
      </span>
    ),
  },
};
