import { Header } from "../../../layouts";

export default function HeaderSolutions() {
  const content = {
    title: "We make companies the best they can be",
    image: "/images/solutions/header.jpg",
    alt: "A Newspaper",
  };
  return (
    <Header title={content.title} image={content.image} alt={content.alt} />
  );
}
