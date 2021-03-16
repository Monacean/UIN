const movie = {
    title: 'Movie',
    name: 'movie',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Movie',
            type: 'string',
            description: 'Movie title',
            validation: (Rule)=>Rule.required(),
        },
        {
            name: 'actor',
            title: 'Actor',
            type: 'reference',
            description: 'Actors name', 
            to: [{type: 'actor'}],
            validation: (Rule)=>Rule.required(),
        }
    ]
}

export default movie;