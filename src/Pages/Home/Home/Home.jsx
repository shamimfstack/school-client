import Activities from "../Activities/Activities/Activities";
import Announcements from "../Announcements/Announcements/Announcements";
import Banner from "../Banner/Banner/Banner";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Announcements></Announcements>
      <Activities></Activities>
    </div>
  );
}
