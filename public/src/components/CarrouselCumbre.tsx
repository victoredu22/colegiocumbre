import styles from "../styles/Home.module.css";
import { Box, Button, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CarrouselCumbre = () => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay={false}
        autoPlaySpeed={7000}
        centerMode={false}
        className={styles.containerCarousel}
        containerClass="container"
        dotListClass={styles.containerDotList}
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1224,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <Box
          sx={{
            position: "relative",
            textAlign: "left",
            height: "100%",
            width: "100%",
          }}
        >
          <img
            style={{ height: "100%", width: "100%", filter: "brightness(50%)" }}
            src="./assets/img/integracion2.jpg"
          />
          <Box
            sx={{
              zIndex: "1",
              backgroundImage:
                "linear-gradient(82deg, #fff 17%, rgba(31, 53, 94, .47))",

              /* display: flex; */
              position: "absolute",
              top: "0%",
              bottom: "0%",
              left: "0%",
              right: "0%",
            }}
          ></Box>
          <Box
            color="primary.main"
            sx={{
              zIndex: "2",
              position: "absolute",
              top: "47%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              marginLeft: { xs: "50px", md: "10%" },
              marginTop: "20px",
            }}
          >
            <Typography
              color="primary.main"
              variant="h2"
              className={styles.titleCarrousel}
            >
              Colegio Cumbre San Ramon
            </Typography>
            <Box
              color="primary.main"
              sx={{ marginTop: "10px", marginBottom: "40px" }}
            >
              <Typography
                variant="h4"
                color="primary.main"
                sx={{ fontSize: { xs: "20px", md: "none" } }}
              >
                Año Escolar 2023
              </Typography>
              <Typography
                variant="body1"
                className={styles.subTitleCarrousel}
                sx={{ display: { xs: "none", md: "block" }, width: "500px" }}
              >
                Esperamos que a través de esta nueva herramienta podamos
                trasmitirte todo lo relacionado con el colegio cumbre, así como
                información útil y necesaria para ti.
              </Typography>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  padding: { xs: "2px", md: "10px" },
                  width: { xs: "120px", md: "200px" },
                  marginTop: "20px",
                  fontWeight: "600",
                }}
              >
                Información
              </Button>
            </Box>
          </Box>
        </Box>
      </Carousel>
    </div>
  );
};
