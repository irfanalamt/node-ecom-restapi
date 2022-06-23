import Image from 'next/image';

const Logo = () => {
  return (
    <div
      style={{
        boxShadow: '0px 2px 5px -1px #32325d40,  0px 1px 3px -1px #0000004d',
        width: '100px',
        height: '100px',
        margin: 'auto',
        padding: '15px',
        marginBottom: '5px',
      }}
    >
      <Image
        alt='RFN logo'
        src='/images/brand-logo.png'
        width={80}
        height={80}
      ></Image>
    </div>
  );
};

export default Logo;
