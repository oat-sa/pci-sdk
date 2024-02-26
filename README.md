# pci-sdk

PCI Software Development Kit (prototype)

## Generate PCI skeleton

### Runtime only

```
npm run pci:runtime
```

### Add the TAO PCI Creator part to a runtime

```
npm run pci:creator
```

If you use the same `path` and `typeIdentifier` than the runtime it will generate the creator part on top of it.

### Add a TAO install script for a PCI

```
npm run pci:installer
```

### Add a TAO migration script for a PCI

```
npm run pci:migration
```
