import { Link } from 'react-router-dom';
import Header from '../Header/Header'
import '../../styles/layout/NotFound.scss'
import dobby from '../../images/dobby.gif'

function NotFound() {
  return (
    <>
      <Header />
      <section className="notFound">
        <Link to="/characters/">
          <input type="button" value="Go to characters" className='notFound__btn' />
        </Link>
        <h2 className="notFound__text">The page you are trying to visit doesn't exist yet.</h2>
        <img src={dobby} alt="gif dobby" title="gif dobby" className="notFound__img" />
      </section>
    </>
  )
}
export default NotFound;