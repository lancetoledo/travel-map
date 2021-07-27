import Map from "./components/Map"
import Nav from "./components/Nav"
import TimesList from "./components/times-list";
import AddStories from "./components/AddStories";
import firebase from "./firebase";

// firebase.firestore().collection("times").add({
//   title: "Rubix Cube",
//   time_seconds: 45
// })
export default function Home() {

  return (
    <div>
      <Nav />
      <Map />
      <h1>Just clock it</h1>
      <TimesList />
      <AddStories />
    </div>
  );
}