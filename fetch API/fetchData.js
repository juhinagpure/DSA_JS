// This uses the Fetch API to get data from a placeholder API
export async function fetchData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
