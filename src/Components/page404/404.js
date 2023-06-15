import './404.css';
import image from './image404.png';
import Button from '../button/button';
import { Link } from 'react-router-dom';
import errorImageF from './captain-america-glitch-1.27a8e85e.png';
import errorImageS from './captain-america-glitch-2.435c9217.png';
import errorImageTh from './captain-america-glitch-3.7ae1f7ee.png';
export default function Page404() {
    return (

        <div className='error-page'>
            <div className='error-page__info'>
                <div className='error-page__wrapper'>
                    <span className='error-message'>
                        PAGE NOT FOUND 404
                    </span>
                    <span className='erro-page__slogan'>
                    HYDRA is currently attacking this page!
                    </span>
                    <div className='hydra-animation' style={{
                        backgroundImage: `
                        url("${errorImageF}"), url("${errorImageS}"), url("${errorImageTh}")
                        `
                    }}/>
                </div>
                <div className='error-page__image' style={{
                    backgroundImage: `url("${image}")`
                }} />
            </div>

            <Link to="ihor-novakovskyi/Marvel" style={{margin: 'auto'}}>
                <Button
                    btnName="GO TO MAIN"
                    color="brown"
                    style={{
                        minWidth: '150px',
                    }}
                />
            </Link>
        </div>
    )
}
//У тебя объект хоть и занимает всю ширину старницы,но при установлении ширины,он продолжает в определном контектсе занимать всю ширину
//так как с ним ничего не может находится болльше на одной строке вместе с ним, так себя ведут блочные элементы, но при этом
// он занимает установленную ширину по контенту. Поэтому ты его центируеш ьвнутри родителя,хоть он вроде бы как и занимает и так всю ширину
//но он занимает место под контент.Поєтому марджин авто центрирует доченрний элемент внутри родителя,не смотря на то что вроде бы как
// он занимает всю ширину.При обертывании объекта в нилайн элемент,он инлайн элемент ссылки будет занимать всю ширину,на которую може
// расстянуться блочный элемент,но при это контетная часть состовляет контент ограниченный в самом начале.Поэтосу задавая бэекграунд мы 
// ничего не увидим,так как он будет под элементом с установленным видс(под блочным элементом)