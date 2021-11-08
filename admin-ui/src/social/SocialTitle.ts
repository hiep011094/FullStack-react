import { Social as TSocial } from "../api/social/Social";

export const SOCIAL_TITLE_FIELD = "title";

export const SocialTitle = (record: TSocial): string => {
  return record.title || record.id;
};
