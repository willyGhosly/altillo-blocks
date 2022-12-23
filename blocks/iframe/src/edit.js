import { InspectorControls } from '@wordpress/block-editor';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Panel, PanelBody, TextareaControl, TextControl } from '@wordpress/components';

import React from 'react';

const Edit = (props) => {
    const { attributes, setAttributes } = props;
    const { name, code } = attributes;

    const iframeExample = '<iframe width="560" height="315" ...></iframe>';
    const regex = /<iframe.*<\/iframe>/;
    const isIframe = regex.test(code);

    const blockProps = useBlockProps({
        className: 'wiframe'
    });
    return (
        <>
            <InspectorControls>
                <Panel>
                    <PanelBody title="Iframe" initialOpen={true}>
                        <TextControl
                            label="Nombre"
                            value={name}
                            onChange={(value) => setAttributes({ name: value })}
                        />
                        <TextareaControl
                            label="Iframe"
                            placeholder="AGREGAR CODIGO IFRAME AQUI"
                            value={code}
                            onChange={(value) => setAttributes({ code: value })}
                        />
                        <p>Ejemplo:</p>
                        <p>{iframeExample}</p>
                    </PanelBody>
                </Panel>
            </InspectorControls>
            <div {...blockProps}>
                <RichText
                    tagName='p'
                    className="wiframe__title"
                    placeholder='Agregar un titulo.'
                    value={name}
                    onChange={(value) => setAttributes({ name: value })}
                />
                {isIframe &&
                    <div className='wiframe__wrapper'>
                        <p className='wiframe__p'>Previsualización</p>
                        <div className='wiframe__inner'>
                            <div className='wiframe__preview' dangerouslySetInnerHTML={{ __html: code }} />
                        </div>
                    </div>
                }
                {isIframe == false &&
                    <p className='wiframe__invalid'>Previsualización sin Iframe</p>
                }
            </div>
        </>
    );
}

export default Edit;