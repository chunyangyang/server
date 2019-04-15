/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:28:31 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-04-13 17:27:54
 */
import './index.scss';
export default function head() {
    let naveBox = $('.J-nav-box li');

    for (let i = 0; i < naveBox.length; i++) {
        $(naveBox[i]).removeClass('active');
    }
    let router = location.pathname.split('/')[2];
    switch (router) {
        case '':
            $(naveBox[0]).addClass('active');
            window.router = 'index';
            break;
        case 'newsPage.html':
            $(naveBox[1]).addClass('active');
            window.router = 'newsPage';
            break;
        case 'annulationPage.html':
            $(naveBox[2]).addClass('active');
            window.router = 'annulationPage';
            break;
        case 'baikePage.html':
            $(naveBox[3]).addClass('active');
            window.router = 'baikePage';
            break;
        case 'zhihuPage.html':
            $(naveBox[4]).addClass('active');
            window.router = 'zhihuPage';
            break;
        case 'xiaohongshuPage.html':
            $(naveBox[5]).addClass('active');
            window.router = 'xiaohongshuPage';
            break;
        case 'searchPage.html':
            $(naveBox[6]).addClass('active');
            window.router = 'searchPage';
            break;
        case 'articlesPage.html':
            $(naveBox[7]).addClass('active');
            window.router = 'articlesPage';
            break;
        case 'mousePage.html':
            $(naveBox[8]).addClass('active');
            window.router = 'mousePage';
            break;
        case 'newMediaPage.html':
            $(naveBox[9]).addClass('active');
            window.router = 'newMediaPage';
            break;
        case 'annulationTwoPage.html':
            $(naveBox[10]).addClass('active');
            window.router = 'annulationTwoPage';
            break;
        case 'contactPage.html':
            // $(naveBox[0]).addClass('active');
            window.router = 'contactPage';
            break;
        // default:
        //     $(naveBox[0]).addClass('active');
        //     window.router = 'index';
        //     break;
    }

}