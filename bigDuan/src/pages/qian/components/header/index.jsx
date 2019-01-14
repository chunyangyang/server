import React from 'react';

import logoImg from './logo.jpeg';
import moreImg from './icon-more.png';
import closeImg from './close.png';
import aboutImg from './about.png';
import payImg from './pay.png';

import './index.scss';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	onOpenChange = (...args) => {
		this.setState({ open: !this.state.open });
	};

	handleClick = e => {
		if (this.props.onBack) this.props.onBack();
	};

	render() {
		const { open } = this.state;
		const { title, hideMore, showBack } = this.props;
		const style = open ? { width: '100%', height: '100%' } : {};

		return (
			<div className={`header ${open ? 'active' : ''}`} style={style}>
				<div className="header-mn">
					{
						showBack &&
						<i className="iconfont icon-back" onClick={this.handleClick}>  </i>
					}
					{!title && (
						<a href="/">
							<img
								className="logo"
								src={logoImg}
								alt="最高200000元，最快1小时放款"
							/>
						</a>
					)}
					<div className="title">{title}</div>
					{!hideMore && (
						<img
							className="more"
							src={open ? closeImg : moreImg}
							onClick={this.onOpenChange}
						/>
					)}
				</div>
				{open && (
					<div className="header-nav">
						<div className="header-mn">
							{!title && (
								<a href="/">
									<img
										className="logo"
										src={logoImg}
										alt="最高200000元，最快1小时放款"
									/>
								</a>
							)}
							<div className="title">{title}</div>
							{!hideMore && (
								<img
									className="more"
									src={open ? closeImg : moreImg}
									onClick={this.onOpenChange}
								/>
							)}
						</div>
						<div className="navbar">
							<div className="hline" />
							<ul className="navbar-list">
								<li>
									<a href="/about">
										<img src={aboutImg} className="icon-about" />关于我们
									</a>
								</li>
								<li>
									<a href="/profile">
										<img src={payImg} className="icon-pay" />我的贷款
									</a>
								</li>
							</ul>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Header;
