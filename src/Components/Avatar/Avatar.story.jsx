import React from 'react';
import Avatar from './Avatar';

import userImageFile from './images/myAvatar.png';
import badge1_ImageFile from './images/online.svg';
import badge2_ImageFile from './images/star.svg';
import badge3_ImageFile from './images/badge_3.png';
import AlphabeticAvatar from './AlphabeticAvatar';
import noImage from './images/noImage2.svg';

const styleValue = {margin: '20px 0px'}

module.exports = ({ storiesOf, action }) => {
  return storiesOf('Avatar', module)

    .add('Standart Avatar', () => (
      <Avatar src={userImageFile} srcset={userImageFile} />
    ))

    .add('Default Image', () => (
      <div>
        <div style={styleValue}>
          <Avatar />
        </div>

        <div style={styleValue}>
          <Avatar form={'circle'} />
        </div>
      </div>
    ))

    .add('Alphabetic Avatar', () => (
      <div>
        <div style={styleValue}>
          <Avatar alphabetic='true' form='circle' title="Sergey Alexandrovich" filter='opacity' />
        </div>
        <div style={styleValue}>
          <Avatar alphabetic='true' form='circle' title="Sergey" filter='opacity' />
        </div>
        <div style={styleValue}>
          <Avatar alphabetic='true' form='circle' title="Sergey Alexandrovich Shumakov" filter='opacity' />
        </div>
      </div>
    ))

    // .add('SVG Avatar', () => (
    //   <DefaultAvatar border={'3px solid green'} />
    // ))

    .add('Large Image and Spinner', () => (
      <Avatar src={'http://bukvoid.com.ua/images/___5.jpg'} />
    ))

    .add('Fallback from wrong src', () => (
      <Avatar
        src={'https://no-data.jpg'}
        onErrorSrc={noImage}
        warning='true'>
      </Avatar>
    ))


    .add('Square Avatar', () => (
      <Avatar src={userImageFile} form='square' />
    ))

    .add('Circle Avatar', () => (
      <Avatar src={userImageFile} form='circle' />
    ))

    .add('Shadow Avatar', () => (
      <Avatar src={userImageFile} shadow='true' />
    ))

    .add('Filter Avatar', () => {
        const styleValue = {marginBottom: '20px'}
        return (
          <div>
            <div style={styleValue}>
              <Avatar src={userImageFile} filter='grayscale' />
            </div>
            <div style={styleValue}>
              <Avatar src={userImageFile} filter='sepia'/>
            </div>
            <div style={styleValue}>
              <Avatar src={userImageFile} filter='opacity' />
            </div>
          </div>
        )
    })

    .add('Border Avatar', () => {
        const styleValue = {marginBottom: '20px'}
        return (
          <div>
            <div style={styleValue}>
              <Avatar src={userImageFile} form={'square'} border='3px solid #d2d2d2'>
              </Avatar>
            </div>
            <div style={styleValue}>
              <Avatar src={userImageFile} form={'square'} border={'3px solid green'}>
              </Avatar>
            </div>
          </div>
        )
    })

    .add('Badge & Status Avatar', () => {

        return (
            <div>
              <div style={styleValue}>
                <Avatar src={userImageFile} form={'circle'} badgeSrc={badge1_ImageFile} status='online'>
                </Avatar>
              </div>
              <div style={styleValue}>
                <Avatar src={userImageFile} form={'square'} badgeSrc='admin' />
              </div>
              <div style={styleValue}>
                <Avatar
                  src={userImageFile}
                  form={'square'}
                  badgeSrc='admin'
                  status='online'>
                </Avatar>
              </div>

              <div style={styleValue}>
                <Avatar
                  src={userImageFile}
                  form={'circle'}
                  badgeSrc='admin'
                  status='online'>
                </Avatar>
              </div>
            </div>
        )
    })

    .add('Complex Avatar', () => (
      <Avatar
        src={userImageFile}
        shadow='true'
        form='circle'
        badgeSrc='admin'
        status='online'
        border={'3px solid green'}
        title='Sergey Shoomakov'
        alphabetic='true'
        filter='opacity'
        onErrorSrc={"https://avatars2.githubusercontent.com/u/2578541?v=3&u=d3c98f7f889e30a133848ca0fd51e2b58bbb9b79&s=400"}
      />
    ))

};
