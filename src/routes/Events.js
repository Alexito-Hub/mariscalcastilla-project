import React, { useRef, useState, useEffect } from 'react';

function Events() {
  useEffect(() => {
    document.title = "Mariscal Castilla - Eventos";
  }, []);
  return (
    <div>
      <h1>Eventos</h1>
      <p>.</p>
    </div>
  );
}

export default Events;
