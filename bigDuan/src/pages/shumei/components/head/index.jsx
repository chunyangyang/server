/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:28:31 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-10 14:18:00
 */
import './index.scss';
export default function head() {
    let naveBox = $('.J-nav-box li');
  
    for (let i=0; i<naveBox.length; i++) {
        $(naveBox[i]).removeClass('active');
    }
    let router = location.pathname.split('/')[2];
    switch (router) {
        case 'newsPage.html':
            $(naveBox[1]).addClass('active');
            window.router ='newsPage';
            break;
        case 'mousePage.html':
            $(naveBox[2]).addClass('active');
            window.router ='mousePage';
            break;
        case 'articlesPage.html':
            $(naveBox[3]).addClass('active');
            window.router ='articlesPage';
            break;
        case 'baikePage.html':
            $(naveBox[8]).addClass('active');
            window.router ='baikePage';
            break;
        case 'newMediaPage.html':
            $(naveBox[6]).addClass('active');
            window.router ='newMediaPage';
            break;
        case 'searchPage.html':
            $(naveBox[7]).addClass('active');
            window.router ='searchPage';
            break;
        case 'zhihuPage.html':
            $(naveBox[4]).addClass('active');
            window.router ='zhihuPage';
            break;
        case 'xiaohongshuPage.html':
            $(naveBox[5]).addClass('active');
            window.router ='xiaohongshuPage';
            break;
        default:
            $(naveBox[0]).addClass('active');
            window.router ='index';
            break;
    }

}