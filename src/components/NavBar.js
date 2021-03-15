import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkEls = links.map(link=>{
    return <a href={"#"+link} key={link}>{link}</a>
  })
  return <nav>{linkEls}</nav>;
}

export default NavBar;
