import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import avatarDemo from '../../assets/images/avatarDemo.jpg';

import './styles.css';
function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src={avatarDemo} alt=""/>
                        <div>
                            <strong>Nome Professor</strong>
                            <span>Materia</span>
                        </div>
                    </header>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam exercitationem nemo numquam maiores mollitia nisi. <br/><br/>
                        Ipsam placeat fugit reprehenderit natus cum harum enim temporibus eaque autem ad, accusamus repudiandae sapiente.
                    </p>
                    <footer>
                        <p>
                            Preço/Hora 
                            <strong>R$70,00</strong>
                        </p>
                        <button>
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
        </article>
    );
}

export default TeacherItem;