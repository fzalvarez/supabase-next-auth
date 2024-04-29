import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Hola, {firstName}!</h1>
    <p>
      Has recibido un reclamo de {firstName}, haz clic en el botón para registar
      una solución:
    </p>
    <a href="https://libro-reclamos.vercel.app/dashboard">Ir al dashboad</a>
  </div>
);