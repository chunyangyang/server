import React from 'react';
import './index.scss';
function goback() {
    if (history.length > 1) { history.go(-1); } else { window.location.href = '//m.zuzuche.com'; }
}
function home() {
    window.location.href = '//m.zuzuche.com';
}

export default function Header() {
    const { showWeb, noGoBackBtn, title, isHideHeader } = window.serverData;

    if (showWeb != '1' ||isHideHeader=='1') {
        return null;
    }
    return (
        <header>
            <div className="top-bar new_header">
                <div className="top-bar-con clearfix">
                    <div className="top-bar-left">
                        {
                            noGoBackBtn != 1
                                ?
                                <i onClick={goback}>&nbsp;</i>
                                : null
                        }
                    </div>
                    <div className="top-bar-txt" id="admin_c">{title}</div>
                    <div className="top-bar-right">
                        <i onClick={home}>&nbsp;</i>
                    </div>
                </div>
            </div>
            <div className="kong_h"/>
        </header>
    )
}