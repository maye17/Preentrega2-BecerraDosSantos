import React from 'react'
import Alert from 'react-bootstrap/Alert';

function MesaggeBuy({datoId}) {
  return (
    <>
        <Alert variant="success">
          Su compra fue realizada con éxito! el Id de compra es:{datoId}
        </Alert>
    </>
  );
}

export default MesaggeBuy;