import "../Nav.css";

export const Navbar = () => {
  return (
    <nav>
      <div class="grid container-center">
        <div class="enlaces">
          <a href="#">Inicio</a>
          <a href="#">Sabores</a>
          <a href="#">Eventos</a>
          <a href="#">Nosotros</a>
        </div>

        <div class="sociales">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
        </div>
      </div>
    </nav>
  );
};
