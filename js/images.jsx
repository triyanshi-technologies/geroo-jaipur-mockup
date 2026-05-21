/* images.jsx — curated Geroo Jaipur Shopify CDN URLs, mapped to design slots.
   All sourced from public product/banner images on geroojaipur.com. */

const G = (p, w = 900) => `https://geroojaipur.com/cdn/shop/files/${p}?width=${w}`;

const IMG = {
  // Videos sourced from geroojaipur.com/pages/sustainablity
  videos: {
    sustainability: 'https://cdn.shopify.com/videos/c/o/v/fe97a5fff3154143936c1710a2e34fbc.mp4',
    bandhani:       'https://cdn.shopify.com/videos/c/o/v/d861b03d6f0d4c60a272ddcd5ce4ee94.mp4',
  },
  // Hero collection slides
  hero: {
    bridal:   G('0J5A9242.jpg', 1400),                                  // Black lehenga w/ mukaish
    leheriya: G('SAKP-19667_3.jpg', 1400),                              // Yellow gota chiffon
    everyday: G('KSCK-24334_9_636d1097-b6db-4134-a737-29bf255c475a.webp', 1400), // White chanderi kurta
    festive:  G('0J5A9125.jpg', 1400),                                  // Red contemporary lehenga
  },

  // Founder / atelier hero
  founder: G('Meet_the_Founder-_website_1.png', 1400),

  // Sarees
  sarees: [
    G('Untitled-1copy.jpg', 900),                                       // Purple Gota
    G('Untitled-1copy_2124706d-1a9d-4265-834c-836270e743eb.jpg', 900),  // Off White Gota
    G('Untitled-1copy_5c586075-0b26-4e3e-9cae-9a7beccededa.jpg', 900),  // Green Gota
    G('SAKP-21642_1.jpg', 900),                                         // Pastel Pink Chiffon
    G('SAKP-19667_3.jpg', 900),                                         // Yellow Chiffon
    G('SAKP-23101.jpg', 900),                                           // Black Chiffon
    G('SAKP-22888_2.jpg', 900),                                         // Yellow-Grey Chiffon
    G('SAL-21654_1_73cda3e1-a13a-497d-83b9-c96376ef18c2.jpg', 900),     // Black Kota
  ],

  // Lehengas
  lehengas: [
    G('0J5A9242.jpg', 900),                                             // Black
    G('0J5A9221.jpg', 900),                                             // Off White
    G('0J5A9200.jpg', 900),                                             // Off White Kota
    G('0J5A9125.jpg', 900),                                             // Red Leheriya
    G('0J5A8932.jpg', 900),                                             // Yellow
    G('0J5A8785_74d2a6b8-9f93-44ec-ba78-63304663aedc.jpg', 900),         // Green
    G('0J5A8823.jpg', 900),                                             // Green Kota
    G('0J5A9067.jpg', 900),                                             // Pink Painted
  ],

  // Kurta sets
  kurtas: [
    G('KSCK-24334_9_636d1097-b6db-4134-a737-29bf255c475a.webp', 900),   // White Chanderi
    G('KSBH-24333_3.webp', 900),                                        // Maroon Kaftan
    G('KUSI-23083_7.webp', 900),                                        // Onion Pink Garara
    G('KSCK-24335_11.webp', 900),                                       // White Painted
    G('KUSI-23084_5.webp', 900),                                        // Golden
    G('KSBH-24332_1.webp', 900),                                        // Red Kaftan
    G('KSBH-24331_5.webp', 900),                                        // Black Kaftan
    G('KSBH-24330_4.webp', 900),                                        // Blue Kaftan
  ],
};

window.IMG = IMG;
