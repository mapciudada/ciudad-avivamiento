export const qLatestYouTube = /* groq */ `
*[_type=="youtubeVideo"]|order(publishedAt desc)[0...6]{
  _id, title, videoId, publishedAt,
  "thumbnail": thumbnailUrl, "url": url
}
`;

export const qLatestInstagram = /* groq */ `
*[_type=="instagramPost"]|order(timestamp desc)[0...6]{
  _id, caption, imageUrl, permalink, timestamp
}
`;
