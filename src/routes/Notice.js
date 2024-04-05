import React, {  useEffect } from 'react';

function Notice() {
  useEffect(() => {
    document.title = "Mariscal Castilla - Noticias";
  }, []);
  return (
    <div>
      <h1>Noticias</h1>
      <p>.</p>
    </div>
  );
}

export default Notice;