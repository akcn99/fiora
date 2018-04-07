import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';

@immutableRenderDecorator
class Avatar extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        size: PropTypes.number,
    }
    static defaultProps = {
        size: 60,
    }
    render() {
        const { src, size } = this.props;
        return (
            <img
                className="component-avatar"
                src={src}
                style={{ width: size, height: size, borderRadius: size / 2 }}
            />
        );
    }
}

export default Avatar;