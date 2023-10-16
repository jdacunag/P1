import React from 'react';
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CListGroup, 
  CCardLink,
} from '@coreui/react';
import ReactImg from 'C:/Users/david/OneDrive/Escritorio/p1.v2/taskhubCarpeta/src/components/Home/Piramide.jpg';

function Carda( { Proyecto }) {
  return (
    <CCard style={{ width: '12vh' }}>
    <CCardImage orientation="top" src={ReactImg} />
    <CCardBody>
      <CCardTitle>{ Proyecto.nombre }</CCardTitle>
      <CCardText>
        { Proyecto.descripcion}
      </CCardText>
    </CCardBody>
    <CListGroup flush>
    </CListGroup>
    <CCardBody>
      <CCardLink href="#">detalles</CCardLink>
    </CCardBody>
  </CCard>
  );
}

export default Carda;