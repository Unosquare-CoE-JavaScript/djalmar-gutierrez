class Book {
  constructor(public author: string) {}
}

class Movie {
  constructor(public director: string) {}
}

class Song {
  constructor(public artist: string) {}
}

interface EntityMap {
  book: Book;
  movie: Movie;
  song: Song;
}

class Store {
  get<K extends keyof EntityMap>(type: K): EntityMap[K] {
    return null;
  }
  getAll<K extends keyof EntityMap>(type: K): EntityMap[K][] {
    return [];
  }
  create<K extends keyof EntityMap>(type: K, data: EntityMap[K]): void {
    return null;
  }
  update<K extends keyof EntityMap>(
    type: K,
    id: string,
    data: Partial<EntityMap[K]>
  ) {
    return null;
  }
}

const store = new Store();

store.get('book');
store.getAll('book');
