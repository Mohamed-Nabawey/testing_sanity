import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import {assist} from '@sanity/assist'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {documentInternationalization} from '@sanity/document-internationalization'
import {taxonomyManager} from 'sanity-plugin-taxonomy-manager'
import {wistiaInput} from 'sanity-plugin-wistia-input'
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";
import { catsWidget } from "sanity-plugin-dashboard-widget-cats";
import { HelloWorldAction } from "./actions/helloWorld"
import { HelloWorldBadge } from "./badges/helloWorld"
import {media} from 'sanity-plugin-media'

import {structure} from './structure'
import {schemaTypes} from './schemaTypes'
import {locate} from './locate'
import OnshapeIcon from './components/OnshapeIcon';
import NewNav from './components/NewNav';

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

const translatedTypes = ['post', 'page', 'featurePage', 'blog']

export default defineConfig({
  name: 'default',
  title: 'Onshape.com',
  projectId,
  dataset,
  icon: OnshapeIcon,
  plugins: [
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'de', title: 'German'},
      ],
      schemaTypes: translatedTypes,
      languageField: 'language',
    }),
    structureTool({structure}),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
      locate,
    }),
    visionTool(),
    unsplashImageAsset(),
    assist({
      translate: {
        document: {
          // The name of the field that holds the current language
          // in the form of a language code e.g. 'en', 'fr', 'nb_NO'.
          // Required
          languageField: 'language',
          // Optional extra filter for document types.
          // If not set, translation is enabled for all documents
          // that has a field with the name defined above.
          documentTypes: ['post', 'page', 'featurePage'],
        },
      },
    }),
    taxonomyManager({
      // Optional: Set a Base URI to use for new concepts & concept schemes
      baseUri: 'https://example.com/',
    }),
    wistiaInput({
      token: `${process.env.SANITY_STUDIO_WISTIA_TOKEN}` || "",
    }),
    dashboardTool({ widgets: [
      sanityTutorialsWidget(),
      projectInfoWidget(),
      projectUsersWidget(),
      catsWidget(),
    ]}),
    media(),
  ],
  document: {
    //First in the returned array is the action that shows up on the 'publish' button
    //see: https://www.sanity.io/docs/document-actions
    actions: (prev, context) => {return context.schemaType === 'featurePage' ? [HelloWorldAction, ...prev] : prev},
    badges: (prev, context) => {return context.schemaType === 'featurePage' ? [HelloWorldBadge, ...prev] : prev},
  },
  studio: {
    //customize the studio layout and components
    components: {
      navbar: NewNav,
    }
  },
  schema: {
  types: schemaTypes,
  // Hides the default 'new document' action for translated documents
  templates: (prev) => prev.filter((template) => !translatedTypes.includes(template.id)),  },
})
