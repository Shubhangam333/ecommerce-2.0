import Categorycard from "./Categorycard";

const categoryItems = [
  {
    images:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Men-Website-tile-big-one_2_1_JKWEboF.jpg?format=webp&w=480&dpr=1.5",
    url: "/",
    class: "grid-col-4",
  },
  {
    images:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Men-Website-tile-big-one_1_1_p80MKA2.jpg?format=webp&w=480&dpr=1.5",
    url: "/",
    class: "grid-col-4",
  },
  {
    images:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Men-Website-tile-big-one_1_xyWYj8R.jpg?format=webp&w=480&dpr=1.5",
    url: "/",
    class: "grid-col-4",
  },
  {
    images:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_Tushar_men-version_3_3_yRDqPWu.jpg?format=webp&w=480&dpr=1.5",
    url: "/",
    class: "grid-col-3",
  },
  {
    images:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_Tushar_men-version_1_2_b2UlLgM.jpg?format=webp&w=480&dpr=1.5",
    url: "/",
    class: "grid-col-3",
  },
  {
    images:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_Tushar_men-version_4_3_Y6fz2Gh.jpg?format=webp&w=480&dpr=1.5",
    url: "/",
    class: "grid-col-3",
  },
  {
    images:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_Tushar_men-version_2_3_KfOLQfN.jpg?format=webp&w=480&dpr=1.5",
    url: "/",
    class: "grid-col-3",
  },
];

const Categorylisting = () => {
  return (
    <section className="p-4 category-listing w-full ">
      {categoryItems.map((catItem) => (
        <Categorycard catItem={catItem} key={Math.floor(Math.random() * 100)} />
      ))}
    </section>
  );
};

export default Categorylisting;
