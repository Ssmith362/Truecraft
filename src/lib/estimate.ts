/**
 * Rules shared by the estimate form (browser) and /api/estimate (server), so
 * the two can never disagree about what a valid request looks like. The
 * browser check is a convenience; the server check is the one that counts.
 */

export const LIMITS = {
  name: 100,
  phone: 40,
  email: 160,
  location: 120,
  service: 80,
  message: 4000,
  /** Photos are downscaled in the browser before upload. */
  maxPhotos: 4,
  maxPhotoBytes: 1_500_000,
  /** Kept under Vercel's 4.5MB request body limit with room for the fields. */
  maxTotalPhotoBytes: 3_800_000,
} as const;

export const PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"] as const;

export const CONTACT_METHODS = ["Call", "Text", "Email"] as const;
export type ContactMethod = (typeof CONTACT_METHODS)[number];

/** Catch-all option at the end of the service list. */
export const OTHER_SERVICE = "Several things / not sure";

const PHONE_RE = /^[\d\s().+-]{10,}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type EstimateFields = {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  message: string;
  contactMethod: string;
};

export type FieldErrors = Partial<Record<keyof EstimateFields | "photos", string>>;

/** Nearly all form spam is a pitch with a link. A real visitor can just remove it. */
const HAS_LINK = /(https?:\/\/|www\.)/i;

export function validateFields(f: EstimateFields, allowedServices: string[]): FieldErrors {
  const errors: FieldErrors = {};
  const digits = f.phone.replace(/\D/g, "");

  if (f.name.length < 2) errors.name = "Please enter your name.";
  if (!PHONE_RE.test(f.phone) || digits.length < 10) {
    errors.phone = "Please enter a phone number with area code, like 509-555-0123.";
  }
  if (f.email && !EMAIL_RE.test(f.email)) {
    errors.email = "That email address does not look right. Check it, or leave it blank.";
  }
  if (f.contactMethod === "Email" && !f.email) {
    errors.email = "Add an email address, or choose call or text instead.";
  }
  if (f.location.length < 3) errors.location = "Please enter your ZIP code or neighborhood.";
  if (!allowedServices.includes(f.service)) errors.service = "Please choose the closest match.";
  if (f.message.length < 10) {
    errors.message = "A sentence or two about the project helps Matt give you a useful answer.";
  } else if (HAS_LINK.test(f.message)) {
    errors.message = "Please leave web links out of the description.";
  }
  if (!errors.name && HAS_LINK.test(f.name)) errors.name = "Please enter your name, not a web address.";
  return errors;
}

export function validatePhotos(photos: { size: number; type: string }[]): string | undefined {
  if (photos.length > LIMITS.maxPhotos) return `Please attach up to ${LIMITS.maxPhotos} photos.`;
  if (photos.some((p) => !PHOTO_TYPES.includes(p.type as (typeof PHOTO_TYPES)[number]))) {
    return "Photos need to be JPEG, PNG or WebP images.";
  }
  if (photos.some((p) => p.size > LIMITS.maxPhotoBytes)) {
    return "One of those photos is too large to send. Try a smaller one.";
  }
  if (photos.reduce((sum, p) => sum + p.size, 0) > LIMITS.maxTotalPhotoBytes) {
    return "Those photos are too large to send together. Try removing one.";
  }
  return undefined;
}
