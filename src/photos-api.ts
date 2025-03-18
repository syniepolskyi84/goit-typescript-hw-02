import axios, { AxiosResponse } from 'axios';

export interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface UnsplashResponse {
  results: Photo[];
}

export async function searchPhotos(query: string, page: number): Promise<Photo[]> {
  try {
    const response: AxiosResponse<UnsplashResponse> = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query,
        page,
        per_page: 12,
        client_id: '-NP4tWjTQ-v-ovL0tV4c7m8RBIiEM0fa74HhXPxjWwU',
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error();
  }
}