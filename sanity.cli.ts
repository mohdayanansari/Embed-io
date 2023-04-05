import { defineCliConfig } from 'sanity/cli';

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== undefined
    ? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID.toString()
    : '';
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET !== undefined
    ? process.env.NEXT_PUBLIC_SANITY_DATASET.toString()
    : '';

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
