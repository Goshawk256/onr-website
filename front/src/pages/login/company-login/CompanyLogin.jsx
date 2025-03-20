import React, { useState } from "react";
import "./CompanyLogin.css";

const CompanyLogin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null); // Hata veya başarı mesajları için durum

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
      <div className={`container ${isSignUp ? "active" : ""}`} id="container">
        {/* Üye Ol Formu */}
        <div className="form-container sign-up">
          <form onSubmit={handleSubmit}>
            <h1>Üye Ol</h1>

            <span>veya üye olmak için e-postanızı kullanın.</span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required={isSignUp}
            />
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
            <button type="submit">Üye Ol</button>
          </form>
        </div>

        {/* Giriş Yap Formu */}
        <div className="form-container sign-in">
          <form onSubmit={handleSubmit}>
            <h1>Giriş Yap</h1>

            <span>veya e-posta ve şifreniz ile giriş yapın.</span>
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
          </form>
        </div>

        {/* Hata/Başarı Mesajı */}
        {message && <p className="message">{message}</p>}

        {/* Toggle Panel */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <p>Merhaba! camate.io'ya giriş yapın!</p>
              <button onClick={handleToggle} className="hidden" id="login">
                Giriş Yap
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <p>
                Merhaba! carmate.io'dan en iyi şekilde yararlanabilmek için üye
                olun!
              </p>
              <button onClick={handleToggle} className="hidden" id="register">
                Üye Ol
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogin;
