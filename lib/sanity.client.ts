import { createClient } from 'next-sanity';

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== undefined
    ? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID.toString()
    : '';
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET !== undefined
    ? process.env.NEXT_PUBLIC_SANITY_DATASET.toString()
    : '';
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION !== undefined
    ? process.env.NEXT_PUBLIC_SANITY_API_VERSION.toString()
    : '';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, //TODO: use ternary when in prod if in prod set the live cdn
});
