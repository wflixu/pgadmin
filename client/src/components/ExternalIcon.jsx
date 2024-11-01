import React from 'react';
import QueryToolSvg from '../assets/img/fonticon/query_tool.svg?svgr';
import ViewDataSvg from '../assets/img/fonticon/view_data.svg?svgr';
import SaveDataSvg from '../assets/img/fonticon/save_data_changes.svg?svgr';
import PasteSvg from '../assets/img/content_paste.svg?svgr';
import FilterSvg from '../assets/img/filter_alt_black.svg?svgr';
import ClearSvg from '../assets/img/cleaning_services_black.svg?svgr';
import CommitSvg from '../assets/img/fonticon/commit.svg?svgr';
import RollbackSvg from '../assets/img/fonticon/rollback.svg?svgr';
import ConnectedSvg from '../assets/img/fonticon/connected.svg?svgr';
import DisconnectedSvg from '../assets/img/fonticon/disconnected.svg?svgr';
import RegexSvg from '../assets/img/fonticon/regex.svg?svgr';
import FormatCaseSvg from '../assets/img/fonticon/format_case.svg?svgr';
import PropTypes from 'prop-types';
import Expand from '../assets/img/fonticon/open_in_full.svg?svgr';
import Collapse from '../assets/img/fonticon/close_fullscreen.svg?svgr';
import AWS from '../assets/img/aws.svg?svgr';
import BigAnimal from '../assets/img/biganimal.svg?svgr';
import Azure from '../assets/img/azure.svg?svgr';
import SQLFileSvg from '../assets/img/sql_file.svg?svgr';
import SQLQuerySvg from '../assets/img/sql_query.svg?svgr';
import ExecuteQuerySvg from '../assets/img/execute_query.svg?svgr';
import MagicSvg from '../assets/img/magic.svg?svgr';
import MsAzure from '../assets/img/ms_azure.svg?svgr';
import GoogleCloud from '../assets/img/google-cloud-1.svg?svgr';
import TerminalSvg from '../assets/img/fonticon/terminal.svg?svgr';
import RowFilterSvg from '../assets/img/fonticon/row_filter.svg?svgr';
import SvgIcon from '@mui/material/SvgIcon';

export default function ExternalIcon({Icon, ...props}) {
  return <SvgIcon component={Icon} inheritViewBox {...props}/>;
}

ExternalIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
};

export const QueryToolIcon = ({style})=><ExternalIcon Icon={QueryToolSvg} style={{height: '1rem', ...style}} data-label="QueryToolIcon" />;
QueryToolIcon.propTypes = {style: PropTypes.object};

export const ViewDataIcon = ({style})=><ExternalIcon Icon={ViewDataSvg} style={{height: '0.85rem', ...style}} data-label="ViewDataIcon" />;
ViewDataIcon.propTypes = {style: PropTypes.object};

export const SaveDataIcon = ({style})=><ExternalIcon Icon={SaveDataSvg} style={{height: '1rem', ...style}} data-label="SaveDataIcon" />;
SaveDataIcon.propTypes = {style: PropTypes.object};

export const PasteIcon = ({style})=><ExternalIcon Icon={PasteSvg} style={style} data-label="PasteIcon" />;
PasteIcon.propTypes = {style: PropTypes.object};

export const FilterIcon = ({style})=><ExternalIcon Icon={FilterSvg} style={style} data-label="FilterIcon" />;
FilterIcon.propTypes = {style: PropTypes.object};

export const CommitIcon = ({style})=><ExternalIcon Icon={CommitSvg} style={{height: '1.2rem', ...style}} data-label="CommitIcon" />;
CommitIcon.propTypes = {style: PropTypes.object};

export const RollbackIcon = ({style})=><ExternalIcon Icon={RollbackSvg} style={{height: '1.2rem', ...style}} data-label="RollbackIcon" />;
RollbackIcon.propTypes = {style: PropTypes.object};

export const ClearIcon = ({style})=><ExternalIcon Icon={ClearSvg} style={style} data-label="ClearIcon" />;
ClearIcon.propTypes = {style: PropTypes.object};

