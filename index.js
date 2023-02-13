async function fetchEmail() {
  try {
    const response = await fetch("http://localhost:3000/api");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return new Error("Error", error);
  }
}

const getRandomEmail = async () => {
  const email = await fetchEmail();
  console.log(email);
};

getRandomEmail();
