---
to: <%=pciPath%>/<%=typeIdentifier%>/creator/widget/Widget.js
---
define([
    'taoQtiItem/qtiCreator/widgets/interactions/customInteraction/Widget',
    '<%=typeIdentifier%>/creator/widget/states/states',
], function (Widget, states) {
    'use strict';

    const interactionWidget = Widget.clone();

    interactionWidget.initCreator = function () {
        this.registerStates(states);
        Widget.initCreator.call(this);
    };

    return interactionWidget;
});
