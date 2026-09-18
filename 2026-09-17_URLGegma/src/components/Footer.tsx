import { Box, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        minHeight: 64,
        display: "grid",
        placeItems: "center",
        borderTop: 1,
        borderColor: "divider",
        fontWeight: "bold",
      }}
    >
      <Link href="https://github.com/monoira" target="_blank">
        monoira
      </Link>
    </Box>
  );
}

export default Footer;
