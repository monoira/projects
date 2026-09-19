import { Box, Container, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import heroImage from "../assets/hero.png";

function HomeRoute() {
  const { t } = useTranslation(["home"]);

  return (
    <>
      <SEO
        title={t("home:htmlTag.title")}
        description={t("home:htmlTag.description")}
      />

      <Container component="main" sx={{ paddingY: "5vh" }}>
        <Typography
          component="h1"
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "16px" }}
        >
          {t("home:hero.title")}
        </Typography>
        <Typography>{t("home:hero.subtitle")}</Typography>
        <Typography>{t("home:hero.description")}</Typography>
        <Box
          component="img"
          src={heroImage}
          alt={t("home:hero.alt")}
          sx={{
            width: "100%",
            borderRadius: "8px",
            marginTop: "32px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        />
        <Typography
          component="h2"
          variant="h4"
          sx={{ marginTop: "32px", paddingBottom: "16px" }}
        >
          {t("home:examples")}:
        </Typography>
        <Typography>
          <Link href="/program/N4IgdiBcILIJ4AIBqBaAKgQwA4FMBOCA4nALYIAKeA9gOZ4YkgA0IAJlANqgTQlVisMcZiDxQAZhgA2AZxwscnblBAAmBCQCWYAK4AXHDIRVxCAEaaAxnEtTtNETM4cADE11SpTAIwBdXwC+TMrQMgCOOhh6js7ebgDMCf5BIWw6JGY4nggA6niaMnoIAMI6eFIxkBwccT6qTPHJweAqeDgAbvhyCKzpmdl5BUWl5ZXVtQAcDU2p1CQYYAhSODQI9AWKLE5VNW4eXo2Bgc08IHo6hoLCLGKQkrLyIIpVqZYYZstLUfjSaxgbY12TCmhxSLWgOAAXuYMAQsG0MJYABb4BCWMoVLaxNy1UEnFSZMDIhDwwxOLE7XFJY6pXoZLJSBAyJF4HQOCnjBLUsGnKidPAojCsNHvT56fKWHBYIw4AAeBjAMk0-EBtQALNz8dBqAB3ckgbac4HcmngkA6nCsMCXIQiW7ii4KTim056JFlGRXO0SaRyJ0vM3qLS6AxGEzmKw2OxgdkG5x7HSeHwzM3hSLRDlAxLTF0qOn9RmDQolDGqnH1PGzDpdHA9PoM3L5YsjTFxyluEEp05zBZLFZ-AGZ2r7HMBXPQcT5L03H0Pf1cM1vD61qTfeiM9ZyMvA0dap7QsywkkI5Go9GjIc4zWpQnE0kyfWGrPXs35hvM1mxp9U3epPn4QVhSXMUJSlGV5RwRVlQgS8mA1X8zV1R9sWNUdxwNKIymnUQoAdR5ng4dCZB0ARbRnSA8PnI4AiAA">
            My V-Taper Gym Program
          </Link>
        </Typography>
        <Typography>
          <Link href="/program/N4IgdiBcIAoK4GcAWACeAbdKAyBTA5gigGwC0AIgIYCeKAygA7oCWALiADQgAmUA2qAjQAtgHsw3GpxAAnKADNK6BLi65+gqCABCuMAGNUMGbgQJp5yHz7EOARgAMDjgBYAum4C+HTdADyAG64Mki4lNxoJmYW-HwAHBzEzgDMHt6+IACSBixguCjkcMIARsW4mJGm5lyW1o4cAEwJqV4+4FrYlKzBSigASpTMKtUgtXx2Dfa2Lent0AAqMsz6uAxoiEjcogDuYCNjE64paW1CIIHBoeEoi8urKACiAB7de8ziMVbjkw0ujWmtDKsOCmSTUaRySCKZSqEDqKwZchhbgseTsGqxACs9hcx0BcxAnVY60wW12n2sCTs9Xc+LO2koMjKFT6Owp8Q4AE48bMzgAxSgrEnKdl2bHJHmnLQMpnlLAAYTgMnQoucmMlGQAEpRhMJgihFcrRT8-g0AbytNtcNw8ggwRCFEoVGoNAS6ABHOBddm2CbOWkW6Cs4SUMDMUMFZGo9GjWJUpwcGZS6B4fCVaIYr71BoJpMZVMGpUqzN1SbqxMnDJ0Vih7jMMBp+VKeT9QYqUXYxz+83JkCsJBKu1SLiQ6HOuGus4XELI9P7WK2JKuSsE7L6XL5GXMrDGKrshIAdg1BMKJW3KD56GopmNjWPZyJPSwAyGN5L4070xXZ3l6FEKhQABxJY1l0AwjCiecs2cOJ7y0W4VjWchmAYKDKTvf4vDpLR5CWe0R0dGEXQRAktzlfo2XfWxuWXbCUy6YUyQgd96mpODoDoMJugiJtinQfJWW2VUOFgis6JAPowhkSN0GJS9rzQj8cTEwNYBMQVQmkw1i1jaCjhU3teP4wsjRYyZcUwzxxIQLolXw2RCPHeEBAJPkZHEYkPS9GMxgSGiA17AB1JQAGt6zTbA4AbN9dNLRo-jzAkC2eV4EHeZjYu+RJ2MJAgTJ0g4yxyziumtA1m1bV8OxE7ssNUhAovsyFWBkEFiL4OqgA">
            Push Pull Legs 6-Day Split
          </Link>
        </Typography>
      </Container>
    </>
  );
}

export default HomeRoute;
