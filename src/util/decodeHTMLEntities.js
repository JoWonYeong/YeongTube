export default function decodeHTMLEntities(text) {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(
    `<!doctype html><body>${text}`,
    'text/html'
  ).body.textContent;
  return decodedString;
}