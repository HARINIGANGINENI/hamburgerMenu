import Header from '../Header'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-image-container">
      <img
        className="MOBILE-IMAGE"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="home"
      />
      <img
        className="DESKTOP-IMAGE"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="home"
      />
    </div>
  </div>
)
export default Home
