import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'f1c8015c8dd847219294f80863b7802e',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Atropa Mariana Trench',
  domain: 'atropa.blog',
  author: 'Itz_black_007 & minightmadwalk',

  // open graph metadata (optional)
  description: '',

  // social usernames (optional)
  // twitter: '',
  // github: '',
  // linkedin: '',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:'',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'a',
  //     pageId: 'f1c8015c8dd847219294f80863b7802e',
  //   },
  //   {
  //     title: 'b',
  //     pageId: 'f1c8015c8dd847219294f80863b7802e',
  //     menuPage: true,
  //   },
  // ],

  // -------- custom configs (2skydev) -------------

  // date-fns format string
  dateformat: 'yyyy MM dd',

  // post page - hidden properties
  hiddenPostProperties: ['', '', ' '],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: false,
});
