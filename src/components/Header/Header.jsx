import logo from "@images/header.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header__picture" src={logo} alt="Around the U.S." />
      <hr className="header__line" />
    </header>
  );
}
