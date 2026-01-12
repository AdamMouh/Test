import { type SchemaTypeDefinition } from 'sanity'
import { prayerTimes } from './prayerTimes'
import { news } from './news'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [prayerTimes, news],
}
