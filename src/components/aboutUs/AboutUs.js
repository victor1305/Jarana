import React from 'react';
import crisBea from '../../images/CrisBea.jpeg'

const AboutUs = () => {
    return (
        <article className = "about-us-container">
            <h2 className = "about-us-title">Quiénes Somos?</h2>
            <p className = "about-us-p">Jarana somos Cristian y Bea, una pareja joven que ha decidido cumplir su sueño y plasmarlo en la realidad.</p>
            <p className = "about-us-p">Cristian empezó muy pronto en el mundo de la hostelería en un bar en pleno centro de Madrid. Siempre recuerda su primer día, en el que pasó horas buscando "el cuchillo de pelar gambas" que le había pedido su jefe. De esa novatada han pasado ya 13 años, en los que esta profesión se ha convertido en su auténtica pasión.</p>
            <p className = "about-us-p">Bea viene de una familia de hosteleros, pero, sin lugar a dudas, su referente en esta profesión es su padre. Él fue durante mas de 50 años el dueño de un mítico bar de Malasaña: "El Palentino". Donde los mixtos, los pepitos de ternera, y sobretodo él, Casto, eran los buques insignia del lugar.</p>
            <p className = "about-us-p">Jarana es el fruto de mucho trabajo y esfuerzo, pero sobretodo, mucha, mucha ilusión. Un bar donde queremos que todo el mundo se sienta como en casa, en familia. Es un toque de alegría y esperanza ante la situación tan difícil que todos estamos viviendo, y deseamos que, de ahora en adelante, Bar Cafetería Jarana sea también como vuestra segunda casa.</p>
            <img className = "about-us-image" src = {crisBea} alt = "Bea-Cris-foto"/>
        </article>
    );
}
 
export default AboutUs;