import Banner from "../../layouts/Banner/Banner";
import HeaderSolutions from "./layouts/HeaderSolutions";
import SolutionServices from "./layouts/SolutionServices/SolutionServices";

export default function Solutions() {
  return (
    <>
      <HeaderSolutions />
      <main>
        <SolutionServices />
        <Banner />
      </main>
    </>
  );
}
