import { Helmet } from "react-helmet-async";

type SEO_component_type = {
  title: string;
  description: string;
  siteName?: string;
};

/**
 * SEO component to manage metadata for specific webpages
 * @param title title of the specific page (required)
 * @param description description of the specific page (required)
 * @param siteName default website name - DON'T modify this outside of SEO.tsx component
 */
export default function SEO({
  title,
  description,
  siteName = "OraOraCalc",
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