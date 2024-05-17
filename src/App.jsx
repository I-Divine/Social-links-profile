import { useState } from "react";
import avatar from "./assets/images/avatar-divine.jpeg";

import "./App.css";
import { Profile } from "./Profile";
function App() {
  return <Profile avatar={avatar} />;
}

export default App;
