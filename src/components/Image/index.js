/*eslint-disable */
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// , s = n("./components/Common/Image/Image.css")
import { shallowEqual, lazyloadUtil, domHelper } from './utils';
// import l from './utils/lazyloadUtil.js';
// import d from 'https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg';
// import f from './utils/domHelper.js';
const k = {
	default: 'w-IIvc',
	'simple-image-container': '_3BTv9X',
	'simple-image': '_1Nyybr',
	'simple-image-loaded': '_30XEf0',
	'flexible-width': '_3MSCRn'
};

export default class Image extends Component {
	constructor(props) {
		super(props);
		// value: e,
		// enumerable: !1,
		// writable: !0,
		// configurable: !0
	}
	registerLazy = () => {
		var t = this.props;
		if (this.imgRef) {
			var n = this.props.modalContainerId ? document.getElementById(t.modalContainerId) : null,
				r = this.props.src,
				a = k['simple-image-loaded'];
			t.lazyLoadEnable &&
				((this.lazyId = lazyloadUtil().register(
					this.imgRef,
					function() {
						return (
							this.lazyId && lazyloadUtil().unregister(this.lazyId),
							'function' == typeof t.onLoad && t.onLoad(this.imgRef),
							Object(domHelper.d)(this.imgRef, r, p.a, a)()
						);
					},
					n || void 0
				)),
				(this.imgRef.onload = function() {
					this.imgRef &&
						('function' == typeof t.onLoad && t.onLoad(this.imgRef),
						this.imgRef && Object(domHelper.a)(this.imgRef, a));
				}),
				(this.imgRef.onerror = function(n) {
					this.imgRef &&
						((e.imgRef.src =
							'https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg'),
						'function' == typeof t.onError && t.onError(n),
						this.imgRef && Object(domHelper.a)(this.imgRef, a));
				}));
		}
	};
	componentDidMount() {
		this.registerLazy();
	}
	componentWillReceiveProps(e) {
		Object(shallowEqual.a)(this.props, e) ||
			(this.lazyId && lazyloadUtil().unregister(this.lazyId), this.registerLazy(e));
	}
	componentWillUnmount() {
		this.lazyId && lazyloadUtil().unregister(this.lazyId);
	}
	shouldComponentUpdate(e) {
		return !Object(shallowEqual.a)(this.props, e);
	}
	render() {
		var e = this,
			t = this.props,
			n = t.lazyLoadEnable,
			a = t.src,
			i = t.alt,
			s = t.imgClassName,
			u = t.containerClass,
			l = t.setRef,
			d = a || p.a,
			f = this.props.actualSize || this.props.height || this.props.size,
			m = this.props.actualSize || this.props.width || this.props.size,
			h = void 0 === f ? 'inherit' : f + 'px',
			E = void 0 === m ? 'inherit' : m + 'px',
			g = {
				ref: function(t) {
					this.imgRef = t;
				}.bind(this),
				className: classnames(
					k['simple-image'],
					s,
					(function(e, t, n) {
						return (
							t in e
								? Object.defineProperty(e, t, {
										value: n,
										enumerable: !0,
										configurable: !0,
										writable: !0
								  })
								: (e[t] = n),
							e
						);
					})({}, k['simple-image-loaded'], !n)
				),
				alt: i,
				src: n ? 'https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg' : d
			},
			y = classnames(k['simple-image-container'], u);
		return React.createElement(
			'div',
			{
				className: y,
				style: {
					height: h,
					width: E
				}
			},
			React.createElement('img', g)
		);
	}
}
Image.defaultProps = {
	alt: '',
	lazyLoadEnable: !0
};
Image.contextTypes = {
	location: PropTypes.object
};
