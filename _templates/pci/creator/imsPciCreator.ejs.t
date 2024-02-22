---
to: <%=pciPath%>/<%=typeIdentifier%>/imsPciCreator.js
---
define(['<%=typeIdentifier%>/creator/widget/Widget'], function (Widget) {
    'use strict';

    const typeIdentifier = '<%=typeIdentifier%>';

    return {

        /**
         * (required) Get the typeIdentifier of the custom interaction
         *
         * @returns {String}
         */
        getTypeIdentifier() {
            return typeIdentifier;
        },

        /**
         * (required) Get the widget prototype
         * Used in the renderer
         *
         * @returns {Object} Widget
         */
        getWidget() {
            return Widget;
        },

        /**
         * (optional) Get the default properties values of the pci.
         * Used on new pci instance creation
         *
         * @returns {Object}
         */
        getDefaultProperties() {
            return {

            };
        },

        /**
         * (optional) Callback to execute on the
         * new pci instance creation
         *
         * @returns {Object}
         */
        afterCreate() {

        },

        /**
         * (required) Gives the qti pci markup template
         *
         * @returns {function} template function
         */
        getMarkupTemplate() {
            return  templateData => `<div class="<%=h.changeCase.snake(typeIdentifier)%>" data-serial="${templateData.serial}"></div>`;
        },

        /**
         * (optional) Allows passing additional data to xml template (see templateData)
         *
         * @returns {Object} template data
         */
        getMarkupData(pci, defaultData) {
            return Object.assign({
                serial: Date.now()
            }, defaultData);
        }
    };
});
