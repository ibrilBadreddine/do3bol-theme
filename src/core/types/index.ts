export interface CollectionDefinition {
  id: string;
  name?: string;
}

export interface ProductDefinition {
  id: string;
  title?: string;
  img: string;
  price: { before?: number; after: number };
  collection_id: string;
}
