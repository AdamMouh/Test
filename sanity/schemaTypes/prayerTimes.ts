import { defineField, defineType } from 'sanity'

export const prayerTimes = defineType({
    name: 'prayerTimes',
    title: 'Horaires de Prières',
    type: 'document',
    fields: [
        defineField({
            name: 'date',
            title: 'Mois/Période',
            type: 'string',
            description: 'Ex: Janvier 2026',
        }),
        defineField({
            name: 'fajr',
            title: 'Fajr',
            type: 'string',
        }),
        defineField({
            name: 'dhuhr',
            title: 'Dhuhr',
            type: 'string',
        }),
        defineField({
            name: 'asr',
            title: 'Asr',
            type: 'string',
        }),
        defineField({
            name: 'maghrib',
            title: 'Maghrib',
            type: 'string',
        }),
        defineField({
            name: 'isha',
            title: 'Isha',
            type: 'string',
        }),
        defineField({
            name: 'jumuah',
            title: 'Jumu\'ah (Vendredi)',
            type: 'string',
        }),
    ],
})
