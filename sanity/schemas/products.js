export default {
    name: 'products',
    title:'products',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLenght: 90
            }
        },
        {
            name: 'price',
            title: 'price',
            type: 'array',
            of: [{type: 'number'}]
        },
        {
            name: 'description',
            title: 'description',
            type: 'string',
        }
    ]
}