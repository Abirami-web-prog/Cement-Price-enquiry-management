import React from "react";
import ProductList from "./Components/ProductList";
import EnquiryForm  from "./Components/EnquiryForm";
import "./styles/style.css";


function App() {
  return (
    <div className="container">
      {/* <header className="header">
        <h1>Annamalaiyar Traders</h1>
        <p>Cement & Construction Materials</p>
      </header> */}



 <header className="header">
  <h1>🏗️ Annamalaiyar Traders 🏭</h1>
  <p className="header-subtitle">
    Premium Cement & Steel Products for Strong Construction
  </p>
  <button
    className="header-btn"
    onClick={() => {
      const formSection = document.getElementById("enquiry");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    Send Enquiry
  </button>
</header>
       <ProductList/>
       <div className="enquiry-wrapper">
       <EnquiryForm/>
       </div>
      <footer className="footer">
        <p>© 2026 Annamalaiyar Traders</p>
      </footer>
    </div>
  );
}

export default App;