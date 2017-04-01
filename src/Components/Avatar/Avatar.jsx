import React, { Component, PropTypes } from 'react';
import importcss from 'importcss';
import classnames from 'classnames';
import _ from 'lodash';

import defaultImageFile from './images/default_avatar.svg';
import AlphabeticAvatar from './AlphabeticAvatar';

const SPINNER_RADIUS = 20
const BADGE_RADIUS = 15

@importcss(require('./Avatar.css'))
export default class Avatar extends Component {

  constructor(){
    super()
    this.state = {
      loadError: false,
      loading: true
    }
  }

  static defaultProps = {
    src: defaultImageFile,
    // srcSet: defaultImageFile + ' 2x',
    onErrorSrc: defaultImageFile,
    badgeSrc: null,
    size: 128,
    form: 'default',
    border: null,
    shadow: 'false',
    filter: null,
    alt: 'user_avatar',
    title: null,
    status: 'offline',
    alphabetic: null,
  }

  static propTypes = {
    src: PropTypes.string,
    srcset: PropTypes.string,
    onErrorSrc: PropTypes.string,
    badgeSrc: PropTypes.string,
    size: PropTypes.number,
    form: PropTypes.string,
    border: PropTypes.string,
    shadow: PropTypes.string,
    filter: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    status: PropTypes.string,
    alphabetic: PropTypes.string,
  }

  handleImageLoaded(){
    if(!this.state.loadError)this.setState({
      loadError: false,
      loading: false
    })
  }

  handleImageErrored(){
    this.setState({
      loadError: true,
      loading: false
    })
  }

  render() {
    const { src, onErrorSrc, size } = this.props;
    const spinnerStyle = {
      left: size/2 - SPINNER_RADIUS,
      bottom: size/2 - SPINNER_RADIUS
    }

    const frameStyle = {
      width: size + 'px',
      height: size + 'px'
    }

    const imgClassNames = classnames(
      {
        'avatar__img--square': this.props.form == 'square',
        'avatar__img--circle': this.props.form == 'circle',
        'avatar__img': this.props.form != 'circle' && this.props.form != 'square',
      },

      // If shadow
      {
        'shadow': this.props.shadow == 'true',
      },

      // If filter
      {
        'grayscale': this.props.filter == 'grayscale',
        'sepia': this.props.filter == 'sepia',
        'opacity': this.props.filter == 'opacity'
      }
    );

    const statusClass = classnames({
      'avatar__status': this.props.status == 'online'
    });

    const badgeClass = classnames({
      'avatar__badge': this.props.badgeSrc == 'admin'
    })

    const borderStyle = this.props.border ? {
      border: this.props.border,
    } : {}
    const imgStyle = Object.assign({}, borderStyle);

    function splitThis(title) {
      const splitThisTitle = _.split(title, ' ', 2);

      if (_.isNil(splitThisTitle[1]) == true) {
        return splitThisTitle[0][0];
      } else {
        return (splitThisTitle[0][0] || '') + (splitThisTitle[1][0] || '');
      }
    }

    function ifThisLetterAlone(title) {
      const splitThisTitle = _.split(title, ' ', 2);

      if (_.isNil(splitThisTitle[1]) == true) {
        return '43.563669';
        console.log('43');
      } else {
        return '18.563669';
        console.log('18');
      }
    }


    return (
      <div styleName="avatar" style={frameStyle}>
        {this.state.loading && <div styleName="sk-fading-circle" style={spinnerStyle}>
          <div styleName="sk-circle1 sk-circle" />
          <div styleName="sk-circle2 sk-circle" />
          <div styleName="sk-circle3 sk-circle" />
          <div styleName="sk-circle4 sk-circle" />
          <div styleName="sk-circle5 sk-circle" />
          <div styleName="sk-circle6 sk-circle" />
          <div styleName="sk-circle7 sk-circle" />
          <div styleName="sk-circle8 sk-circle" />
          <div styleName="sk-circle9 sk-circle" />
          <div styleName="sk-circle10 sk-circle" />
          <div styleName="sk-circle11 sk-circle" />
          <div styleName="sk-circle12 sk-circle" />
        </div>}

        {this.props.alphabetic == 'true' && <svg styleName="alphabetic__avatar">
          <text
            id="text4172"
            // y="100.22916"
            // x="-20.563669"
            style={{
              // 'font-style': 'normal',
              // 'font-weight': 'normal',
              fontSize: '74.4929px',
              // 'line-height': '125%',
              // 'font-family': 'sans-serif',
              // 'letter-spacing': '0px',
              // 'word-spacing': '0px',
              fill: '#000000',
              // 'fill-opacity': '1',
              // stroke: 'none',
              // 'stroke-width': '1px',
              // 'stroke-linecap': 'butt',
              // 'stroke-linejoin': 'miter',
              // 'stroke-opacity': '1'
            }}
            xmlSpace="preserve">
            <tspan
              y="90.22916"
              x={ifThisLetterAlone(this.props.title)}//"18.563669" //43.563669
              id="tspan4174">{splitThis(this.props.title)}
            </tspan>
          </text>
        </svg>}

        <img
          styleName={imgClassNames}
          src={this.state.loadError ? onErrorSrc: src}
          // srcSet={this.state.loadError ? onErrorSrc: srcSet}
          width={size} height={size}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
          style={imgStyle}
          // shadow={this.props.shadow}
          filter={this.props.filter}
          alt={this.props.alt}
          title={this.props.title}
        />

        {/* {_.isNil(onErrorSrc) == true && <svg styleName='avatar__warning' viewBox="0 0 50 50" style={{ enableBackground: 'new 0 0 50 50'}}>
          <circle style={{fill: '#EFCE4A'}} cx="15" cy="15" r="15"/>
            <line
              style={{
                fill: 'none',
                stroke: '#FFFFFF',
                strokeWidth: '3',
                strokeLinecap: 'round',
                strokeMiterlimit: '5'}}
              x1="12.5" y1="5" x2="12.5" y2="16"
            />
            <line
              style={{
                fill: 'none',
                stroke: '#FFFFFF',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeMiterlimit: '5'}}
              x1="12.5" y1="18.5" x2="12.5" y2="19.5"
            />
        </svg>} */}

        {this.props.status == 'online' && <svg styleName={statusClass}>
          <circle style={{fill: 'green'}} stroke="white" strokeWidth="2" cx="15" cy="15" r="15" />
        </svg>}

        {this.props.badgeSrc == 'admin' && <svg styleName={badgeClass} viewBox="0 0 47.94 47.94">
          <path style={{ fill: '#ED8A19', width: '33px' }}
            d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
          	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
          	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
          	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
          	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
          	C22.602,0.567,25.338,0.567,26.285,2.486z"
            stroke='white'
            strokeWidth="2"
          />
        </svg>}
      </div>
    );
  }
}
