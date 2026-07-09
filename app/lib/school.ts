// Generic branding config for Tendo.
//
// Earlier builds included a school-specific Trainup route/config. That pilot path
// is now archived. Tendo is student-first and public-facing; future organisation
// branding should be added only after the core direct-to-student product is stable.

export interface SchoolConfig {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  logoText: string;
  primaryColor: string;
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
}

const DEFAULT_SCHOOL: SchoolConfig = {
  id: "tendo",
  name: "Tendo",
  shortName: "Tendo",
  tagline: "Study for Ugandan upper-primary learners",
  logoText: "Tendo",
  primaryColor: "#C25A3C",
};

export const SCHOOLS: Record<string, SchoolConfig> = {
  tendo: DEFAULT_SCHOOL,
};

export function getSchoolByPath(_pathname: string): SchoolConfig {
  return DEFAULT_SCHOOL;
}

export const DEFAULT = DEFAULT_SCHOOL;
