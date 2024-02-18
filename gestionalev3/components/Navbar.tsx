import Link from "next/link";
import { getWorkerId } from "./Login";
import { useEffect } from "react";
import axios from "axios";

const apiURL =  "https://testxsjsjns-bbec60097ba9.herokuapp.com"

let navlinks = [
    { text: "Dashboard", icon: "bi bi-grid-1x2-fill", url: "/" },
    { text: "Search", icon: "bi bi-search", url: "/search" },
    { text: "Iscrizioni", icon: "bi bi-search", url: "/iscrizione" },
    { text: "Contabile", icon: "bi bi-calculator-fill", url: "/contabile" },
    { text: "Aggiungi", icon: "bi bi-sliders", url: "/aggiungi" },
  ];


export default function Navbar() {
    const style = {
      background: "linear-gradient(to right, #3b83ff, #2a59ac",
    }
    
    
    const worker_id = getWorkerId()
    useEffect(() => {
      const fetchWorker = async () => {
        try {
          const response = await axios.get(`${apiURL}/workers/${worker_id}`);
          console.log(response.data)
      
      } catch (error) {
          console.error('Errore durante il recupero dei nomi dei file:', error);
        }
      };
  
      fetchWorker();
    });


    return (
        <div style={style}  className=" col-auto col-md-2 min-vh-100 rounded-end">
         
          <ul className="gap-1 fs-5 flex-column mt-5">
            {navlinks.map((navlink, index) => (
              <Link style={{ textDecoration: "none" }} href={navlink.url} key={index} className=" p-2">
              <div  className="d-flex gap-3 text-white ">
                  <i className={`bi ${navlink.icon}`}></i> <p>{navlink.text}</p>
                </div>
              </Link>
            ))}
          </ul>
        </div>
     )
}