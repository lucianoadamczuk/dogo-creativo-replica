import Banner from "../../layouts/Banner/Banner";
import Experience from "./layouts/Experience/Experience";
import HeaderHome from "./layouts/HeaderHome";
import Recognitions from "./layouts/Recognitions/Recognitions";
import WhatWeDo from "./layouts/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <main>
        <WhatWeDo />
        <Recognitions />
        <Banner />
        <Experience />
      </main>
    </>
  );
}
