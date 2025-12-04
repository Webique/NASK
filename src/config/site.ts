export const siteConfig = {
  links: {
    instagram: "https://www.instagram.com/nask_nanofiber",
    linkedin: "https://www.linkedin.com/company/nask-nanofiber",
    x: "https://x.com/nask_nanofiber",
    whatsapp: "https://wa.me/966568081744"
  },

  support: {
    phone: "+966 56 808 1744",
    email: "monzer@sarabeelmedical.com",
    email2: "raghad@sarabeelmedical.com",
    whatsapp: "+966568081744"
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`
};

export type SiteConfig = typeof siteConfig;
