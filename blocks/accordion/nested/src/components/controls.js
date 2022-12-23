import { InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl } from '@wordpress/components';

const Controls = (props) => {
    const { id } = props;
    return (
        <InspectorControls>
            <Panel>
                <PanelBody title='ID a enlazar' initialOpen={true}>
                    <ul>
                        <li>Mantener el texto en minúsculas.</li>
                        <li>Usar solo caracteres alfanuméricos.</li>
                        <li>Evitar colocar acentos</li>
                    </ul>
                    <TextControl
                        label='ID'
                        value={id}
                        onChange={(rewrite) => setAttributes({ id: rewrite })}
                    />
                </PanelBody>
            </Panel>
        </InspectorControls>
    );
}

export default Controls;