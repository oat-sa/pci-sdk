---
to: <%=root%>/<%=typeIdentifier%>/runtime/<%=typeIdentifier%>.js
---
<%  let jsonCardinality = 'base';
    let jsonDefault = 'null';
    if(cardinality && (cardinality === 'ordered' || cardinality === 'multiple')) {
        jsonCardinality = 'list';
        jsonDefault = '[]';
    } else if (cardinality === 'record') {
        jsonCardinality = 'record';
        jsonDefault = '{}';
    }
%>
define([
    'qtiCustomInteractionContext',
], function (qtiCustomInteractionContext) {
    'use strict';

    /**
     *
     */
    qtiCustomInteractionContext.register({
        typeIdentifier: '<%=typeIdentifier%>',

        /**
         * @param {HTMLElement} dom - the interaction DOM container
         * @param {Object} config
         * @param {Object} config.properties - PCI properties
         * @param {Object} config.boundTo - the response bound to the interaction
         * @param {Function} config.onready - to be called when the PCI is ready to be used by test taker
         * @param {Object} state - the state to restore
         */
        getInstance(dom, config, state) {

            const myInteraction = {

                /**
                 * Called by the delivery engine to get the current response of the interaction
                 * @returns {Object} PCI formatted response
                 */
                getResponse() {
                    return { <%=jsonCardinality%> : <%=jsonDefault%> };
                },

                /**
                 * Called by the delivery engine to get the current state of the interaction
                 * @returns {Object}
                 */
                getState() {
                    return { response : { <%=jsonCardinality%> : <%=jsonDefault%> } };
                },

                /**
                 * Called back before the interaction destroys
                 */
                oncompleted() {

                }
            };

            //callback when the PCI is ready to be used
            config.onready(myInteraction);
        }
    });
});

