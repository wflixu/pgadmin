import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import gettext from '../gettext';
import React, { useEffect, useRef } from 'react';
import { Tree } from 'react-arborist';
import AutoSizer from 'react-virtualized-auto-sizer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PropTypes from 'prop-types';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import EmptyPanelMessage from './EmptyPanelMessage';
import CheckBoxIcon from '@mui/icons-material/CheckBox';



const Root = styled('div')(({ theme }) => ({
  height: '100%',
  '& .PgTree-tree': {
    background: theme.palette.background.default,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    '& .PgTree-leafNode': {
      marginLeft: '1.5rem'
    },
    '& .PgTree-node': {
      display: 'inline-block',
      paddingLeft: '1.5rem',
      height: '100%',
    },
    '& .PgTree-focusedNode': {
      background: theme.palette.primary.light,
    },
  },
}));

export const PgTreeSelectionContext = React.createContext();

export default function PgTreeView({ data = [], hasCheckbox = false,
  selectionChange = null, NodeComponent = null, ...props }) {

  let treeData = data;
  const Node = NodeComponent ?? DefaultNode;
  const treeObj = useRef();
  const treeContainerRef = useRef();
  const [selectedCheckBoxNodes, setSelectedCheckBoxNodes] = React.useState([]);

  const onSelectionChange = () => {
    let selectedChNodes = treeObj.current.selectedNodes;
    if (hasCheckbox) {
      let selectedChildNodes = [];

      treeObj.current.selectedNodes.forEach((node) => {
        if (node.isInternal && !node.isOpen) {
          node.children.forEach((ch) => {
            if (ch.data.isSelected && ch.isLeaf && !selectedChildNodes.includes(ch.id)) {
              selectedChildNodes.push(ch.id);
              selectedChNodes.push(ch);
            }
          });
        }
        selectedChildNodes.push(node.id);
      });
      setSelectedCheckBoxNodes(selectedChildNodes);
    }

    selectionChange?.(selectedChNodes);
  };

  return (<Root>
    {treeData.length > 0 ?
      <PgTreeSelectionContext.Provider value={selectedCheckBoxNodes}>
        <div ref={(containerRef) => treeContainerRef.current = containerRef} className={'PgTree-tree'}>
          <AutoSizer>
            {({ width, height }) => (
              <Tree
                ref={(obj) => {
                  treeObj.current = obj;
                }}
                width={isNaN(width) ? 100 : width}
                height={isNaN(height) ? 100 : height}
                data={treeData}
                disableDrag={true}
                disableDrop={true}
                dndRootElement={treeContainerRef.current}
                {...props}
              >
                {
                  (props) => <Node onNodeSelectionChange={onSelectionChange} hasCheckbox={hasCheckbox} {...props} />
                }
              </Tree>
            )}
          </AutoSizer>
        </div>
      </PgTreeSelectionContext.Provider>
      :
      <EmptyPanelMessage text={gettext('No objects are found to display')} />
    }
  </Root>
  );
}

PgTreeView.propTypes = {
  data: PropTypes.array,
  selectionChange: PropTypes.func,
  hasCheckbox: PropTypes.bool,
  NodeComponent: PropTypes.func
};

function DefaultNode({ node, style, tree, hasCheckbox, onNodeSelectionChange }) {

  const pgTreeSelCtx = React.useContext(PgTreeSelectionContext);
  const [isSelected, setIsSelected] = React.useState(pgTreeSelCtx.includes(node.id) || node.data?.isSelected);
  const [isIndeterminate, setIsIndeterminate] = React.useState(node?.parent.level == 0);

  useEffect(() => {
    setIsIndeterminate(node.data.isIndeterminate);
  }, [node?.data?.isIndeterminate]);


  useEffect(() => {
    if (isSelected) {
      if (!pgTreeSelCtx.includes(node.id)) {
        tree.selectMulti(node.id);
        onNodeSelectionChange();
      }
    }
  }, [isSelected]);


  const onCheckboxSelection = (e) => {
    if (hasCheckbox) {
      setIsSelected(e.currentTarget.checked);
      node.data.isSelected = e.currentTarget.checked;
      if (e.currentTarget.checked) {
        node.selectMulti(node.id);
        if (!node.isLeaf) {
          node.data.isIndeterminate = false;
          selectAllChild(node, tree, 'checkbox', pgTreeSelCtx);
        } else if (node?.parent) {
          checkAndSelectParent(node);
        }

        if (node?.level == 0) {
          node.data.isIndeterminate = false;
        }
        node.focus();
      } else {
        node.deselect(node);
        if (!node.isLeaf) {
          deselectAllChild(node);
        }

        if (node?.parent) {
          node.parent.data.isIndeterminate = false;
          delectPrentNode(node.parent);
        }
      }
    }
    tree.scrollTo(node.id, 'center');
    onNodeSelectionChange();
  };

  const onSelect = (e) => {
    node.focus();
    e.stopPropagation();
  };

  const onKeyDown = (e) => {
    if (e.code == 'Enter') {
      onSelect(e);
    }
  };

  return (
    <div style={style} className={node.isFocused ? 'PgTree-focusedNode' : ''} onClick={onSelect} onKeyDown={onKeyDown}>
      <CollectionArrow node={node} tree={tree} selectedNodeIds={pgTreeSelCtx} />
      {
        hasCheckbox ? <Checkbox style={{ padding: 0 }} color="primary" className={!node.isInternal ? 'PgTree-leafNode' : null}
          checked={isSelected}
          checkedIcon={isIndeterminate ? <IndeterminateCheckBoxIcon style={{ height: '1.4rem' }} /> : <CheckBoxIcon style={{ height: '1.4rem' }} />}
          onChange={onCheckboxSelection} /> :
          <span className={node.data.icon}></span>
      }
      <div className={node.data.icon + ' PgTree-node'}>{node.data.name}</div>
    </div>
  );
}

