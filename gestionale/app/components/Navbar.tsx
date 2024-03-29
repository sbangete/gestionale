import Link from "next/link";

let navlinks = [
    { text: "Dashboard", icon: "bi bi-grid-1x2-fill", url: "/" },
    { text: "Search", icon: "bi bi-search", url: "/search" },
    { text: "Contabile", icon: "bi bi-calculator-fill", url: "/contabile" },
    { text: "Manager", icon: "bi bi-sliders", url: "/manager" },
    { text: "Calendar", icon: "bi bi-calendar", url: "/calendar" }
  ];


export default function Navbar() {
     return (
        <div className="bg-dark col-auto col-md-2 min-vh-100 rounded-end">
          <div className="bg-dark">
            <a className="d-flex text-decoration-none align-items-center">
              <i className="fs-5 bi bi-gauge"></i>
              <span className="fs-4 d-none d-sm-inline">NAME</span>
            </a>
          </div>
          <ul className="nav gap-1 fs-5 flex-column mt-5">
            {navlinks.map((navlink, index) => (
              <Link href={navlink.url} key={index} className="bg-primary p-2">
                <div className="d-flex gap-3 text-white text-decoration-none">
                  <i className={`bi ${navlink.icon}`}></i> <p>{navlink.text}</p>
                </div>
              </Link>
            ))}
          </ul>
        </div>
     )
}