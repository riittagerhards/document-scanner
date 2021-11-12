export default async function getDocuments() {
  const response = await fetch('https://json-server.machens.dev/docs');
  const documents = await response.json();
  return documents;
}
