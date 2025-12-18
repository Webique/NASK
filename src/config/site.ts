export const siteConfig = {
  links: {
    instagram: "https://www.instagram.com/nask_nanofiber",
    linkedin: "https://www.linkedin.com/company/nask-nanofiber",
    x: "https://x.com/nask_nanofiber",
    whatsapp: "https://wa.me/966504563212"
  },

  support: {
    phone: "+966 504563212",
    email: "info@nask-mena.com",
    email2: "sales@nask-mena.com",
    whatsapp: "+966504563212"
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`
};

export type SiteConfig = typeof siteConfig;
