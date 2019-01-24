import React from 'react';
import PropTypes from 'prop-types';

const Status = (props) => {
  const { type, message, mode, noScroll, time, style, toastClass, ...pms } = props;

  let styles = {
    background: '#e8f7e9',
    color: '#4FB556'
  };

  let icon = 'done';
  let className = '';

  switch (type) {
    case 'info':
      styles = {
        background: '#E9F3F7',
        color: '#40729A'
      };

      icon = 'info';
      break;
    case 'warning':
      styles = {
        background: '#fff5d5',
        color: '#a57c01'
      };

      icon = 'warning';
      break;
    case 'error':
      styles = {
        background: '#ffe2e5',
        color: '#8c0a00'
      };

      icon = 'error';
      break;
    default:
      break;
  }

  if (mode === 'toast') {
    styles.position = 'fixed';
    styles.zIndex = '1';
    styles.bottom = '0rem';
    styles.left = '1rem';

    className = toastClass || 'fadeInDown animated';
  }

  return (
    <div className={className} {...pms} style={{
      padding: '1.33rem',
      borderRadius: '1rem',
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '1rem',
      animationDelay: '0',
      animationDuration: '0.2s',
      ...style,
      ...styles
    }}>
      <i className="material-icons" style={{
        position: 'relative',
        marginRight: '1rem'
      }}>{icon}
      </i>
      {message}
    </div>
  );
};

Status.defaultProps = {
  type: 'success',
  message: '',
  mode: 'bar',
  time: 3000,
  noScroll: false,
  toastClass: null,
  style: {}
};

Status.propTypes = {
  type: PropTypes.oneOf([
    'success', 'info', 'warning', 'error'
  ]),
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  mode: PropTypes.oneOf([
    'bar', 'toast'
  ]),
  noScroll: PropTypes.bool,
  time: PropTypes.number,
  style: PropTypes.object,
  toastClass: PropTypes.string
};

export default Status;


/*


        <div style={{
          padding: '1.33rem',
          background: '#ebffd4',
          borderRadius: '1rem',
          color: '#3e7300',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <i className="material-icons" style={{
            position: 'relative',
            marginRight: '1rem' // '0.66rem'
          }}>done
          </i>
        Your photos has been uploaded and are live now!
        </div>
        <div style={{
          padding: '1.33rem',
          background: '#E9F3F7',
          borderRadius: '1rem',
          color: '#2DA75E',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <i className="material-icons" style={{
            position: 'relative',
            marginRight: '1rem' // '0.66rem'
          }}>info
          </i>
          Your photos are being uploaded now. We&apos;ll let you know when it&apos;s done.
        </div>
        <div style={{
          padding: '1.33rem',
          background: '#fff5d5',
          borderRadius: '1rem',
          color: '#a57c01',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <i className="material-icons" style={{
            position: 'relative',
            marginRight: '1rem' // '0.66rem'
          }}>warning
          </i>
          An error occured uploading your photos. Don't worry, we&apos;ll try to upload them again.
        </div>
        <div style={{
          padding: '1.33rem',
          background: '#ffe2e5',
          borderRadius: '1rem',
          color: '#8c0a00',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <i className="material-icons" style={{
            position: 'relative',
            marginRight: '1rem' // '0.66rem'
          }}>error
          </i>
          We had problems to upload your photos. Sorry about that. Please refresh page and try again.
        </div>

*/
