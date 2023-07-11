import Header from '../Header'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <div className="content-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <h1 className="heading">Lost Your Way?</h1>
      <p className="description">Sorry</p>
    </div>
  </div>
)
export default NotFound
