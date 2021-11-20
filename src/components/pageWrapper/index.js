import Footer from "../footer"
import Navigation from "../navbar"

const PageWrapper = (props) => {
  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  )
}

export default PageWrapper