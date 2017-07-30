import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import scrollTo from 'scroll-to';
import throttle from 'lodash.throttle';

export default class ScrollSection extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    onBecomeActive: PropTypes.func,
    onBecomeInactive: PropTypes.func,
  };

  componentDidMount() {
    this.onScroll();
    window.addEventListener('scroll', this.onScroll);
  }

  scrollIntoView() {
    const topPos = this.rootEl.offsetTop;
    scrollTo(0, topPos, {
      ease: 'in-out-quad',
      duration: 1000,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = throttle(() => {
    const {
      onBecomeInactive = () => null,
      onBecomeActive = () => null
    } = this.props;

    const bd = this.rootEl.getBoundingClientRect();
    const screenMiddle = window.innerHeight / 2;
    const isActive = (bd.top < screenMiddle) && (bd.top + bd.height > screenMiddle);

    if (isActive && !this.isActive) {onBecomeActive();}
    if (!isActive && this.isActive) {onBecomeInactive();}

    this.isActive = isActive;
  }, 100);

  render() {
    const { className } = this.props;
    return (
      <div className={className} ref={el => (this.rootEl = el)}>
        {this.props.children}
      </div>
    );
  }
}
