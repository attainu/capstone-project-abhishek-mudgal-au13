import Header from "../../components/NavigationBars/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />

      <div>
        <section className="pt-5 pb-5">
          <h1 className="mt-5 display-4 fw-light text-center">
            <br />
            <br />
            The Only Link You’ll Ever Need
          </h1>
          <h4 className="pt-3 text-center">
            Connect audiences to all of your content with just one link
          </h4>
          <div className="pt-5 text-center">
            <Link to="/register" className="getstartedbtn">
              GET STARTED
            </Link>
          </div>
        </section>
        <section className="pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-6">
                <h2 className="sect_h2">Use it anywhere</h2>
                <h4 className="sec_h4">
                  Take your Uno Tree wherever your audience is, to <br />
                  help them to discover all your important content.
                </h4>
              </div>
              <div className="col-lg-5">
                <img className="vdo" src="images/tree.png" />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <video
                  className="vdo"
                  key="videos/link_to_anywhere.mp4"
                  playsInline
                  autoPlay
                  muted
                  loop
                >
                  <source src="videos/linktree-causes-landing-page-hero-1.mp4" />
                </video>
              </div>
              <div className="col-lg-5">
                <h2 className="sect_h2">Easily managed</h2>
                <h4 className="sec_h4">
                  Creating a Linktree takes seconds. Use our simple
                  drag-and-drop editor to effortlessly manage your content.
                </h4>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <hr />
        </div>
        <section>
          <div className="container pt-3 pb-3">
            <div className="row">
              <div className="col-lg-12 text-center pt-2">
                <h2 className="h2 fw-bolder">
                  The UnoTree Alternative Multiple links to your social.
                </h2>
                <p className="h5">
                  Uno Tree makes your online content more discoverable, easier
                  to manage and more likely to convert.
                </p>
              </div>
              <div className="col-lg-12 pt-4" />
              <div className="col-lg-4">
                <img src="images/h2.png" className="img-fluid" />
                <p className="h6 fw-bold">Inspire trust</p>
                <p>
                  We're a tool for connecting followers to your entire online
                  world not just one feed. It allows users to share more, sell
                  more, curate more and grow more.
                </p>
              </div>
              <div className="col-lg-4">
                <img src="images/h1.jpg" className="img-fluid" />
                <p className="h6 fw-bold">Boost results</p>
                <p>
                  On top of better deliverability and click-through, rich
                  link-level data gives you crucial insight into your link
                  engagement so your team can make smarter decisions around its
                  content and communications.
                </p>
              </div>
              <div className="col-lg-4">
                <img src="images/h3.png" className="img-fluid" />
                <p className="h6 fw-bold">Gain control</p>
                <p>
                  Take credit for your content and learn more about how it’s
                  consumed by enabling auto branding a feature that ensures your
                  brand remains in any link someone shortens pointing to your
                  website.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <hr />
        </div>
        <footer>
          <div className="container-fluid">
            <div className="row pt-5 mt-4">
              <div className="col-lg-1" />
              <div className="col-lg-2">
                <strong className="lh-lg">Company</strong>
                <ul className="list-unstyled">
                  <li>
                    &nbsp;&nbsp;
                    <a
                      href="about.html"
                      className="lh-base text-dark text-decoration-none"
                      style={{ fontWeight: 500 }}
                    >
                      About Uno Tree
                    </a>
                  </li>
                  <li>
                    &nbsp;&nbsp;
                    <a
                      href="team.html"
                      className="lh-base text-dark text-decoration-none"
                      style={{ fontWeight: 500 }}
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    &nbsp;&nbsp;
                    <a
                      href="contact.html"
                      className="lh-base text-dark text-decoration-none"
                      style={{ fontWeight: 500 }}
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <center>
                <img src="images/Logo.png" width={100} height={80} />
                <p>© 2021 Uno Tree.</p>
              </center>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
