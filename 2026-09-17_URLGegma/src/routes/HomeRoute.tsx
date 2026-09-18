import { Box, Container, Typography } from "@mui/material";
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
          URLGegma is a client-side gym program creator
        </Typography>
        <Typography>
          Create gym program and upon saving it, URLGegma will create hash of it
        </Typography>
        <Typography>
          You can share URL link of the workout program around easily in a
          reproducible manner
        </Typography>
        <Typography>
          Program can be accessed from following endpoint:
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>/program/HASH</Typography>
        <Box
          component="img"
          src={heroImage}
          alt={"image, which is showcasing how site works"}
          sx={{
            width: "100%",
            borderRadius: "8px",
            marginTop: "32px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        />
      </Container>
    </>
  );
}

export default HomeRoute;