DefaultNode.propTypes = {
  node: PropTypes.object,
  style: PropTypes.any,
  tree: PropTypes.object,
  hasCheckbox: PropTypes.bool,
  onNodeSelectionChange: PropTypes.func
};

function CollectionArrow({ node, tree, selectedNodeIds }) {
  const toggleNode = () => {
    node.isInternal && node.toggle();
    if (node.isSelected && node.isOpen) {
      node.data.isSelected = true;
      selectAllChild(node, tree, 'expand', selectedNodeIds);
    }
  };
  return (
    <span onClick={toggleNode} onKeyDown={() => {/* handled by parent */ }}>
      {node.isInternal && node?.children.length > 0 ? <ToggleArrowIcon node={node} /> : null}
    </span>
  );
}

CollectionArrow.propTypes = {
  node: PropTypes.object,
  tree: PropTypes.object,
  selectedNodeIds: PropTypes.array
};


function ToggleArrowIcon({ node }) {
  return (<>{node.isOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />}</>);
}

ToggleArrowIcon.propTypes = {
  node: PropTypes.object,
};

function checkAndSelectParent(chNode) {
  let isAllChildSelected = true;
  chNode?.parent?.children?.forEach((child) => {
    if (!child.isSelected) {
      isAllChildSelected = false;
    }
  });
  if (chNode?.parent) {
    if (isAllChildSelected) {
      if (chNode.parent?.level == 0) {
        chNode.parent.data.isIndeterminate = true;
      } else {
        chNode.parent.data.isIndeterminate = false;
      }
      chNode.parent.selectMulti(chNode.parent.id);
    } else {
      chNode.parent.data.isIndeterminate = true;
      chNode.parent.selectMulti(chNode.parent.id);
    }
    chNode.parent.data.isSelected = true;
    checkAndSelectParent(chNode.parent);
  }
}

checkAndSelectParent.propTypes = {
  chNode: PropTypes.object
};

function delectPrentNode(chNode) {
  if (chNode) {
    let isAnyChildSelected = false;
    chNode.children.forEach((childNode) => {
      if (childNode.isSelected && !isAnyChildSelected) {
        isAnyChildSelected = true;
      }
    });
    if (isAnyChildSelected) {
      chNode.data.isSelected = true;
      chNode.data.isIndeterminate = true;
    } else {
      chNode.deselect(chNode);
      chNode.data.isSelected = false;
    }
  }

  if (chNode?.parent) {
    delectPrentNode(chNode.parent);
  }
}

function selectAllChild(chNode, tree, source, selectedNodeIds) {
  let selectedChild = 0;
  chNode?.children?.forEach(child => {

    if (!child.isLeaf) {
      child.data.isIndeterminate = false;
    }
    if ((source == 'expand' && selectedNodeIds.includes(child.id)) || source == 'checkbox') {
      child.data.isSelected = true;
      selectedChild += 1;
    }
    child.selectMulti(child.id);

    if (child?.children) {
      selectAllChild(child, tree, source, selectedNodeIds);
    }
  });

  if (selectedChild < chNode?.children.length) {
    chNode.data.isIndeterminate = true;
  } else {
    chNode.data.isIndeterminate = false;
  }

  if (chNode?.parent) {
    checkAndSelectParent(chNode);
  }
}

function deselectAllChild(chNode) {
  chNode?.children.forEach(child => {
    child.deselect(child);
    child.data.isSelected = false;
    if (child?.children) {
      deselectAllChild(child);
    }
  });
}
