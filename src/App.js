import React, { useState } from "react";
import MemberForm from "./components/Form";
import MemberCard from "./components/Card";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <MemberForm formData={formData} setFormData={setFormData} />
      <MemberCard formData={formData} />
    </div>
  );
}

export default App;
