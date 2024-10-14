import { Layout } from "../../components/layout";
import { CarrouselCumbre } from "../../components/CarrouselCumbre";
import { SectionUs } from "./components/SectionUs";
import { SectionEnrollment } from "./components/SectionEnrollment";
import { SectionNotice } from "./components/SectionNotice";
import {
  activityItems,
  proyectItems,
  typeSection,
} from "../../utils/constants";
import { SectionGallery } from "./components/SectionGallery";
import { SectionInformaction } from "./components/SectionInformaction";
import { Footer } from "../../components/Footer";
import { Inscription } from "./components/Inscription";
import { Information } from "./components/Information";
import { InformationCumbre } from "../../components/InformationCumbre";

export const Home = () => {
  return (
    <Layout>
      <CarrouselCumbre />
      <SectionUs />
      <Inscription />

      <InformationCumbre />
      <Information />
      <SectionNotice
        title="ULTIMAS ACTIVIDADES"
        content="Estas son nuestras ultimas actividades"
        items={proyectItems}
        type={typeSection.PROYECT}
      />
      {/* <SectionEnrollment />
      <SectionNotice
        title="ACTIVIDADES EXTRAPROGRAMATICAS"
        content="CURSOS Y APOYO ESTUDIANTIL."
        items={activityItems}
        type={typeSection.ACTIVITIES}
      />
           <SectionEnrollment />
      <SectionGallery />*/}
      <SectionInformaction />
      <Footer />
    </Layout>
  );
};
