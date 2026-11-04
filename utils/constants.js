export const YT_VIDOES_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  import.meta.env.VITE_Google_API_KEY;

export const YT_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Queryhttp://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 10;
