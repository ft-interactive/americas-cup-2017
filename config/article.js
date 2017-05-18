export default () => ({ // eslint-disable-line

  // link file UUID
  id: '28bb464a-34c3-11e7-bce4-9023f8c0fd2e',

  // canonical URL of the published page
  // https://ig.ft.com/americas-cup-2017 get filled in by the ./configure script
  url: 'https://ig.ft.com/americas-cup-2017',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: "Challengers aim to foil Oracle Team USA in America’s Cup",

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'The oldest trophy in sport gets under way, with five teams looking to overhaul Larry Ellison’s boat',

  topic: {
    name: 'FT Data',
    url: 'https://www.ft.com/ft-data',
  },

  relatedArticle: {
    text: '',
    url: '',
  },

  mainImage: {
    title: '',
    description: '',
    credit: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Graham Parrish', url: 'https://www.ft.com/search?q=graham+parrish'},
    { name: 'Simon Greaves', url: 'https://www.ft.com/stream/authorsId/OWMyZTNlOGMtYThiMi00YTAxLTlhNGEtM2E0NGUxNTljYjQy-QXV0aG9ycw==' },
  ],

  // Appears in the HTML <title>
  title: '',

  // meta data
  description: '',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialSummary:  '',

  // TWITTER
  // twitterImage: '',
  // twitterCreator: '@individual's_account',
  // tweetText:  '',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
