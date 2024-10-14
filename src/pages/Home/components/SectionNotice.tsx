import { Box, Grid, Typography } from "@mui/material";
import { TitleSection } from "../../../components/section/TitleSection";
import { typeSection } from "../../../utils/constants";
import { NoticeInterface } from "../../../interfaces/ProyectInterface";

interface titleProps {
  title: string;
  content?: string;
  items: NoticeInterface[];
  type: string;
}

export const SectionNotice = ({ title, content, items, type }: titleProps) => {
  return (
    <Box sx={{ marginTop: { xs: "10px", md: "100px" }, marginBottom: "100px" }}>
      <Box textAlign={"center"}>
        <TitleSection title={title} content={content} />
      </Box>

      <Box display="block" sx={{ padding: { xs: "5%", sm: "10%", md: "0%" } }}>
        <Grid
          container
          spacing={4}
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            justifyContent: "center",
          }}
        >
          {items != undefined &&
            items.map((item: NoticeInterface, index: number) => (
              <Grid md={2} item key={index}>
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      filter:
                        type === typeSection.PROYECT
                          ? "brightness(50%)"
                          : "brightness(100%)",
                      height: { xs: "auto", sm: "auto", md: "250px" },
                      width: "100%",
                    }}
                    alt="Your logo."
                    src={item.img}
                  />
                  <Typography color="black">{item.title}</Typography>

                  <Typography sx={{ color: "#898989" }}>
                    {item.content}
                  </Typography>

                  {/* <Box
                    sx={{
                      position: "absolute",
                      top: "70%",
                      width: "90%",
                      transform: "translateY(-50%)",

                      textAlign: "left",
                      color: "white",
                      backgroundColor: "rgba(112, 112, 112, 0.55)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "10px", md: "20px" },
                        width: "100%",
                        marginTop: "10px",
                        paddingLeft: "30px",
                        marginBottom: "10px",
                      }}
                    >
                      {item.title} <br></br>
                      {item.content}
                    </Typography>
                  </Box> */}
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};
