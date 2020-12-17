import { v4 as uuidv4 } from 'uuid'; // generates random characters to serve as users id

// temporer list variable to hold users contents as there is no database for now
let users = []

// This function is called to create a users data
export const createUser = (req, res) => {
    const user = req.body;
 
    users.push({...user, id: uuidv4()});
 
    res.send(`User with the name ${user.firstName} has been added to the database.`)
 }

// This function is called to get the list of all users
 export const getUsers = (req, res) => {
    res.send(users);
}

// This function is called to get a single user from a list
export const getSingleUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);
      res.send(foundUser);
}

// This function is called to delete a single user from a list
export const deleteAuser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} has been deleted from the database.`);
}

// This function is called to update a single user from a list
export const updateAuser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id == id);

    if(firstName)user.firstName = firstName;
    if(lastName)user.lastName = lastName;
    if(age)user.age = age;
 
    res.send(`User with the id ${id} has been updated.`);
}