import { groq } from 'next-sanity'

export const PRAYER_TIMES_QUERY = groq`*[_type == "prayerTimes"][0] {
  date,
  fajr,
  dhuhr,
  asr,
  maghrib,
  isha,
  jumuah
}`

export const NEWS_QUERY = groq`*[_type == "news"] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt
}`
