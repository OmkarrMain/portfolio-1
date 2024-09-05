import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshburger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"https://github.com/OmkarrMain/Turf-Booking-System"}
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshburger}
          link={"https://github.com/OmkarrMain/Turf-Booking-System"}
          h3="Fresh Burger"
          p="Eating App"
        />
        <ProjectCard
          src={hipsster}
          link={"https://github.com/OmkarrMain/Turf-Booking-System"}
          h3="Hipsster"
          p="An Hipsster"
        />
        <ProjectCard
          src={fitlift}
          link={"https://github.com/OmkarrMain/Turf-Booking-System"}
          h3="Fitlift"
          p="An Fitlift App"
        />
      </div>
    </section>
  );
}

export default Projects;
