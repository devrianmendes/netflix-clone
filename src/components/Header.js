import React from 'react';
import './Header.css';

const Header = () => {
  const [blackHeader, setBlackHeader] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={blackHeader ? 'black' : null}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"></img>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
        </a>
      </div>
    </header>
  )
}

export default Header