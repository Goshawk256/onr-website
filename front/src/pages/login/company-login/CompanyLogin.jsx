import React, { useState } from "react";
import "./CompanyLogin.css";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
const CompanyLogin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null); // Hata veya başarı mesajları için durum
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Input değişimlerini yönet
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form gönderimi için işlemler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // Önceki mesajları temizle

    try {
      if (isSignUp) {
        // Kayıt işlemi
        const response = await registerUser(
          formData.name,
          formData.email,
          formData.password
        );
        setMessage(`Kayıt başarılı: ${response.message}`);
      } else {
        // Giriş işlemi
        const response = await loginUser(formData.email, formData.password);
        setMessage(`Giriş başarılı: Hoş geldiniz, ${response.user.name}`);
      }
    } catch (error) {
      setMessage(
        `Hata: ${error.response ? error.response.data.message : error.message}`
      );
    }
  };

  // Formlar arasında geçiş yap
  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="company-login-main">
      {isMobile ? null : <Header />}
      <div className={`container ${isSignUp ? "active" : ""}`} id="container">
        {/* Üye Ol Formu */}
        <div className="form-container sign-up">
          <form onSubmit={handleSubmit}>
            <h1>Bayi Ol</h1>

            <input
              type="text"
              name="name"
              placeholder="Bayi Adı"
              value={formData.name}
              onChange={handleInputChange}
              required={isSignUp}
            />
            <input
              type="email"
              name="email"
              placeholder="E-Posta"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Vergi Numarası"
              value={formData.name}
              onChange={handleInputChange}
              required={isSignUp}
            />
            <input
              type="password"
              name="password"
              placeholder="Şifre"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Bayi Ol</button>
            <div className="mobile-ref-container">
              <span>Zaten bayimiz misin?</span>
              <button onClick={handleToggle}>Giriş Yap</button>
            </div>
          </form>
        </div>

        {/* Giriş Yap Formu */}
        <div className="form-container sign-in">
          <form onSubmit={handleSubmit}>
            <h1>Giriş Yap</h1>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <a href="#">Şifreni mi unuttun?</a>
            <button type="submit">Giriş Yap</button>
            <div className="mobile-ref-container">
              <span>Henüz bayimiz değil misin?</span>
              <button onClick={handleToggle}>Bayi Ol</button>
            </div>
          </form>
        </div>

        {/* Hata/Başarı Mesajı */}
        {message && <p className="message">{message}</p>}

        {/* Toggle Panel */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <p>Merhaba! nanocamkesmemakinesi.com'a Bayi girişi yapın!</p>
              <button onClick={handleToggle} className="hidden" id="login">
                Giriş Yap
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <p>
                Merhaba! nanocamkesmemakinesi.com'dan en iyi şekilde
                yararlanabilmek için Bayi olun!
              </p>
              <button onClick={handleToggle} className="hidden" id="register">
                Bayi Ol
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyLogin;
