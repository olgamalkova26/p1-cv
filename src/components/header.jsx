const Header = ({ name, email, phone, website, photoSrc }) => {
    return <header className="cv-header">
        <div>
            <h1 className="cv-name">
                {name}
            </h1>
            <p className="cv-contact">
                📧 {email} | ☎️ {phone} | 🌐 {website}
            </p>
        </div>
        <img className="cv-photo" src={photoSrc} alt="Profilová fotka" />
    </header>
}

export default Header;