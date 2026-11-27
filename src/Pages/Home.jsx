import React from "react";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import '../assets/Style/style.css';
import Hero from "../Components/Hero";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";

function Home(){
    return(<>
<Hero/>
<Section1/>
<Section2/>

   </>);
}
export default Home;