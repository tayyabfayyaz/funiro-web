import { defineType } from 'sanity';

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
              },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'productImage',
            title: 'Product Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'discountPercentage',
            title: 'Discount Percentage',
            type: 'number',
        },
        {
            name: 'isNew',
            title: 'Is New',
            type: 'boolean',
        },
    ],
});