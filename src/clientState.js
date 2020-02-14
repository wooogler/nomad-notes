export const defaults = {
  notes: [
    {
      __typename: 'Note',
      id:1,
      title: 'First',
      content: 'Second',
    }
  ]
};
export const typeDefs = [
  `
  extend schema {
    mutation: Mutation
  }
  extend type Query{
    notes: [Note]!
    note(id: Int!): Note
  }
  type Mutation{
    createNote(title: String!, content: String!): Note
    editNote(id: String!, title: String!, content: String!): Note
  }
  type Note {
    id: Int!
    title: String!
    content: String!
  }
  `
];
export const resolvers = {
  Query: {
    note: (_, {id}, { cache }) => {
      const noteId = cache.config.dataIdFromObject({
        __typename: 'Note', 
        id
      });
      console.log(noteId)
      return null;
    }
  }
};
