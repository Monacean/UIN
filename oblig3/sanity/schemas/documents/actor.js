const actor = {
    title: 'Actor',
    name: 'actor',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Actors name',
            validation: (Rule)=>Rule.required(),
        }
    ]
}

export default actor;