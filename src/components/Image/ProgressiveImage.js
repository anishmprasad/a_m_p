/*eslint-disable */

import React, { Component } from 'react';
import classnames from 'classnames';
import { shallowEqual, lazyloadUtil, domHelper } from './utils';
import './progressiveimage.scss';

const p = {
	'progressive-img-cont': '_2tnqd0',
	'scale-width': '_1_l8MX',
	'actual-img': '_232NW7',
	'preload-img': '_2VeolH',
	'progressive-image-loaded': 'dImZt_',
	blur: '_3I5S6S',
	'scale-height': '_2FRM9i'
};
const placeholder = 'https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg';
export default class ProgressiveImage extends Component {
	// "use strict";
	// n.d(t, "a", function () {
	//     return h
	// });
	// var a = n("./node_modules/react/index.js")
	//     , r = n("./node_modules/classnames/index.js")
	//     , i = n.n(r)
	//     , o = n("./utils/shallowEqual.ts")
	//     , s = n("./utils/lazyloadUtil.ts")
	//     , c = n("./utils/domHelper.ts")
	//     , l = n("./images/placeholder.svg")
	//     , u = n.n(l)
	//     , d = n("./components/ProgressiveImage/ProgressiveImage.css")
	//     , p = n.n(d)
	//     , m = function () {
	//         function e(e, t) {
	//             for (var n = 0; n < t.length; n++) {
	//                 var a = t[n];
	//                 a.enumerable = a.enumerable || !1,
	//                     a.configurable = !0,
	//                     "value" in a && (a.writable = !0),
	//                     Object.defineProperty(e, a.key, a)
	//             }
	//         }
	//         return function (t, n, a) {
	//             return n && e(t.prototype, n),
	//                 a && e(t, a),
	//                 t
	//         }
	//     }();
	f(e, t, n) {
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
	}
	// var h = function (e) {
	//     function t(e) {
	//         !function (e, t) {
	//             if (!(e instanceof t))
	//                 throw new TypeError("Cannot call a class as a function")
	//         }(this, t);
	//         var n = function (e, t) {
	//             if (!e)
	//                 throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	//             return !t || "object" != typeof t && "function" != typeof t ? e : t
	//         }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
	//         return
	//             n
	//     }
	//     return function (e, t) {
	//         if ("function" != typeof t && null !== t)
	//             throw new TypeError("Super expression must either be null or a function, not " + typeof t);
	//         e.prototype = Object.create(t && t.prototype, {
	//             constructor: {
	//                 value: e,
	//                 enumerable: !1,
	//                 writable: !0,
	//                 configurable: !0
	//             }
	//         }),
	//             t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	//     }(t, a["Component"])

	// value = n;
	enumerable = !0;
	configurable = !0;
	writable = !0;
	onActualImgLoad = () => {
		'function' == typeof this.props.onImageLoad && this.props.onImageLoad(this.actualImgRef);
	};
	onActualImgError = () => {
		'function' == typeof this.props.onImageError && this.props.onImageError(this.actualImgRef);
	};
	onPreloadImageLoad = () => {
		this.preloadImgRef &&
			((this.preloadImgWidth = this.preloadImgRef.width),
			(this.preloadImgHeight = this.preloadImgRef.height),
			'function' == typeof this.props.onPreImageLoad && this.props.onPreImageLoad(this.preloadImgRef),
			this.setState({
				preloadImgLoaded: !0
			}));
	};
	setActualImgRef = e => {
		this.actualImgRef = e;
	};
	setPreloadImgRef = e => {
		this.preloadImgRef = e;
	};
	state = {
		preloadImgLoaded: !1
	};
	shouldComponentUpdate(e, t) {
		return !Object(shallowEqual)(this.props, e) || !Object(shallowEqual)(this.state, t);
	}
	componentWillReceiveProps(e) {
		Object(shallowEqual)(this.props, e) ||
			(this.lazyId && lazyloadUtil().unregister(this.lazyId), this.registerForLazyLoad());
	}
	componentDidMount() {
		this.registerForLazyLoad();
	}
	componentWillUnmount() {
		this.lazyId && lazyloadUtil().unregister(this.lazyId);
	}
	registerForLazyLoad = () => {
		var e = this;
		var t = this.actualImgRef;
		if (this.actualImgRef && this.preloadImgRef) {
			var n = p['progressive-image-loaded'];
			this.lazyId = lazyloadUtil().register(this.preloadImgRef, function() {
				return (
					e.lazyId && lazyloadUtil().unregister(e.lazyId),
					'function' == typeof e.props.onLazyLoad && e.props.onLazyLoad(),
					Object(domHelper().d)(e.actualImgRef, e.props.src, placeholder)()
				);
			});
			this.actualImgRef.onload = a => {
				window.requestAnimationFrame(() => {
					Object(domHelper().s)(this.actualImgRef, n), this.onActualImgLoad();
				});
			};
			this.actualImgRef.onerror = a => {
				debugger;
				window.requestAnimationFrame(function() {
					(this.actualImgRef.src = placeholder), Object(c.a)(this.actualImgRef, n), this.onActualImgError();
				});
			};
		}
	};

	render() {
		var e,
			t = this.props,
			n = t.src,
			r = t.containerStyle,
			o = t.preloadSrc,
			s = t.initialBlur,
			c = t.scale,
			l = t.preloadImgClassName,
			u = t.className,
			d = t.containerClassName,
			m = (t.impressionId, this.state.preloadImgLoaded),
			h = classnames(
				(this.f((e = {}), p['progressive-img-cont'], !0),
				this.f(e, p['scale-width'], m && c && this.preloadImgWidth >= this.preloadImgHeight),
				this.f(e, p['scale-height'], m && c && this.preloadImgWidth < this.preloadImgHeight),
				e),
				d
			);
		return React.createElement(
			'div',
			{
				className: h,
				style: r
			},
			React.createElement('img', {
				ref: this.setActualImgRef,
				className: classnames(p['actual-img'], u),
				alt: this.props.alt || ''
			}),
			React.createElement('img', {
				ref: this.setPreloadImgRef,
				className: classnames(p['preload-img'], this.f({}, p.blur, s), l),
				src: o || n,
				alt: this.props.alt || '',
				onLoad: this.onPreloadImageLoad
			})
		);
	}
}
ProgressiveImage.defaultProps = {
	src: 'https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg',
	initialBlur: !0,
	scale: !0,
	containerStyle: {
		width: '100%',
		height: '100%'
	}
};

// {
//     "preloadSrc": "https://rukminim1.flixcart.com/flap/50/50/image/e39661c88736d2fb.jpg?q=50",
//         "src": "https://rukminim1.flixcart.com/flap/3376/560/image/e39661c88736d2fb.jpg?q=50",
//             "impressionId": "M_f68878c3-688f-4897-bc37-1b0e9b005637_1.FFCP6EYRO2V6",
//                 "containerStyle": {
//         "width": "100%",
//             "height": 280
//     },
//     "initialBlur": true,
//         "alt": "02-03-2019-Slot-7",
//             "scale": true
// }
