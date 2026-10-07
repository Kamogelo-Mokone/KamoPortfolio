import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ProjectsGallery from "../components/ProjectsGallery";

export default function ProjectsPage() {
  return (
    <>
      <Nav variant="light" />
      <main>
        <ProjectsGallery />
      </main>
      <Footer />
    </>
  );
}
