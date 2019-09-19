// eslint-disable
// this is an auto generated file. This will be overwritten

export const getReservation = `query GetReservation($id: ID!) {
  getReservation(id: $id) {
    id
    child
    guardian
    birthday
    schedule
    phone
    email
  }
}
`;
export const listReservations = `query ListReservations(
  $filter: ModelReservationFilterInput
  $limit: Int
  $nextToken: String
) {
  listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      child
      guardian
      birthday
      schedule
      phone
      email
    }
    nextToken
  }
}
`;
