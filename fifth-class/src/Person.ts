export interface Person {
  firstName: string;
  lastName: string;
  picUrl: string;
  uuid: string;
  email: string;
}

export interface PersonFromApi {
  name: { title: string; first: string; last: string };
  picture: { large: string };
  login: { uuid: string };
  email: string;
}

export const convertPersonFromApiToPerson = (
  personFromApi: PersonFromApi
): Person => {
  const {
    name: { first: firstName, last: lastName },
    picture: { large: picUrl },
    login: { uuid },
    email,
  } = personFromApi;

  return { firstName, lastName, picUrl, uuid, email };
};


export interface DataFromPeopleApi {
    results: PersonFromApi[]
}