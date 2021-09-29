import fetch from 'node-fetch';

export async function get(url: string): Promise<unknown> {
  const secureUrl = url.replace('http://', 'https://');
  const response = await fetch(secureUrl);
  const data = await response.json();

  if (response.status >= 300) {
    return Promise.reject(data);
  }

  return data;
}
