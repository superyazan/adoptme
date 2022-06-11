import ReactDOM from "react-dom";
import Pet from "./pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Lunaaa",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt ME</h1>
      <Pet name="Lunaaa" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Lunaaa" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Lunaaa" animal="Dog" breed="Havanese"></Pet>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
