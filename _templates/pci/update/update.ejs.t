---
to: <%=taoPath%>/<%=extension%>/migrations/Version<%=h.getSID()%>_<%=extension%>.php
---
<?php

declare(strict_types=1);

namespace oat\<%=extension%>\migrations;

use Doctrine\DBAL\Schema\Schema;
use oat\tao\scripts\tools\migrations\AbstractMigration;
use Doctrine\Migrations\Exception\IrreversibleMigration;
use oat\qtiItemPci\model\IMSPciModel;
use oat\<%=extension%>\scripts\install\RegisterPci<%=h.capitalize(typeIdentifier)%>;

/**
 * phpcs:disable Squiz.Classes.ValidClassName
 */
final class Version<%=h.getSID()%>_<%=extension%> extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Install/update PCI <%=h.capitalize(typeIdentifier)%>';
    }

    public function up(Schema $schema): void
    {
        $registry = (new IMSPciModel())->getRegistry();
        $this->addReport(
            $this->propagate(
                new RegisterPci<%=h.capitalize(typeIdentifier)%>()
            )(
                ['<%=version%>']
            )
        );
    }

    public function down(Schema $schema): void
    {
        throw new IrreversibleMigration(
            'In order to undo this migration, please revert the client-side changes and run ' . RegisterPci<%=h.capitalize(typeIdentifier)%>::class
        );
    }
}
