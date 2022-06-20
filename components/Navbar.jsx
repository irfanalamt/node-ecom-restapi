import Link from 'next/link';
import Styles from '../styles/Navbar.module.css';
const Navbar = () => {
  return (
    <nav
      className={Styles.nav_form}
      class='navbar bg-light shadow-sm py-2 mt-2'
    >
      <form class='col-3 d-inline-flex my-auto' role='search'>
        <input
          class='form-control form-control-sm ms-4 m-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
        />
        <button
          class='btn btn-outline-success d-inline-flex my-2'
          type='submit'
        >
          <i class='bi bi-search'></i>
        </button>
      </form>
      <Link href='/' class='col-1'>
        <a class='navbar-brand col-2 display-6 fw-bold'>RFN shop</a>
      </Link>
      <Link href='/' class='col-1'>
        <a class='col-1'>Register</a>
      </Link>
      <Link href='/' className='col-1'>
        <a class='col-1'>Login</a>
      </Link>
      <Link href='/' className='col-1'>
        <i class='bi bi-cart4 me-5 fs-4'></i>
      </Link>
    </nav>
  );
};

export default Navbar;
