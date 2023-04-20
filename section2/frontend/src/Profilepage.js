import React from 'react'

const Profilepage = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-4">
            <div className="card" style={{ borderRadius: 0 }}>
              <div className="card-body text-center">
                <div className="mt-3 mb-4">
                  <img
                    src="mylogo.webp"
                    className="rounded-circle img-fluid"
                    style={{ width: 100 }}
                  />
                </div>
                <h4 className="mb-2">Shailendra pushkar</h4>
                <p className="text-muted mb-4">
                  @Programmer
                  <span className="mx-2"></span>{" "}
                  {/* <a href="#!">mdbootstrap.com</a> */}
                </p>
                {/* <div className="mb-4 pb-2">
              <button
                type="button"
                className="btn btn-outline-primary btn-floating"
              >
                <i className="fab fa-facebook-f fa-lg" />
              </button>
              <button
                type="button"
                className="btn btn-outline-primary btn-floating"
              >
                <i className="fab fa-twitter fa-lg" />
              </button>
              <button
                type="button"
                className="btn btn-outline-primary btn-floating" 
              >
                <i className="fab fa-skype fa-lg" />
                </button>
              </div> */}
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <p className="mb-2 h5">Age</p>
                    <p className="text-muted mb-0">24</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-2 h5">Weight</p>
                    <p className="text-muted mb-0">75 kg</p>
                  </div>
                  <div>
                    <p className="mb-2 h5">Height</p>
                    <p className="text-muted mb-0">5'7''</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-success btn-lg"
                >
                  9369065311
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Profilepage;