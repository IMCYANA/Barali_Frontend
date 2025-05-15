import { useState } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

const ActivityCard = ({ activity }) => {
    const [showModal, setShowModal] = useState(false);

    const imageUrl = `${import.meta.env.VITE_BASE_URL}/uploads/activities/${activity.image_name}`;
    const title = activity.name || "กิจกรรม";
    const description = activity.description || "";

    const handleCardClick = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="col-lg-6 px-2 py-2">
            <div className="border rounded p-2 shadow-sm h-100">
                <Row>
                    <Col md={12}>
                        <div
                            className="image-wrapper position-relative"
                            onClick={handleCardClick}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={imageUrl}
                                alt={activity.name}
                                className="img-fluid rounded"
                            />
                            <div className="overlay">
                                <div className="overlay-text">{activity.name}</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Modal Component */}
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                centered
                size="lg"
                dialogClassName="activity-modal"
                aria-labelledby="activity-modal-title"
                backdrop="static"
            >
                <Modal.Body className="p-0">
                    <div className="position-relative bg-white rounded shadow overflow-hidden">
                        {/* Close Button */}
                        <button
                            onClick={handleCloseModal}
                            className="btn btn-close position-absolute top-0 end-0 m-2 z-3 bg-white rounded-circle p-2"
                            aria-label="Close"
                            style={{
                                opacity: 1,
                                boxShadow: "0 0 5px rgba(0,0,0,0.3)"
                            }}
                        />

                        {/* Image */}
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-100 img-fluid"
                            style={{
                                objectFit: 'cover',
                                maxHeight: '60vh',
                                width: '100%'
                            }}
                        />

                        {/* Content */}
                        <div className="p-4">
                            <h4
                                id="activity-modal-title"
                                className="mb-3 text-center fw-bold"
                                style={{ color: "#333" }}
                            >
                                {title}
                            </h4>

                            {description && (
                                <div className="activity-description mt-3">
                                    <p className="mb-0" style={{ lineHeight: 1.6 }}>
                                        {description.split('\n').map((paragraph, i) => (
                                            <span key={i}>
                                                {paragraph}
                                                <br />
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ActivityCard;
