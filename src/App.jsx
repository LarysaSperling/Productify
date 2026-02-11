import HeaderHero from "./components/headerHero";
import Customers from "./components/customers";
import PlanManage from "./components/planmanage";
import Features from "./components/features";
import Stats from "./components/stats";
import Blog from "./components/blog";
import Testimonials from "./components/testimonials";
import CustomerHelp from "./components/customerHelp";
import GetStarted from "./components/getStarted";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";



export default function App() {
  return (
    <>
      <HeaderHero />
      <Customers />
      <PlanManage />
       <Features />
       <Stats />
       <Blog />
       <Testimonials />
      <CustomerHelp />
      <GetStarted />
      <Newsletter />
      <Footer />
    </>
  );
}


