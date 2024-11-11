

import gettext from '../gettext';
import pgAdmin from '../pgadmin';

export function retrieveAncestorOfTypeServer(pgBrowser, item, errorAlertTitle) {
  let serverInformation = null;
  let treeItem = item || pgBrowser.tree.selected();
  let treeNode = pgBrowser.tree.findNodeByDomElement(treeItem);

  if (treeNode) {
    let nodeData;
    let databaseNode = treeNode.ancestorNode(
      (node) => {
        nodeData = node.getData();
        return (nodeData._type === 'database');
      }
    );

    let isServerNode = (node) => {
      nodeData = node.getData();
      return nodeData._type === 'server';
    };

    if (databaseNode !== null) {
      if (nodeData._label.indexOf('=') >= 0) {
        pgAdmin.Browser.notifier.alert(
          gettext(errorAlertTitle),
          gettext(
            'Databases with = symbols in the name cannot be backed up or restored using this utility.'
          )
        );
      } else if (databaseNode.anyParent(isServerNode))
        serverInformation = nodeData;
    } else  if (treeNode.anyFamilyMember(isServerNode))
      serverInformation = nodeData;
  }

  if (serverInformation === null) {
    pgAdmin.Browser.notifier.alert(
      gettext(errorAlertTitle),
      gettext('Please select server or child node from the object explorer.')
    );
  }

  return serverInformation;
}

export function retrieveAncestorOfTypeDatabase(pgBrowser, item, errorAlertTitle) {
  let databaseInfo = null;
  let treeItem = item || pgBrowser.tree.selected();
  let treeNode = pgBrowser.tree.findNodeByDomElement(treeItem);
  if (treeNode) {
    if(treeNode.getData()._type === 'database') {
      databaseInfo = treeNode.getData();
    } else {
      let nodeData = null;
      treeNode.ancestorNode(
        (node) => {
          nodeData = node.getData();
          if(nodeData._type === 'database') {
            databaseInfo = nodeData;
            return true;
          }
          return false;
        }
      );
    }
  }

  if (databaseInfo === null) {
    pgAdmin.Browser.notifier.alert(
      gettext(errorAlertTitle),
      gettext('Please select a database or its child node from the browser.')
    );
  }

  return databaseInfo;
}
