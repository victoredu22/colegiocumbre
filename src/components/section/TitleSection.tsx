import { Box, Typography } from "@mui/material";

interface titleProps {
  title: string;
  content?: string;
}
export const TitleSection = ({ title, content }: titleProps) => {
  return (
    <Box display="grid">
      <Typography
        variant="h4"
        color="primary"
        sx={{
          marginTop: { xs: "30px", md: "0px" },
          marginBottom: "0px",
        }}
        data-aos="fade-up"
      >
        {title}
      </Typography>
      <Typography sx={{ fontWeight: "700" }}>{content}</Typography>
    </Box>
  );
};
