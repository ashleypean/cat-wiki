import {ReactComponent as Logo} from '../../img/logo.svg'
import Header from './Header/Header.jsx'
import Article from './Article/Article.jsx'
import Footer from './Footer/Footer.jsx'
import MostSearched from './MostSearched/MostSearched.jsx'
import PhotoGrid from './PhotoGrid/PhotoGrid.jsx'

export default function Homepage({names, top4}) {
  return (
    <div className="homepage">
      <Logo />
      <Header names={names}/>
      <MostSearched top4={top4}/>
      <Article />
      <PhotoGrid />
      <Footer />
    </div>
  );
}
