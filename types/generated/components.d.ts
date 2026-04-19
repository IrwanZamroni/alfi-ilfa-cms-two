import type { Schema, Struct } from '@strapi/strapi';

export interface ConsultingConsultingAndAdvisory
  extends Struct.ComponentSchema {
  collectionName: 'components_consulting_consulting_and_advisories';
  info: {
    displayName: 'Consulting & Advisory';
    icon: 'car';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

export interface ConsultingRegionWeCover extends Struct.ComponentSchema {
  collectionName: 'components_consulting_region_we_covers';
  info: {
    displayName: 'Region_We_Cover';
    icon: 'chartCircle';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    listRegion: Schema.Attribute.Component<'sections.list-region', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsAlfiInstitue extends Struct.ComponentSchema {
  collectionName: 'components_sections_alfi_institues';
  info: {
    displayName: 'AlfiInstitue';
    icon: 'alien';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsAlfiInstitue1 extends Struct.ComponentSchema {
  collectionName: 'components_sections_alfi_institue1s';
  info: {
    displayName: 'AlfiInstitue1';
    icon: 'alien';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    list: Schema.Attribute.Component<'sections.list', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsArticle extends Struct.ComponentSchema {
  collectionName: 'components_sections_articles';
  info: {
    displayName: 'Article';
  };
  attributes: {};
}

export interface SectionsArticleName extends Struct.ComponentSchema {
  collectionName: 'components_sections_article_names';
  info: {
    displayName: 'ArticleName';
  };
  attributes: {
    Category: Schema.Attribute.Text;
    Content: Schema.Attribute.Blocks;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    Published_Date: Schema.Attribute.Date;
    slug: Schema.Attribute.Text;
    Thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.Text;
  };
}

export interface SectionsCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards';
  info: {
    displayName: 'Card';
    icon: 'apps';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Title: Schema.Attribute.Text;
  };
}

export interface SectionsConsultingAndAdvisory1 extends Struct.ComponentSchema {
  collectionName: 'components_sections_consulting_and_advisory1s';
  info: {
    displayName: 'Consulting & Advisory1';
    icon: 'apps';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    listConsulting: Schema.Attribute.Component<
      'sections.list-consulting',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsGetInvolved extends Struct.ComponentSchema {
  collectionName: 'components_sections_get_involveds';
  info: {
    displayName: 'GetInvolved';
    icon: 'apps';
  };
  attributes: {
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.Text;
  };
}

export interface SectionsList extends Struct.ComponentSchema {
  collectionName: 'components_sections_lists';
  info: {
    displayName: 'list';
    icon: 'emotionUnhappy';
  };
  attributes: {
    listName: Schema.Attribute.String;
  };
}

export interface SectionsListConsulting extends Struct.ComponentSchema {
  collectionName: 'components_sections_list_consultings';
  info: {
    displayName: 'listConsulting';
  };
  attributes: {
    listConsulting: Schema.Attribute.RichText;
  };
}

export interface SectionsListName extends Struct.ComponentSchema {
  collectionName: 'components_sections_list_names';
  info: {
    displayName: 'ListName';
    icon: 'apps';
  };
  attributes: {
    Text: Schema.Attribute.Text;
  };
}

export interface SectionsListRegion extends Struct.ComponentSchema {
  collectionName: 'components_sections_list_regions';
  info: {
    displayName: 'listRegion';
    icon: 'archive';
  };
  attributes: {
    listRegion: Schema.Attribute.RichText;
  };
}

export interface SectionsListTech extends Struct.ComponentSchema {
  collectionName: 'components_sections_list_teches';
  info: {
    displayName: 'listTech';
    icon: 'sun';
  };
  attributes: {
    listTech: Schema.Attribute.RichText;
  };
}

export interface SectionsTechIntegrationGuidance
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_tech_integration_guidances';
  info: {
    displayName: 'Tech_Integration_Guidance';
    icon: 'book';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    listTech: Schema.Attribute.Component<'sections.list-tech', true>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'consulting.consulting-and-advisory': ConsultingConsultingAndAdvisory;
      'consulting.region-we-cover': ConsultingRegionWeCover;
      'sections.alfi-institue': SectionsAlfiInstitue;
      'sections.alfi-institue1': SectionsAlfiInstitue1;
      'sections.article': SectionsArticle;
      'sections.article-name': SectionsArticleName;
      'sections.card': SectionsCard;
      'sections.consulting-and-advisory1': SectionsConsultingAndAdvisory1;
      'sections.get-involved': SectionsGetInvolved;
      'sections.list': SectionsList;
      'sections.list-consulting': SectionsListConsulting;
      'sections.list-name': SectionsListName;
      'sections.list-region': SectionsListRegion;
      'sections.list-tech': SectionsListTech;
      'sections.tech-integration-guidance': SectionsTechIntegrationGuidance;
    }
  }
}
