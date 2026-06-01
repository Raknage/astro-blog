// Pages

export type Pages = Page[];

export interface Page {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Meta;
  difl_page_category: string[];
  class_list: string[];
  _links: Links;
}

export interface Guid {
  rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Meta {
  _et_pb_use_builder: string;
  _et_pb_old_content: string;
  _et_gb_content_width: string;
  footnotes: string;
}

export interface Links {
  self: Self[];
  collection: Collection[];
  about: About[];
  author: Author[];
  replies: Reply[];
  "version-history": VersionHistory[];
  "predecessor-version": PredecessorVersion[];
  "wp:attachment": WpAttachment[];
  "wp:term": WpTerm[];
  curies: Cury[];
}

export interface Self {
  href: string;
  targetHints: TargetHints;
}

export interface TargetHints {
  allow: string[];
}

export interface Collection {
  href: string;
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Reply {
  embeddable: boolean;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface WpAttachment {
  href: string;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

//Posts

export type Posts = Post[];

export interface Post {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: string[];
  class_list: string[];
  _links: Links;
  [key: string]: unknown;
}

export interface Guid {
  rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Meta {
  _et_pb_use_builder: string;
  _et_pb_old_content: string;
  _et_gb_content_width: string;
  footnotes: string;
}

export interface Links {
  self: Self[];
  collection: Collection[];
  about: About[];
  author: Author[];
  replies: Reply[];
  "version-history": VersionHistory[];
  "predecessor-version": PredecessorVersion[];
  "wp:featuredmedia": Featuredmedum[];
  "wp:attachment": WpAttachment[];
  "wp:term": WpTerm[];
  curies: Cury[];
}

export interface Self {
  href: string;
  targetHints: TargetHints;
}

export interface TargetHints {
  allow: string[];
}

export interface Collection {
  href: string;
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Reply {
  embeddable: boolean;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface Featuredmedum {
  embeddable: boolean;
  href: string;
}

export interface WpAttachment {
  href: string;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

// media

export interface FeaturedMedia {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Meta;
  class_list: string[];
  description: Description;
  caption: Caption;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  post: number;
  source_url: string;
  _links: Links;
}

export interface Guid {
  rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Meta {
  _et_pb_use_builder: string;
  _et_pb_old_content: string;
  _et_gb_content_width: string;
}

export interface Description {
  rendered: string;
}

export interface Caption {
  rendered: string;
}

export interface MediaDetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: Sizes;
  image_meta: ImageMeta;
}

export interface Sizes {
  medium: Medium;
  thumbnail: Thumbnail;
  "trp-custom-language-flag": TrpCustomLanguageFlag;
  "et-pb-post-main-image": EtPbPostMainImage;
  "et-pb-portfolio-image": EtPbPortfolioImage;
  "et-pb-portfolio-module-image": EtPbPortfolioModuleImage;
  "et-pb-gallery-module-image-portrait": EtPbGalleryModuleImagePortrait;
  "et-pb-image--responsive--phone": EtPbImageResponsivePhone;
  full: Full;
}

export interface Medium {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
}

export interface Thumbnail {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
}

export interface TrpCustomLanguageFlag {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
}

export interface EtPbPostMainImage {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
}

export interface EtPbPortfolioImage {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
}

export interface EtPbPortfolioModuleImage {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
}

export interface EtPbGalleryModuleImagePortrait {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
}

export interface EtPbImageResponsivePhone {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
}

export interface Full {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface ImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: string[];
}

export interface Links {
  self: Self[];
  collection: Collection[];
  about: About[];
  author: Author[];
  replies: Reply[];
  "wp:attached-to": WpAttachedTo[];
  curies: Cury[];
}

export interface Self {
  href: string;
  targetHints: TargetHints;
}

export interface TargetHints {
  allow: string[];
}

export interface Collection {
  href: string;
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Reply {
  embeddable: boolean;
  href: string;
}

export interface WpAttachedTo {
  embeddable: boolean;
  post_type: string;
  id: number;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}
