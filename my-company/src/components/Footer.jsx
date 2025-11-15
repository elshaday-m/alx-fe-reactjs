function Footer() {
  return (
    <footer
      style={{
        marginTop: "40px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#eee",
      }}
    >
      © {new Date().getFullYear()} My Company
    </footer>
  );
}

export default Footer;
