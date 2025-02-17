import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <h3 className="header__title">Our mission:</h3>
      <p className="header__text">
        Provide photographers a space to share photos of the neighborhoods they
        cherish,
        <span className="header__text--italic">
          &nbsp;expressed in their unique style.
        </span>
      </p>
    </header>
  );
}
