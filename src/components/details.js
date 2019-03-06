import React, { Component } from 'react';

class Details extends Component {

    renderChildren = () => {
        const {links, infos } = this.props;
        let children = [];
        if (links) {
            children = links.map(links => {
                return <a key={links._id} onClick={links.onClick} className='details-link'>{links.title}</a>
            })
        } else if (infos) {
            children = infos.map(info => {
                return <div key={info._id} className='details__item'>{info.title}</div>
            })
        }
        return children;
    }

    render() {
        const { className, title } = this.props;
        return (
            <div className={`${className} details`}>
                <div className='details__title'>{title}</div>
                <div className='details__links'>
                    {
                        this.renderChildren()
                    }
                </div>
            </div>
        )
    }
}

export default Details;