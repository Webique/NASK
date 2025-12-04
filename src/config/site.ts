export const siteConfig = {
  links: {
    instagram: "https://www.instagram.com/basmatallnidam",
    snapchat: "https://www.snapchat.com/@basmatallnidam",
    x: "https://x.com/basmatallnidam",
    tiktok: "https://www.tiktok.com/@basmatallnidam",
    whatsapp: "https://wa.me/966507058588"
  },

  support: {
    phone: "+966-50 705 8588",
    email: "info@basmet-alnezam.sa",
    whatsapp: "+966507058588"
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`
};

export type SiteConfig = typeof siteConfig;
