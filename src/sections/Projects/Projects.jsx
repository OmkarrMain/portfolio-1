import styles from "./ProjectsStyles.module.css";
import turff from "../../assets/turff-image.png";
// import freshburger from "../../assets/fresh-burger.png";
import texttoimage from "../../assets/texttoimage.png";
import fitlift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={turff}
          link={"https://github.com/OmkarrMain/Turf-Booking-System"}
          h3="Turf Tribe"
          p="Turf Booking Website"
        />
        {/* <ProjectCard
          src={viberr}
          link={"https://github.com/OmkarrMain/Turf-Booking-System"}
          h3="Viberr"
          p="Eating App"
        /> */}
        <ProjectCard
          src={texttoimage}
          link={"https://github.com/OmkarrMain/txt_to_image"}
          h3="Text to Image Website"
          p="Converts text to Image"
        />
        <ProjectCard
          src={fitlift}
          link={"https://github.com/OmkarrMain/Fit_Lift"}
          h3="Fitlift"
          p="A Gym Guide "
        />
      </div>
    </section>
  );
}

export default Projects;
