import React from "react"

export default function Profile()
{   return  (<>
                <h1 className="nav-name">Vidyesh Kumar</h1>
                <h3 className="nav-role">Front End Developer</h3>
                <h5 className="nav-email">kumarvidyesh@gmail.com</h5>
                <form action="mailto:kumarvidyesh@gmail.com" method="get" target="_blank">
                    <button type="submit" className="button email"><i className="fas fa-envelope icon"></i>Email</button>
                </form>
                <form action="https://www.linkedin.com/in/vidyesh-kumar-83667221a/" method="get" target="_blank">
                    <button type="submit" className="button linkedin"><i className="fab fa-linkedin icon"></i>LinkedIn</button>
                </form>
             </>)
}