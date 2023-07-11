import Header from '../Header'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-image-container">
      <img
        className="MOBILE-IMAGE"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <img
        className="DESKTOP-IMAGE"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)
export default About
