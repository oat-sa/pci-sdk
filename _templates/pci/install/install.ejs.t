---
to: <%=root%>/<%=extension%>/scripts/install/RegisterPci<%=typeIdentifier.charAt(0).toUpperCase()%><%=typeIdentifier.substring(1)%>.php
---
<?php

namespace oat\<%=extension%>\scripts\install;

use oat\taoQtiItem\model\portableElement\action\RegisterPortableElement;

class RegisterPci<%=typeIdentifier.charAt(0).toUpperCase()%><%=typeIdentifier.substring(1)%> extends RegisterPortableElement
{
    protected function getSourceDirectory()
    {
        $viewDir = \common_ext_ExtensionsManager::singleton()->getExtensionById('<%=extension%>')->getConstant('DIR_VIEWS');
        return $viewDir . implode(DIRECTORY_SEPARATOR, ['js', 'pciCreator', 'ims', '<%=typeIdentifier%>']);
    }
}
