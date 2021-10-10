const Navbar = () => {
    return ( 
       <nav className="navbar">
           <h1>Sam-Blog</h1>
           <div className="links">
               <a href="/">Home</a>
               <a href="/create" style={{
                   color: "white",
                   backgroundColor: "#05b0c7",
                   borderRadius: "5px"
               }}>New Blog</a>
           </div>
       </nav>
     );
}
 
export default Navbar;