// theme.config.js
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  projectLink: 'https://github.com/OasisNetworks/event-bridge-site', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/OasisNetworks/event-bridge-site/blob/main', // base URL for the docs repository
  titleSuffix: ' – Event Bridge',
  nextLinks: true,
  prevLinks: true,
  font: true,
  search: true,
  // customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  floatTOC: true,
  footerText: `MIT ${new Date().getFullYear()} © Fred Liang.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 80 80"
      >
      <mask
          id="mask0_26_116"
          style={{ maskType: "alpha" }}
          width="80"
          height="80"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
      >
          <rect width="80" height="80" fill="#C4C4C4" rx="24"></rect>
      </mask>
      <g mask="url(#mask0_26_116)">
          <path fill="#fff" d="M0 0H80V80H0z"></path>
          <path fill="#1A91FF" d="M0 0H80V80H0z"></path>
          <circle
          cx="31.424"
          cy="45.559"
          r="14.424"
          fill="#fff"
          fillOpacity="0.6"
          ></circle>
          <circle
          cx="48.576"
          cy="35.424"
          r="14.424"
          fill="#fff"
          fillOpacity="0.6"
          ></circle>
        </g>
      </svg>
      <span style={{paddingLeft:10, fontWeight:"bold",fontFamily:"Product Sans",lineHeight:"normal"}}>Event<br/>Bridger</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
  unstable_faviconGlyph: '⚡',
}