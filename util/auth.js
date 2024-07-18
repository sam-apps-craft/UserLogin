import axios from "axios";

const API_KEY = "AIzaSyCcqk9Avi0szoS0klDveF7EwUwQ_hl4S1Y";

async function authenticate(mode, email, password) {
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}";

  const response = await axios.prototype(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}
export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
