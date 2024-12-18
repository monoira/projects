import { Helmet } from "react-helmet-async";

type SEO_component_type = {
  title: string;
  description: string;
  siteName?: string;
};

export default function SEO({
  title,
  description,
  siteName = "percento",
}: SEO_component_type) {
  return (
    <Helmet>
      {/* || Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* || Facebook open graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* || Twitter tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={siteName} />
    </Helmet>
  );
}
