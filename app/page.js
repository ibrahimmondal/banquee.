import Accounts from "./components/Accounts";
import Advanced_Statistics from "./components/Advanced_Statistics";
import Bank from "./components/Bank";
import Cards from "./components/Cards";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import One_app from "./components/One_app";
import Saving_Accounts from "./components/Saving_Accounts";
import Transactions from "./components/Transactions";

export default function Home() {
  return (
  <main>
  <Hero/>
  <Transactions/>
  <Cards/>
  <Advanced_Statistics/>
  <Saving_Accounts/>
  <Bank/>
  <Accounts/>
  <One_app/>
  <Faq/>
  </main>

  );
}
