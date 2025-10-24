const Links = ({ links }) => {
    if (!links || links.length === 0) {
        return null;
    }

    return (
        <>
            {links.map((linkData, i) => (
                <a href={linkData.url} target="_blank" rel="noopener noreferrer">
                    {linkData.label}
                </a>
            ))}
        </>
    );
};

export default Links;