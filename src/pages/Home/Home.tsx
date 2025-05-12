import { Layout } from "../../components/layout";
import { CarrouselCumbre } from "../../components/CarrouselCumbre";
import { SectionUs } from "./components/SectionUs";

import { Inscription } from "./components/Inscription";
import { Information } from "./components/Information";

import { SectionModell } from "./components/SectionModell";
import { Competence } from "./components/Competence";
import { Burbujas } from "./components/Burbujas";
import { InformationCumbre } from "./components/InformationCumbre";
import { Footer } from "./components/Footer";

export const Home = () => {
  return (
    <Layout>
      <CarrouselCumbre />
      <SectionUs />
      <Inscription />
      <InformationCumbre />
      <Information />
      <SectionModell />
      <Burbujas />
      <Competence />
      <Footer />
    </Layout>
  );
};
