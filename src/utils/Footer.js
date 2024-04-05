import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import owner from '../media/owner.jpg'

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-neutral-950 text-light pt-8">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="text-lg lg:text-xl mb-4 lg:mb-0">&copy; {new Date().getFullYear()} IE Mariscal Castilla</div>
                <div className="flex space-x-4 mb-4 lg:mb-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} className="text-white hover:text-blue-500 transition-colors duration-300" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-blue-400 transition-colors duration-300" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-pink-500 transition-colors duration-300" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} className="text-white hover:text-red-500 transition-colors duration-300" />
                    </a>
                </div>
            </div>
            <div className="container mx-auto mt-2 lg:mt-2 text-sm text-center lg:text-left">
                <p className="mb-2">Dirección: <strong>La Victoria 295, Huancayo 12004</strong></p>
                <p className="mb-2">Teléfono: <strong>---</strong></p>
                <p className="mb-2">Email: <strong>---</strong></p><a href="/privacy" className="text-xs underline-none text-gray-400 hover:text-white mr-4">Políticas de Privacidad</a>
                <a href="/terms" className="text-xs underline-none text-gray-400 hover:text-white">Términos y Condiciones</a>
            </div>
            <div className="mt-2 text-center">
                <p className="text-gray-500 text-xs">Sitio desarrollado con <span className="text-red-500">&hearts;</span> por TCT (Tecnología con Todo)</p>
                <a href="https://instagram.com/al.e.dev" target="_blank" rel="noopener noreferrer">
                    <span className="inline-flex items-baseline">
                        <img src={owner} alt="" className="self-center w-5 h-5 rounded-full mx-1" />
                        <span>iam._zioo</span>
                    </span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;



function Footero() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-light">
      <Container fluid>
        <Row>
            <Col className="text-center">
                <p> . Todos los derechos reservados.</p>
            </Col>
        </Row>
      </Container>
    </footer>
  );
}

