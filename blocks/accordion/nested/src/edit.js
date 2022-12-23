import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

import Controls from './components/controls';

const Edit = (props) => {
    const { attributes, setAttributes } = props;
    const { title, id } = attributes;
    const blockProps = useBlockProps({
        className: 'waccordion__item'
    });

    const waccordion = (e) => {
        const lines = e.currentTarget.querySelectorAll('.waccordion__line');
        const textElement = e.currentTarget.querySelector('.waccordion__text');
        if (e.target !== textElement) {
            const content = e.currentTarget.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
                lines[0].style.display = 'block';
            } else {
                content.style.display = 'block';
                lines[0].style.display = 'none';
            }
        }
    }

    return (
        <>
            <Controls id={id} />
            <div {...blockProps}>
                <div className="waccordion__header" id={id} onClick={waccordion}>
                    <h2 className="waccordion__title">
                        <RichText
                            tagName="span"
                            className="waccordion__text"
                            placeholder="Agrega un titulo."
                            value={title}
                            onChange={(rewrite) => setAttributes({ title: rewrite })}
                        />
                    </h2>
                    <svg className="waccordion__icon" pointer-events="all" xmlns="http://www.w3.org/2000/svg" width="46.224" height="46.224" viewBox="0 0 46.224 46.224">
                        <g transform="translate(-3819.921 -3367.664)">
                            <line className="waccordion__line" y2="46.224" transform="translate(3843.033 3367.664)" fill="#17774a" stroke="#000" stroke-miterlimit="10" stroke-width="2" />
                            <line className="waccordion__line" x1="46.224" transform="translate(3819.921 3390.776)" fill="#17774a" stroke="#000" stroke-miterlimit="10" stroke-width="2" />
                        </g>
                    </svg>
                </div>
                <div className="waccordion__body">
                    <InnerBlocks />
                </div>
            </div>
        </>
    )
}

export default Edit;