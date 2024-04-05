// HomePage.js
import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import AguaDate from '../media/2024/agua-2024.png'
import MadDate from '../media/2024/madre-2024.png'
import PerDate from '../media/2024/bandera-2024.png'

import logo from '../media/logo.png'



function Evento({ titulo, imagen, fecha, finalizado, descripcion, redirect }) {
    return (
        <Col md={4} className="mb-4">
            <div className="bg-gray-800 rounded-lg shadow-md p-4 text-white text-center container-events">
                <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
                <div className="flex justify-center">
                    <img
                        src={imagen}
                        alt={titulo}
                        className="w-64 h-64 object-cover mb-2 rounded-lg"
                        style={{ width: '200px', height: '200px' }}
                    />
                </div>
                <p className="text-gray-400 mb-2">Fecha: {fecha}</p>
                {finalizado ? <p className="text-red-400 mb-2">Finalizado</p> : <p className='text-green-500 mb-2'>Muy Pronto</p>}
                <p className="mb-2 text-xs">{descripcion}</p>
                <a href={redirect} className="text-event-redirect" >Ver mas sobre el evento</a>
            </div>
        </Col>
    );
}

function HomePage() {
    useEffect(() => {
        document.title = "Mariscal Castilla - Home";
    }, []); 
    const eventos = [
        {
            titulo: 'Día Mundial del Agua',
            imagen: AguaDate,
            fecha: '22 de Marzo',
            finalizado: true,
            descripcion: 'Conmemoramos el Día Mundial del Agua con una serie de actividades llevadas a cabo en la institución educativa Mariscal Castilla, destacando la importancia del cuidado del agua y su vital relevancia para la humanidad.',
            redirect: '/events/dia-del-agua'
        },
        {
            titulo: 'Día de la Madre',
            imagen: MadDate,
            fecha: '12 de Mayo',
            finalizado: false,
            descripcion: 'Celebramos el Día de la Madre, una ocasión especial para recordar y honrar a la persona que nos dio la vida. Es un día significativo en la Institución Educativa Mariscal Castilla.',
            redirect: '/events/dia-de-la-madre'
        },
        {
            titulo: 'Día de la Bandera',
            imagen: PerDate,
            fecha: '7 de junio',
            finalizado: false,
            descripcion: 'Hoy conmemoramos el Día de la Bandera Peruana, un símbolo de nuestra identidad y orgullo nacional. En esta fecha especial también recordamos la valentía y el sacrificio de nuestros héroes en la Batalla de Arica, un episodio crucial de nuestra historia. Es una oportunidad para reflexionar sobre el legado de aquellos que lucharon por nuestra libertad y soberanía, y para renovar nuestro compromiso con los valores patrióticos que nos unen como peruanos.',
            redirect: '/events/dia-del-agua'
        }
    ];

    const filas = [];
    for (let i = 0; i < eventos.length; i += 3) {
        filas.push(eventos.slice(i, i + 3));
    }


    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [songTitle, setSongTitle] = useState('');
    const [artistName, setArtistName] = useState('');
    
    const togglePlay = () => {
      const audio = audioRef.current;
    
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
    
        // Update progress bar
        const interval = setInterval(() => {
          setProgress(audio.currentTime / audio.duration);
    
          if (audio.currentTime === audio.duration) {
            clearInterval(interval);
            setIsPlaying(false);
          }
        }, 1000);
      }
    };
    
    useEffect(() => {
      // Fetch song title and artist
      const fetchSongDetails = async () => {
    
        setSongTitle("Himno del Mariscal Castilla");
        setArtistName("Inti Leonardo Púñez Vallejo");
      };
    
      fetchSongDetails();
    }, []);
    return (
    <div className="bg-dark text-light">
        <Container className="py-3 bg-image" >
            <Row>
                <h1>
                    <blockquote className="text-2xl font-semibold italic text-center text-slate-50">
                        Bienvenido a .
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-700 relative inline-block">
                            <span className="relative text-white">Mariscal Castilla</span>
                        </span>
                    </blockquote>
                </h1>
                <Col md={7} className="d-flex align-items-center py-4">
                    <div className="text-left text-created">
                        <p className="text-center">Estamos emocionados de presentar nuestro <strong>sitio web</strong>, un espacio dedicado al <strong>aprendizaje</strong> y el <strong>crecimiento personal</strong>. Más que un simple recurso educativo, aspiramos a crear una <strong>comunidad en línea</strong> donde los estudiantes puedan encontrar inspiración, recursos y apoyo en su camino hacia el conocimiento.</p>
                        <p className="text-center">Además de ofrecer una variedad de recursos educativos, como <strong>libros digitales</strong>, <strong>ejercicios</strong> y <strong>documentos</strong> sobre temas fundamentales como <strong>matemáticas</strong>, <strong>comunicación</strong>, <strong>ciencia</strong> y <strong>tecnología</strong>, también nos comprometemos a compartir <strong>historias relevantes</strong> que reflejen nuestra <strong>misión</strong> y <strong>visión</strong> como comunidad educativa. Estas historias no solo informarán sobre nuestros objetivos y valores, sino que también servirán como fuente de motivación para todos los que se unan a nosotros en esta aventura educativa.</p>
                        <p className="text-center">Nuestro objetivo es proporcionar un espacio <strong>inclusivo</strong> y <strong>accesible</strong> para aprender y crecer juntos. Por eso, estamos abiertos a recibir cualquier aporte que puedas brindar a nuestro proyecto 2024 para el <strong>club de TCT (Tecnología con Todo)</strong>. Ya sea a través de ideas, recursos adicionales o simplemente tu apoyo moral, tu contribución será invaluable para nuestro crecimiento y desarrollo.</p>
                        <p className="text-center">Estamos trabajando diligentemente para completar el sitio web, y aunque sabemos que el proceso puede llevar tiempo, te aseguramos que valdrá la pena la espera. Una vez que esté listo, te invitamos a explorar un <strong>mundo sin fin de oportunidades educativas y recursos</strong> que te ayudarán a alcanzar tus metas académicas y profesionales.</p>
                        <p className="text-center">Únete a nosotros en esta emocionante aventura educativa y juntos construiremos un <strong>futuro más brillante</strong> y lleno de <strong>posibilidades</strong> para todos.</p>
                    </div>
                </Col>
                <Col md={5} className="d-flex align-items-center justify-content-center py-2">
                    <div className="login-form p-4 text-light rounded">
                        <h3 className="text-center mb-3 title-body">Iniciar Sesión</h3>
                        <Form>
                            <Form.Group className="mb-2 email-login" controlId="formBasicEmail">
                                <input type='email' placeholder='Correo electronico'></input>
                            </Form.Group>
                            <Form.Group className=" password-login" controlId="formBasicPassword">
                                <input type='password' placeholder='Contraseña'></input>
                            </Form.Group>

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <a href="/olvidaste-contraseña" className="text-nopassword" >¿Olvidaste tu contraseña?</a>
                            </div>

                            <Button variant="outline-danger" type="submit" className="d-block mx-auto">Ingresar</Button>{' '}

                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <a href="/registrarse" className="text-noacount" >¿No tienes cuenta?</a>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
        
        <Container className="py-5">
            <Row>
                <Col>
                    <h2 className="text-center title-misionyvision" style={{ marginBottom: '30px'}}>
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-700 relative inline-block">
                            <span className="relative text-white">Misión &amp; Visión</span>
                        </span>
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col md={6} >
                    <div  className="border rounded container-mision">
                        <h3 className="text-center">
                            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-emerald-700 relative inline-block">
                                <span className="relative text-white">
                                    Misión
                                </span>
                            </span>
                        </h3>
                        <p className="text-center" >
                            Bienvenido al sitio del Colegio Mariscal Castilla, cuyo fin primordial es dar a conocer información relevante acerca del Colegio, sus actividades, deportes, requisitos, historia y otros aspectos de interés sobre la labor educativa castillista. Sean bienvenidos, padres de familias, docentes, alumnos, exalumnos, visitantes y amigos todos, al sitio del Colegio Mariscal Castilla de el Tambo Huancayo - Perú. En este sitio usted estimado visitante podrá, conocer nuestros planes de estudio, requisitos para matricularse en nuestra institución, nuestras instalaciones, calendario de actividades entre otras cosas que seguro serán de su interés.
                        </p>
                    </div>
                </Col>
                <Col md={6} >
                    <div className="border rounded mt-4 container-vision">
                        <h3 className="text-center">
                            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-emerald-700 relative inline-block">
                                <span className="relative text-white">
                                    Visión
                                </span>
                            </span>
                        </h3>
                        <p className="text-center">
                            Nos enorgullece el altísimo número de contactos con el sitio que se producen cada día, pero estamos comprometidos por mejorarlo. Nuestra Institución y El Club MC de Hyo quiere ser cada vez más abierta y efectiva ante las exigencias de información de los alumnos, exalumnos y público en general. De hecho, estoy convencido de que las tecnologías de la información son hoy en día esenciales para el desarrollo de la educación, y es mi fuerte deseo que ellas se conviertan cada vez más en un factor de progreso educacional, civil, cultural y social. No puede haber mejor recompensa tras largos años de estudio, que el encontrarte trabajando en lo que más te apasiona y dejar una huella en el mundo a través de ello.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>

        <Container className="py-3">
            <Col>
                <h2 className="text-center title-misionyvision" style={{ marginBottom: '30px'}}>
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-700 relative inline-block">
                        <span className="relative text-white">Eventos</span>
                    </span>
                </h2>
            </Col>
            {filas.map((fila, index) => (
                <Row key={index}>
                    {fila.map((evento, index) => (
                        <Evento key={index} {...evento} />
                    ))}
                </Row>
            ))}
        </Container>    

        <Container className="py-3">
            <Row>
                <Col className="text-center">
                    <div className="text-white py-8 px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6 text-center">HIMNO AL COLEGIO MARISCAL CASTILLA</h2>
                            <div className="mb-8">
                                <p className="mb-2"><strong>LETRA:</strong> Isaí Obed Púñez Robles</p>
                                <p className="mb-2"><strong>MÚSICA:</strong> Inti Leonardo Púñez Vallejo</p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lg font-bold mb-4">CORO</h3>
                                <p>¡Castilla!, ¡Castilla!<br />Del colegio recuerdo inmortal<br />El pueblo Wanka orgulloso verá<br />De sus hijos que siempre cantarán.</p>
                            </div>

                            <Row>
                                <Col md={4}>
                                    <div className="mb-8">
                                        <h3 className="text-lg font-bold mb-4">ESTROFA I</h3>
                                        <p className='text-sm' >Con fervor llevamos el nombre<br />Donde nace el calor del saber<br />Mariscal Castilla, adelante<br />El saber es la insignia real<br />Sus maestros el camino trazaron<br />Por sus hijos que piensan  triunfar<br />Pues sus aulas un templo sagrado<br />Que la historia mañana dirá.</p>
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <div className="mb-8">
                                        <h3 className="text-lg font-bold mb-4">ESTROFA II</h3>
                                        <p className='text-sm' >El sol brilla en la aurora el fulgor<br />Cuando suena triunfante el clarín<br />De tu historia Huancayo vibrante<br />El camino de luz y saber<br />Brilla un cielo de límpido estrella<br />Alumbrando  tú paso marcial<br />Son tus hijos rumbo al futuro<br />Escribiendo la ruta triunfal.</p>
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <div className="mb-8">
                                        <h3 className="text-lg font-bold mb-4">ESTROFA III</h3>
                                        <p className='text-sm' >En la gloria el maestro reposa<br />El calor del amigo dejó<br />Las flores  su frente corona<br />En perfume en el aula estará<br />Castillistas con amor y anhelo<br />Caminar con honor y victoria<br />Ni orgullo ni olvido verán<br />Infinito su voz volará</p>
                                    </div>
                                </Col>
                            </Row>
                            <div className="spotify-audio">
                                <audio ref={audioRef} src="https://api.zioo.space/api/download/ytdl-mp3?url=https://www.youtube.com/watch?v=9xDD9ujhCpE"></audio>
                                <div className="spotify-player">
                                <div className="spotify-artwork">
                                    <img src={logo} alt="Album Artwork" />
                                </div>
                                <div className="spotify-details">
                                    <div className="spotify-track-title">
                                    {songTitle}
                                    </div>
                                    <div className="spotify-artist">
                                    {artistName}
                                    </div>
                                </div>
                                <div className="spotify-controls">
                                    <button className="spotify-control-btn" onClick={togglePlay}>
                                        {isPlaying ? (
                                            <div className="rounded-full w-8 h-8 bg-red-600"></div>
                                        ) : (
                                            <div className="rounded-full w-8 h-8 bg-green-600"></div>
                                        )}
                                    </button>
                                    <div className="spotify-progress-container">
                                    <div
                                        className="spotify-progress"
                                        style={{ width: `${progress * 100}%` }}
                                    ></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    </div>
    );
}







export default HomePage;

