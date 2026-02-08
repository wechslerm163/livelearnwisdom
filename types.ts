
export interface GuidanceResponse {
  identifiedStruggle: string;
  bibleVerse: string;
  citation: string;
  whatThisVerseMeans: string;
  whyThisMattersNow: string;
  gentleReflection: string;
}

export enum AppStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
