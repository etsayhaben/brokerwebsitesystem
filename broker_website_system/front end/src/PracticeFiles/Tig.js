import './bootstrap.min.css'
function Tig()
{

    const handleClick=()=>
    {
        alert("it is not available");
    }
    return(
<nav className="container-fluid navbar navbar-expand-md navbar-white p-3 bg-dark mb-4">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">ኣማዞን</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ስለ እኛ</a>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
          <input size='20' placeholder='search'></input>
          <button onClick={handleClick} className="btn btn-outline-success" type="submit">ኣልሽ</button>
        </form>
      </div>
    </div>
  </nav>
    );
    
}
export default Tig;