export default () => ({ // eslint-disable-line

  // link file UUID
  id: '4100cf8e-34c0-11e7-bce4-9023f8c0fd2e',

  // canonical URL of the published page
  // https://ig.ft.com/americas-cup-2017 get filled in by the ./configure script
  url: 'https://ig.ft.com/americas-cup-2017',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2017-05-22T05:00:00Z'),

  headline: "Challengers aim to foil Oracle Team USA in America’s Cup",

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'In international sport’s oldest trophy, five high-tech boats are looking to overhaul defending champion Larry Ellison’s American team',

  topic: {
    name: 'Sport',
    url: 'https://www.ft.com/sport',
  },

  relatedArticle: {
    text: '',
    url: '',
  },

  mainImage: {
    title: '',
    description: '',
    credit: '',
    url: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A1b3a3922-3cb6-11e7-821a-6027b8a20f23?source=ig&width=1400',
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
  title: 'High tech challengers aim to foil Oracle Team USA in America’s Cup',

  // meta data
  description: 'In international sport’s oldest trophy, five high-tech boats are looking to overhaul defending champion Larry Ellison’s American team',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary_large_image',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A1b3a3922-3cb6-11e7-821a-6027b8a20f23?source=ig&width=1400',
socialHeadline: 'High tech challengers aim to foil Oracle Team USA in America’s Cup',
 socialSummary:  'High tech challengers aim to foil Oracle Team USA in America’s Cup',

  // TWITTER
twitterImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A1b3a3922-3cb6-11e7-821a-6027b8a20f23?source=ig&width=1400',
twitterCreator: '@ft',
 tweetText:  'High tech challengers aim to foil Oracle Team USA in America’s Cup',
 twitterHeadline:  'High tech challengers aim to foil Oracle Team USA in America’s Cup',

  // FACEBOOK
 facebookImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A1b3a3922-3cb6-11e7-821a-6027b8a20f23?source=ig&width=1400',
 facebookHeadline: 'High tech challengers aim to foil Oracle Team USA in America’s Cup',

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
