import Logo from '@/layouts/Studio/Logo';
import StudioNavbar from '@/layouts/Studio/StudioNavbar';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './src/schemas';
import { myTheme } from './theme';

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== undefined
    ? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID.toString()
    : '';
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET !== undefined
    ? process.env.NEXT_PUBLIC_SANITY_DATASET.toString()
    : '';

export default defineConfig({
  basePath: '/studio',
  name: 'BLOG_CONTENT_STUDIO',
  title: 'Blog app content studio',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
