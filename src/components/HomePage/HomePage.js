import {ReactComponent as Logo} from '../../img/logo.svg'
import Header from './Header/Header.jsx'
import Article from './Article/Article.jsx'
import MostSearched from './MostSearched/MostSearched.jsx'
import PhotoGrid from './PhotoGrid/PhotoGrid.jsx'

export default function Homepage({names, top4}) {
  const divStyle={
    height: "100%", 
    width: "100%"
  }
  return (
    <div className="homepage" style={divStyle}>
      <Logo />
      <Header names={names}/>
      <MostSearched top4={top4}/>
      <Article />
      <PhotoGrid />
    </div>
  );
}
