import Link from 'next/link';
import Styles from '../styles/Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={`navbar bg-light shadow-sm py-2 mt-2 ${Styles.nav_form}`}>
      <form className='col-3 d-inline-flex my-auto' role='search'>
        <input
          className='form-control form-control-sm ms-4 m-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
        />
        <button
          className='btn btn-outline-success d-inline-flex my-2'
          type='submit'
        >
          <i className='bi bi-search'></i>
        </button>
      </form>
      <Link href='/' className='col-1'>
        <a className='navbar-brand col-2 display-6 fw-bold'>RFN shop</a>
      </Link>
      <Link href='/' className='col-1'>
        <a className='col-1'>Register</a>
      </Link>
      <Link href='/' className='col-1'>
        <a className='col-1'>Login</a>
      </Link>
      <Link href='/' className='col-1'>
        <i className='bi bi-cart4 me-5 fs-4'></i>
      </Link>
    </nav>
  );
};

export default Navbar;
