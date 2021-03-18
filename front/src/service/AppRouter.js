import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function AppRouter() {
  return (
    <Router>
      <div>
        <Link to="/form" className="btn">Criar novo User</Link>
        
        
      </div>
    </Router>
  );
}

export default AppRouter;