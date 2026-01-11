import { defineField, defineType } from 'sanity'

export const news = defineType({
    name: 'news',
    title: 'Actualités & Événements',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Date de publication',
            type: 'datetime',
        }),
        defineField({
            name: 'mainImage',
            title: 'Image principale',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'excerpt',
            title: 'Extrait (Court)',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'body',
            title: 'Contenu',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
})
