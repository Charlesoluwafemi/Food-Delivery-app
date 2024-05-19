import React from 'react';
import './IconContent.css';

const IconContentPage = ({ setShowIconContent }) => {
  return (
    <div className="icon-content-page">
      <p>
        Fresheo, comment ça marche ?<br />
        Chaque semaine, nous vous proposons dans votre espace client un assortiment de repas variés concoctés par nos chefs et validés par notre nutritionniste.<br />
        Vous aimez le menu de cette semaine et vous souhaitez recevoir vos repas lors de nos prochaines livraisons ? Commandez vite !<br />
        👍 Commandes récurrentes<br />
        Commander des repas Fresheo, c'est l'assurance d'être libre de gérer son abonnement à sa guise !<br />
        ⏸️ Flexible<br />
        Toute adaptation est possible jusqu'au mardi 23h59 précédant votre livraison !<br />
        😋 Délicieusement pratique<br />
        Grâce à nos supers livreurs, cuisiniers et chefs qui font tout pour vous satisfaire !<br />
        Besoin d'aide ?<br />
        Nous nous ferons un plaisir de vous répondre 7 jours sur 7 de 10h à 19h par email, téléphone ou via notre chat direct<br />
      </p>

      <button className="btn btn-secondary">
        <font style={{ verticalAlign: 'inherit' }}>
          <font style={{ verticalAlign: 'inherit' }}>
            Consult our FAQ
          </font>
        </font>
      </button>
      <button className="btn btn-secondary">
        <font style={{ verticalAlign: 'inherit' }}>
          <font style={{ verticalAlign: 'inherit' }}>
            support@fresheo.be
          </font>
        </font>
      </button>
      <button className="btn btn-secondary">
        <font style={{ verticalAlign: 'inherit' }}>
          <font style={{ verticalAlign: 'inherit' }}>
            +32 470 463 773
          </font>
        </font>
      </button>
      <button className="btn btn-secondary">
        <font style={{ verticalAlign: 'inherit' }}>
          <font style={{ verticalAlign: 'inherit' }}>
            Live chat
          </font>
        </font>
      </button>
    </div>
  );
};

export default IconContentPage;
