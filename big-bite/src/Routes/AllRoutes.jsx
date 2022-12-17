import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import KindMoments from "../Pages/KindMoments";
import Recipes from "../Pages/Recipes";
// import Login from "../Pages/Login";
import Directory from "../Pages/Directory";
import Help from "../Pages/Help";
import Signup from "../Pages/Signup";
// import MobileApp from "../Pages/MobileApp";
import Articles from "../Pages/Articles";
import MealDeal from "../Pages/MealDeal"

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mealdeal" element={<MealDeal />} />
      <Route path="/directory" element={<Directory />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/articles" element={<Articles />}></Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/help" element={<Help />} />
      <Route path="/kindmoments" element={<KindMoments />} />
      <Route path="/Recipes" element={<Recipes />} />
      {/* <Route path="/mobileapp" element={<MobileApp />} /> */}
    </Routes>
  );
}
