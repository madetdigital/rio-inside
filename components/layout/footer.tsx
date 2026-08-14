export default function Footer() {
  return (
    <footer className="rio-footer">

      <div className="rio-footer-main">

        <div className="rio-footer-brand">
          <span className="rio-footer-label">
            RIO INSIDE
          </span>

          <h2>
            O Rio por dentro.
            <br />
            Como quem é daqui.
          </h2>
        </div>


        <div className="rio-footer-social">
          <span className="rio-footer-label">
            SIGA O RIO INSIDE
          </span>

          <a
            href="https://www.instagram.com/rio.inside?igsh=MWs3OWx0c2M4YmtvYg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>@rioinside</span>
            <span className="rio-footer-arrow">↗</span>
          </a>
        </div>

      </div>


      <div className="rio-footer-divider" />


      <div className="rio-footer-bottom">

        <span className="rio-footer-copyright">
          © 2026 RIO INSIDE. TODOS OS DIREITOS RESERVADOS.
        </span>

        <div className="rio-footer-legal">
          <a href="/termos-de-uso">
            TERMOS DE USO
          </a>

          <span>•</span>

          <a href="/politica-de-privacidade">
            POLÍTICA DE PRIVACIDADE
          </a>
        </div>

        <span className="rio-footer-location">
          RIO DE JANEIRO · BRASIL
        </span>

      </div>

    </footer>
  );
}