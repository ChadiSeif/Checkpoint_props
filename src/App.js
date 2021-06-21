import "./App.css";
import Profile from "./Profile/profile";
import PicProfile from "./assets/taswira.jpg";

function App() {
  const Profil = {
    FullName: "Seifeddine chadi",
    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Pellentesque in sagittis metus, non consequat tortor. 
    Nam vel ipsum euismod, dapibus arcu et, mattis magna. 
    Phasellus fermentum felis eu bibendum feugiat. 
    Nulla vehicula tortor a velit egestas rutrum. 
    Duis id dapibus nulla. Nam hendrerit libero non risus aliquam tempor.`,
    profession: "Dentist",
  };

  const handleName = (x) => {
    alert(`This user is ${x}`);
  };

  console.log(Profil);
  return (
    <div className="App">
      <Profile profile={Profil} handleName={handleName}>
        {PicProfile}
      </Profile>
    </div>
  );
}

export default App;
