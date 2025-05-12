import styles from "../styles/Home.module.css";
import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ButtonCumbre } from "./ButtonCumbre";

export const CarrouselCumbre = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación en ms
      once: true, // si quieres que se ejecute solo una vez
    });
  }, []);

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
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            src="./assets/img/integracion2.jpg"
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              zIndex: 1,
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              width: "100%",
              textAlign: "left",
              paddingLeft: { xs: "30px", md: "10%" },
              color: "primary.main",
            }}
          >
            <Typography
              color="primary.main"
              variant="h2"
              className={styles.titleCarrousel}
              data-aos="fade-up"
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
                sx={{ fontSize: { xs: "40px", md: "none" } }}
                data-aos="fade-up"
              >
                Año Escolar 2025
              </Typography>
              <Typography
                variant="body1"
                className={styles.subTitleCarrousel}
                sx={{
                  display: { xs: "none", md: "block" },
                  width: "500px",
                  fontSize: "19px",
                }}
                data-aos="fade-up"
              >
                Descubre cómo construimos el futuro desde San Ramon. Ingresa y
                conoce nuestra comunidad educativa.
              </Typography>

              <Box sx={{ minWidth: "140px", flex: 1, maxWidth: "200px" }}>
                <ButtonCumbre
                  title="Información"
                  type="button"
                  href="contacto"
                />
              </Box>
            </Box>
          </Box>
          href
        </Box>
      </Carousel>
    </div>
  );
};