export const ConnectedIcon = ({style})=><ExternalIcon Icon={ConnectedSvg} style={{height: '1rem', ...style}} data-label="ConnectedIcon" />;
ConnectedIcon.propTypes = {style: PropTypes.object};

export const DisonnectedIcon = ({style})=><ExternalIcon Icon={DisconnectedSvg} style={{height: '1rem', ...style}} data-label="DisonnectedIcon" />;
DisonnectedIcon.propTypes = {style: PropTypes.object};

export const RegexIcon = ({style})=><ExternalIcon Icon={RegexSvg} style={style} data-label="RegexIcon" />;
RegexIcon.propTypes = {style: PropTypes.object};

export const FormatCaseIcon = ({style})=><ExternalIcon Icon={FormatCaseSvg} style={style} data-label="FormatCaseIcon" />;
FormatCaseIcon.propTypes = {style: PropTypes.object};

export const ExpandDialogIcon = ({style})=><ExternalIcon Icon={Expand} style={{height: '1.2rem', ...style}} data-label="ExpandDialogIcon" />;
ExpandDialogIcon.propTypes = {style: PropTypes.object};

export const MinimizeDialogIcon = ({style})=><ExternalIcon Icon={Collapse} style={{height: '1.4rem', ...style}} data-label="MinimizeDialogIcon" />;
MinimizeDialogIcon.propTypes = {style: PropTypes.object};

export const TerminalIcon = ({style})=><ExternalIcon Icon={TerminalSvg} style={{height: '1.5rem', transform: 'scale(0.95)', ...style}} data-label="TerminalIcon" />;
TerminalIcon.propTypes = {style: PropTypes.object};

export const RowFilterIcon = ({style})=><ExternalIcon Icon={RowFilterSvg} style={{height: '1rem', ...style}} data-label="RowFilterIcon" />;
RowFilterIcon.propTypes = {style: PropTypes.object};

export const AWSIcon = ({style})=><ExternalIcon Icon={AWS} style={{height: '2.2rem',width: '3.2rem', ...style}} data-label="AWSIcon" />;
AWSIcon.propTypes = {style: PropTypes.object};

export const BigAnimalIcon = ({style})=><ExternalIcon Icon={BigAnimal} style={{height: '2.2rem',width: '3.2rem', ...style}} data-label="BigAnimalIcon" />;
BigAnimalIcon.propTypes = {style: PropTypes.object};

export const AzureIcon = ({style})=><ExternalIcon Icon={Azure} style={{height: '2.2rem', width: '3.2rem', ...style}} data-label="AzureIcon" />;
AzureIcon.propTypes = {style: PropTypes.object};

export const GoogleCloudIcon = ({style})=><ExternalIcon Icon={GoogleCloud} style={{height: '2.2rem', width: '3.2rem', ...style}} data-label="GoogleCloudIcon" />;
GoogleCloudIcon.propTypes = {style: PropTypes.object};

export const SQLFileIcon = ({style})=><ExternalIcon Icon={SQLFileSvg} style={{height: '1rem', ...style}} data-label="SQLFileIcon" />;
SQLFileIcon.propTypes = {style: PropTypes.object};

export const SQLQueryIcon = ({style})=><ExternalIcon Icon={SQLQuerySvg} style={{height: '2rem', ...style}} data-label="SQLQueryIcon" />;
SQLQueryIcon.propTypes = {style: PropTypes.object};

export const ExecuteQueryIcon = ({style})=><ExternalIcon Icon={ExecuteQuerySvg} style={style} data-label="ExecuteQueryIcon" />;
ExecuteQueryIcon.propTypes = {style: PropTypes.object};

export const MagicIcon = ({style})=><ExternalIcon Icon={MagicSvg} style={{height: '1rem', ...style}} data-label="MagicIcon" />;
MagicIcon.propTypes = {style: PropTypes.object};

export const MSAzureIcon = ({style})=><ExternalIcon Icon={MsAzure} style={{height: '6rem', width: '7rem', ...style}} data-label="MSAzureIcon" />;
MSAzureIcon.propTypes = {style: PropTypes.object};
