function App() {
  return (
    <>
      {/* seccion Hero */}
      <section className="hero">
        <div className="hero-principal row">
          <div className="hero-intro col-lg-8">
            <h3>Franz Seidel</h3>
            <h1>Diseñador web <br /> Desarrollador Front-end</h1>
            <p className="info">
              Over the past 5 years I have been working with big eCommerce companies around the world.
              Offering services around them, working solo, leading small eCommerce teams, maintaining eCommerce websites and developing SAAS.
            </p>
            <div className="certi">
              <div className="hero-certi-uade">
                <img src="https://vectorseek.com/wp-content/uploads/2023/08/UADE.-Logo-Vector.svg-.png" alt="UADE" />
              </div>
              <div className="hero-certi">
                <img src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/4G_LOGO_NEGRO-01__1_/original.png?1560209943" alt="4Geeks" />
              </div>
              <div className="hero-certi">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/2090px-Sena_Colombia_logo.svg.png" alt="SENA" />
              </div>
            </div>
          </div>
          <div className="retrato col-lg-4 d-flex align-items-center justify-content-center">
            <img className="perfil" src="perfil.png" alt="foto de perfil" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

