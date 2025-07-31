import Courses from "./components/Courses";
import Feedback from "./components/Feedback";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Other from "./components/Other";


export default function Home() {
  console.log("Feedback import:", Feedback);
  return (
    <div className="flex flex-col gap-5">
      <Navbar/>
      <Hero/>
      <Courses/>
      <Other/>
      {/* //<Feedback/> */}
      
    </div>
  );
}