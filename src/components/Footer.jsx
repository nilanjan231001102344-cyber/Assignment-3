function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h3>Employee Directory</h3>

          <p>
            Employee Information Management System
          </p>
        </div>

        <div>
          <p>
            Built with React State & Events
          </p>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Employee Directory.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;