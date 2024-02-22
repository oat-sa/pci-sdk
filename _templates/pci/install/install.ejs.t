---
to: <%=root%>/<%=extension%>/scripts/install/RegisterPci<%=h.capitalize(typeIdentifier)%>.php
---
<?php

namespace oat\<%=extension%>\scripts\install;

use oat\taoQtiItem\model\portableElement\action\RegisterPortableElement;

class RegisterPci<%=h.capitalize(typeIdentifier)%> extends RegisterPortableElement
{
    protected function getSourceDirectory()
    {
        $viewDir = \common_ext_ExtensionsManager::singleton()->getExtensionById('<%=extension%>')->getConstant('DIR_VIEWS');
        return $viewDir . implode(DIRECTORY_SEPARATOR, ['js', 'pciCreator', 'ims', '<%=typeIdentifier%>']);
    }
}
