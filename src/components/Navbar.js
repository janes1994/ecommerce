import React, { Component } from 'react';

class Navbar extends Component {
    componentDidMount(){
        
    }
    render() {
        function burgerfunc() {
            let burger = document.querySelector(".burger");
            let burgerchild = burger.children;
            let navlist = document.querySelector(".navlist");
            let listspan = document.querySelectorAll(".navlist span")
            let searchnav = document.querySelector(".searchnav");
            let inputsearch = document.querySelector(".searchnav input");
            let quicklinks = document.querySelector(".quicklinks");
            let quicklinksspan = document.querySelectorAll(".quicklinks span");
            let nav = document.querySelector(".nav");
            let cancelsearch = document.querySelector(".cancelsearch");

            for (let i of burgerchild){i.classList.toggle("change");}    

            navlist.classList.toggle("expand");

            for (let i of listspan){i.classList.toggle("expand");}

            searchnav.classList.toggle("expand");

            inputsearch.addEventListener("click", () => {

                navlist.classList.toggle("expand");
                for (let i of listspan){i.classList.toggle("expand");}
                quicklinks.classList.toggle("expand");
                for (let i of quicklinksspan){i.classList.toggle("expand");}
                nav.style.display = "none";
                inputsearch.classList.toggle("expand");
                cancelsearch.classList.toggle("expand");
            })

            cancelsearch.addEventListener("click", () => {
                cancelsearch.classList.toggle("expand");
                inputsearch.classList.toggle("expand");
                quicklinks.classList.toggle("expand");
                navlist.classList.toggle("expand");
                for (let i of listspan){i.classList.toggle("expand");}
                nav.style.display = "grid";
                for (let i of quicklinksspan){i.classList.toggle("expand");}
            })
        }
      
    return (
      <div>
      <div className="nav">
        <div className="burger" onClick={()=>burgerfunc()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>

        <div className="logo"><i className="material-icons">android</i></div>
        <div className="bag"><i className="material-icons">add_shopping_cart</i></div>
      </div>

      <div className="searchnav">
        <input type="text" placeholder="Search apple.com"></input>
        <div className="cancelsearch"><span>Cancel</span></div>
    
        <hr/>
        <div className="quicklinks">
            <span>Find a Store <hr/></span>
            <span>Accessories <hr/></span>
            <span>iPod <hr/></span>
            <span>iOS <hr/></span>
            <span>Gift Cards <hr/></span>
        </div>
      </div>
      
      <div className="navlist">
        <span>Mac <hr/></span>
        <span>iPad <hr/></span>
        <span>iPhone <hr/></span>
        <span>Watch <hr/></span>
        <span>TV <hr/></span>
        <span>Music <hr/></span>
        <span>support <hr/></span>
      </div>
      </div>
    );
  }
}

export default Navbar;
