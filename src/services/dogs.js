import { checkError, client } from './client';
export async function fetchDogs() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/dogs?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}

export async function fetchDogById(id) {
  const resp = await client.from('dogs').select('*').match({ id }).single();
  return checkError(resp);
}

export async function updateDog(selectedDog) {
  const resp = await client.from('dogs').update(selectedDog).eq('id', selectedDog.id);
  return checkError(resp);
}

export async function createDog(selectedDog) {
  const resp = await client.from('dogs').insert({
    name: selectedDog.name,
    age: selectedDog.age,
    image: selectedDog.image,
    breed: selectedDog.breed,
    bio: selectedDog.bio,
  });
  return resp;
}

export async function deleteDog(id) {
  const resp = await client.from('dogs').delete().match({ id: id });
  return checkError(resp);
}
