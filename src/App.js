import React, { useState } from "react";
import MemberForm from "./components/Form";
import MemberCards from "./components/Cards";
import "./App.css";

function App() {
  const [formData, setFormData] = useState([]);
  return (
    <div>
      <MemberForm formData={formData} setFormData={setFormData} />
      <MemberCards formData={formData} />
    </div>
  );
}

export default App;
