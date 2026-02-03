import Navigation from '../Navigation/Navigation';
import TopBar from '../TopBar/TopBar';

function Menu() {
  return (
    <aside className="menu w-100" id="menu">
      <div className="container h-100">
        <div className="menu__content">
          <TopBar isMenu={true} />
          <Navigation />
        </div>
      </div>
    </aside>
  );
}

export default Menu;
