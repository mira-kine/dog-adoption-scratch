## Services:

- [x] fetchDogs
- [x] fetchDogById

## Routing:

- [x] /dogs
- [x] /dogs/:id

## App Flow:

### Dogs Home View

- Dogs

  - [x] useState/useEffect to fetchDogs data

- DogList
  - [x] .map out dogList
- [x] render dog links
- [x] render images for each dog

### Dog View

- [x] useState/useEffect to fetchDogs by Id
- [x] DogDetail component
- [x] useParams() to match params by id to render individual dog details

To do 01/05/21:

- [x] add routes for edit page
- [x] add view DogEdit.js
- [x] set up states using useState({})
- [x] useEffect with fetchDogById
- [x] useParams
- [x] create component DogForm, pass in spread out props
- [x] create form with labels and input
- [x] updateDog function that takes in the key you want to update + value
  - have the value set into the key, set the state back as a new object using a spread operator
- [x] services folder: create an updateDogDb - updating dog to database
- [ ] submit button sends data to supabase using a click Handler that will update
- [ ] create submit handle with an async function that will call db

- [ ] add route for admin page (creating a new dog vs updating)
