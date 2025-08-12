export const CardContact = (props) => {
    return (
        <div className="card p-3 d-flex flex-row align-items-center justify-content-between">
            {/* Foto + datos */}
            <div className="d-flex flex-row align-items-center">
                <img
                    src="https://img.freepik.com/foto-gratis/feliz-guapo-hombre-posar_23-2148911850.jpg?t=st=1645175359~exp=1645175959~hmac=404bcf4b97cce47df9a7b10924e9b89741e71852fc32dae4ad83ea1006d1b53c"
                    alt="contact"
                    className="rounded-circle"
                    style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        marginRight: "60px"
                    }}
                />
                <div>
                    <h5 className="mb-2">{props.name}</h5>
                    <p className="mb-1 text-muted">
                        <i className="fas fa-map-marker-alt me-2"></i>
                        {props.address}
                    </p>
                    <p className="mb-1 text-muted">
                        <i className="fas fa-phone-alt me-2"></i>
                        {props.phone}
                    </p>
                    <p className="mb-0 text-muted">
                        <i className="fas fa-envelope me-2"></i>
                        {props.email}
                    </p>
                </div>
            </div>

            {/* Botones */}
            <div className="d-flex flex-row align-items-start">
                <button
                    className="btn btn-link text-dark me-2"
                >
                    <i className="fas fa-pen"></i>
                </button>
                <button
                    className="btn btn-link text-dark"
                >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

