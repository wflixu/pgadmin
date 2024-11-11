
import _ from 'lodash';


export const endpoints = {
  'static': '/static/<path:filename>',

  'kerberos.login': '/kerberos/login',

  'kerberos.logout': '/kerberos/logout',

  'kerberos.update_ticket': '/kerberos/update_ticket',

  'kerberos.validate_ticket': '/kerberos/validate_ticket',

  'webserver.login': '/webserver/login',

  'webserver.logout': '/webserver/logout',

  'about.index': '/about/',

  'authenticate.login': '/authenticate/login',

  'browser.index': '/browser/',

  'browser.nodes': '/browser/nodes/',

  'browser.check_corrupted_db_file': '/browser/check_corrupted_db_file',

  'browser.check_master_password': '/browser/master_password',

  'browser.set_master_password': '/browser/master_password',

  'browser.reset_master_password': '/browser/master_password',

  'NODE-server.connect_id': '/browser/server/connect/<int:gid>/<int:sid>',

  'NODE-server.connect_id': '/browser/server/connect/<int:gid>/<int:sid>',

  'NODE-server.connect_id': '/browser/server/connect/<int:gid>/<int:sid>',

  'dashboard.index': '/dashboard/',

  'dashboard.get_by_sever_id': '/dashboard/<int:sid>',

  'dashboard.get_by_database_id': '/dashboard/<int:sid>/<int:did>',

  'dashboard.dashboard_stats': '/dashboard/dashboard_stats',

  'dashboard.dashboard_stats_sid': '/dashboard/dashboard_stats/<int:sid>',

  'dashboard.dashboard_stats_did': '/dashboard/dashboard_stats/<int:sid>/<int:did>',

  'dashboard.activity': '/dashboard/activity/',

  'dashboard.get_activity_by_server_id': '/dashboard/activity/<int:sid>',

  'dashboard.get_activity_by_database_id': '/dashboard/activity/<int:sid>/<int:did>',

  'dashboard.locks': '/dashboard/locks/',

  'dashboard.get_locks_by_server_id': '/dashboard/locks/<int:sid>',

  'dashboard.get_locks_by_database_id': '/dashboard/locks/<int:sid>/<int:did>',

  'dashboard.prepared': '/dashboard/prepared/',

  'dashboard.get_prepared_by_server_id': '/dashboard/prepared/<int:sid>',

  'dashboard.get_prepared_by_database_id': '/dashboard/prepared/<int:sid>/<int:did>',

  'dashboard.config': '/dashboard/config/<int:sid>',

  'dashboard.log_formats': '/dashboard/log_formats/<int:sid>',

  'dashboard.log_formats': '/dashboard/log_formats',

  'dashboard.logs': '/dashboard/logs/<log_format>/<disp_format>/<int:sid>',

  'dashboard.get_logs_by_server_id': '/dashboard/logs/<log_format>/<disp_format>/<int:sid>/<int:page>',

  'dashboard.check_system_statistics': '/dashboard/check_extension/system_statistics',

  'dashboard.check_system_statistics_sid': '/dashboard/check_extension/system_statistics/<int:sid>',

  'dashboard.check_system_statistics_did': '/dashboard/check_extension/system_statistics/<int:sid>/<int:did>',

  'dashboard.system_statistics': '/dashboard/system_statistics',

  'dashboard.system_statistics_sid': '/dashboard/system_statistics/<int:sid>',

  'dashboard.system_statistics_did': '/dashboard/system_statistics/<int:sid>/<int:did>',

  'dashboard.replication_slots': '/dashboard/replication_slots/<int:sid>',

  'dashboard.replication_stats': '/dashboard/replication_stats/<int:sid>',

  'dashboard.pgd.outgoing': '/dashboard/pgd/outgoing/<int:sid>',

  'dashboard.pgd.incoming': '/dashboard/pgd/incoming/<int:sid>',

  'dashboard.pgd.cluster_nodes': '/dashboard/pgd/cluster_nodes/<int:sid>',

  'dashboard.pgd.raft_status': '/dashboard/pgd/raft_status/<int:sid>',

  'dashboard.pgd.charts': '/dashboard/pgd/charts/<int:sid>',

  'help.static': '/help/help/<path:filename>',

  'misc.ping': '/misc/ping',

  'misc.index': '/misc/',

  'misc.cleanup': '/misc/cleanup',

  'misc.validate_binary_path': '/misc/validate_binary_path',

  'misc.log_heartbeat': '/misc/heartbeat/log',

  'misc.stop_heartbeat': '/misc/heartbeat/stop',

  'misc.get_heartbeat': '/misc/get_heartbeat/<int:sid>',

  'misc.upgrade_check': '/misc/upgrade_check',

  'bgprocess.status': '/misc/bgprocess/<pid>',

  'bgprocess.detailed_status': '/misc/bgprocess/<pid>/<int:out>/<int:err>/',

  'bgprocess.acknowledge': '/misc/bgprocess/<pid>',

  'bgprocess.list': '/misc/bgprocess/',

  'bgprocess.stop_process': '/misc/bgprocess/stop/<pid>',

  'bgprocess.update_cloud_details': '/misc/bgprocess/update_cloud_details/<pid>',

  'file_manager.init': '/file_manager/init',

  'file_manager.filemanager': '/file_manager/filemanager/<int:trans_id>/',

  'file_manager.index': '/file_manager/',

  'file_manager.delete_trans_id': '/file_manager/delete_trans_id/<int:trans_id>',

  'file_manager.save_last_dir': '/file_manager/save_last_dir/<int:trans_id>',

  'file_manager.save_file_dialog_view': '/file_manager/save_file_dialog_view/<int:trans_id>',

  'file_manager.save_show_hidden_file_option': '/file_manager/save_show_hidden_file_option/<int:trans_id>',

  'bgprocess.status': '/misc/bgprocess/<pid>',

  'bgprocess.detailed_status': '/misc/bgprocess/<pid>/<int:out>/<int:err>/',

  'bgprocess.acknowledge': '/misc/bgprocess/<pid>',

  'bgprocess.list': '/misc/bgprocess/',

  'bgprocess.stop_process': '/misc/bgprocess/stop/<pid>',

  'bgprocess.update_cloud_details': '/misc/bgprocess/update_cloud_details/<pid>',

  'file_manager.init': '/file_manager/init',

  'file_manager.filemanager': '/file_manager/filemanager/<int:trans_id>/',

  'file_manager.index': '/file_manager/',

  'file_manager.delete_trans_id': '/file_manager/delete_trans_id/<int:trans_id>',

  'file_manager.save_last_dir': '/file_manager/save_last_dir/<int:trans_id>',

  'file_manager.save_file_dialog_view': '/file_manager/save_file_dialog_view/<int:trans_id>',

  'file_manager.save_show_hidden_file_option': '/file_manager/save_show_hidden_file_option/<int:trans_id>',

  'preferences.index': '/preferences/',

  'preferences.get_by_name': '/preferences/<module>/<preference>',

  'preferences.get_all': '/preferences/get_all',

  'preferences.get_all_cli': '/preferences/get_all_cli',

  'preferences.update_pref': '/preferences/update',

  'settings.store': '/settings/store/<setting>/<value>',

  'settings.store_bulk': '/settings/store',

  'settings.reset_layout': '/settings/layout',

  'settings.save_tree_state': '/settings/save_tree_state/',

  'settings.get_tree_state': '/settings/get_tree_state/',

  'settings.reset_tree_state': '/settings/reset_tree_state',

  'settings.save_file_format_setting': '/settings/save_file_format_setting/',

  'settings.get_file_format_setting': '/settings/get_file_format_setting/',

  'tools.initialize': '/tools/initialize/',

  'backup.create_server_job': '/backup/job/<int:sid>',

  'backup.create_object_job': '/backup/job/<int:sid>/object',

  'backup.utility_exists': '/backup/utility_exists/<int:sid>/<backup_obj_type>',

  'backup.objects': '/backup/objects/<int:sid>/<int:did>',

  'backup.schema_objects': '/backup/objects/<int:sid>/<int:did>/<int:scid>',

  'debugger.index': '/debugger/',

  'debugger.init_for_function': '/debugger/init/<node_type>/<int:sid>/<int:did>/<int:scid>/<int:fid>',

  'debugger.init_for_trigger': '/debugger/init/<node_type>/<int:sid>/<int:did>/<int:scid>/<int:fid>/<int:trid>',

  'debugger.direct': '/debugger/direct/<int:trans_id>',

  'debugger.initialize_target_for_function': '/debugger/initialize_target/<debug_type>/<int:trans_id>/<int:sid>/<int:did>/<int:scid>/<int:func_id>',

  'debugger.initialize_target_for_trigger': '/debugger/initialize_target/<debug_type>/<int:trans_id>/<int:sid>/<int:did>/<int:scid>/<int:func_id>/<int:tri_id>',

  'debugger.close': '/debugger/close/<int:trans_id>',

  'debugger.restart': '/debugger/restart/<int:trans_id>',

  'debugger.start_listener': '/debugger/start_listener/<int:trans_id>',

  'debugger.execute_query': '/debugger/execute_query/<int:trans_id>/<query_type>',

  'debugger.messages': '/debugger/messages/<int:trans_id>/',

  'debugger.start_execution': '/debugger/start_execution/<int:trans_id>/<int:port_num>',

  'debugger.set_breakpoint': '/debugger/set_breakpoint/<int:trans_id>/<int:line_no>/<int:set_type>',

  'debugger.clear_all_breakpoint': '/debugger/clear_all_breakpoint/<int:trans_id>',

  'debugger.deposit_value': '/debugger/deposit_value/<int:trans_id>',

  'debugger.select_frame': '/debugger/select_frame/<int:trans_id>/<int:frame_id>',

  'debugger.get_arguments': '/debugger/get_arguments/<int:sid>/<int:did>/<int:scid>/<int:func_id>',

  'debugger.set_arguments': '/debugger/set_arguments/<int:sid>/<int:did>/<int:scid>/<int:func_id>',

  'debugger.clear_arguments': '/debugger/clear_arguments/<int:sid>/<int:did>/<int:scid>/<int:func_id>',

  'debugger.poll_end_execution_result': '/debugger/poll_end_execution_result/<int:trans_id>/',

  'debugger.poll_result': '/debugger/poll_result/<int:trans_id>/',

  'erd.panel': '/erd/panel/<int:trans_id>',

  'erd.initialize': '/erd/initialize/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

  'erd.prequisite': '/erd/prequisite/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

  'erd.sql': '/erd/sql/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

  'erd.close': '/erd/close/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

  'grant_wizard.acl': '/grant_wizard/acl/<int:sid>/<int:did>/',

  'grant_wizard.objects': '/grant_wizard/<int:sid>/<int:did>/<int:node_id>/<node_type>/',

  'grant_wizard.apply': '/grant_wizard/<int:sid>/<int:did>/',

  'grant_wizard.modified_sql': '/grant_wizard/sql/<int:sid>/<int:did>/',

  'import_export.create_job': '/import_export/job/<int:sid>',

  'import_export.utility_exists': '/import_export/utility_exists/<int:sid>',

  'import_export.get_settings': '/import_export/get_settings/',

  'import_export_servers.get_servers': '/import_export_servers/get_servers',

  'import_export_servers.load_servers': '/import_export_servers/load_servers',

  'import_export_servers.save': '/import_export_servers/save',

  'maintenance.create_job': '/maintenance/job/<int:sid>/<int:did>',

  'maintenance.utility_exists': '/maintenance/utility_exists/<int:sid>',

  'psql.panel': '/psql/panel/<int:trans_id>',

  'restore.create_job': '/restore/job/<int:sid>',

  'restore.utility_exists': '/restore/utility_exists/<int:sid>',

  'schema_diff.initialize': '/schema_diff/initialize/<int:trans_id>',

  'schema_diff.panel': '/schema_diff/panel/<int:trans_id>/<path:editor_title>',

  'schema_diff.servers': '/schema_diff/servers',

  'schema_diff.databases': '/schema_diff/databases/<int:sid>',

  'schema_diff.schemas': '/schema_diff/schemas/<int:sid>/<int:did>',

  'schema_diff.ddl_compare': '/schema_diff/ddl_compare/<int:trans_id>/<int:source_sid>/<int:source_did>/<int:source_scid>/<int:target_sid>/<int:target_did>/<int:target_scid>/<int:source_oid>/<int:target_oid>/<node_type>/<comp_status>/',

  'schema_diff.connect_server': '/schema_diff/server/connect/<int:sid>',

  'schema_diff.connect_database': '/schema_diff/database/connect/<int:sid>/<int:did>',

  'schema_diff.get_server': '/schema_diff/get_server/<int:sid>/<int:did>',

  'schema_diff.close': '/schema_diff/close/<int:trans_id>',

  'search_objects.search': '/search_objects/search/<int:sid>/<int:did>',

  'search_objects.types': '/search_objects/types/<int:sid>/<int:did>',

  'sqleditor.initialize_viewdata': '/sqleditor/initialize/viewdata/<int:trans_id>/<int:cmd_type>/<obj_type>/<int:sgid>/<int:sid>/<int:did>/<int:obj_id>',

  'sqleditor.initialize_sqleditor': '/sqleditor/initialize/sqleditor/<int:trans_id>/<int:sgid>/<int:sid>',

  'sqleditor.initialize_sqleditor_with_did': '/sqleditor/initialize/sqleditor/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

  'sqleditor.filter_validate': '/sqleditor/filter/validate/<int:sid>/<int:did>/<int:obj_id>',

  'sqleditor.filter': '/sqleditor/filter',

  'sqleditor.panel': '/sqleditor/panel/<int:trans_id>',

  'sqleditor.close': '/sqleditor/close/<int:trans_id>',

  'sqleditor.update_sqleditor_connection': '/sqleditor/initialize/sqleditor/update_connection/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

  'sqleditor.view_data_start': '/sqleditor/view_data/start/<int:trans_id>',

  'sqleditor.query_tool_start': '/sqleditor/query_tool/start/<int:trans_id>',

  'sqleditor.poll': '/sqleditor/poll/<int:trans_id>',

  'sqleditor.fetch_window': '/sqleditor/fetch_window/<int:trans_id>/<int:from_rownum>/<int:to_rownum>',

  'sqleditor.fetch_all_from_start': '/sqleditor/fetch_all_from_start/<int:trans_id>/<int:limit>',

  'sqleditor.save': '/sqleditor/save/<int:trans_id>',

  'sqleditor.inclusive_filter': '/sqleditor/filter/inclusive/<int:trans_id>',

  'sqleditor.exclusive_filter': '/sqleditor/filter/exclusive/<int:trans_id>',

  'sqleditor.remove_filter': '/sqleditor/filter/remove/<int:trans_id>',

  'sqleditor.set_limit': '/sqleditor/limit/<int:trans_id>',

  'sqleditor.cancel_transaction': '/sqleditor/cancel/<int:trans_id>',

  'sqleditor.get_object_name': '/sqleditor/object/get/<int:trans_id>',

  'sqleditor.auto_commit': '/sqleditor/auto_commit/<int:trans_id>',

  'sqleditor.auto_rollback': '/sqleditor/auto_rollback/<int:trans_id>',

  'sqleditor.autocomplete': '/sqleditor/autocomplete/<int:trans_id>',

  'sqleditor.load_file': '/sqleditor/load_file/',

  'sqleditor.save_file': '/sqleditor/save_file/',

  'sqleditor.query_tool_download': '/sqleditor/query_tool/download/<int:trans_id>',

  'sqleditor.connection_status': '/sqleditor/status/<int:trans_id>',

  'sqleditor.get_filter_data': '/sqleditor/filter_dialog/<int:trans_id>',

  'sqleditor.set_filter_data': '/sqleditor/filter_dialog/<int:trans_id>',

  'sqleditor.get_query_history': '/sqleditor/query_history/<int:trans_id>',

  'sqleditor.add_query_history': '/sqleditor/query_history/<int:trans_id>',

  'sqleditor.clear_query_history': '/sqleditor/query_history/<int:trans_id>',

  'sqleditor.get_macro': '/sqleditor/get_macros/<int:macro_id>/<int:trans_id>',

  'sqleditor.get_macros': '/sqleditor/get_macros/<int:trans_id>',

  'sqleditor.get_user_macros': '/sqleditor/get_user_macros',

  'sqleditor.set_macros': '/sqleditor/set_macros/<int:trans_id>',

  'sqleditor.get_new_connection_data': '/sqleditor/new_connection_dialog/<int:sgid>/<int:sid>',

  'sqleditor.get_new_connection_servers': '/sqleditor/new_connection_dialog',

  'sqleditor.get_new_connection_database': '/sqleditor/new_connection_database/<int:sgid>/<int:sid>',

  'sqleditor.get_new_connection_user': '/sqleditor/new_connection_user/<int:sgid>/<int:sid>',

  'sqleditor._check_server_connection_status': '/sqleditor/get_server_connection/<int:sgid>/<int:sid>',

  'sqleditor.get_new_connection_role': '/sqleditor/new_connection_role/<int:sgid>/<int:sid>',

  'sqleditor.connect_server': '/sqleditor/connect_server/<int:sid>',

  'user_management.roles': '/user_management/role/',

  'user_management.role': '/user_management/role/<int:rid>',

  'user_management.users': '/user_management/user/',

  'user_management.user': '/user_management/user/<int:uid>',

  'static': '/static/<path:filename>',

  'security.static': '/fs-static/<path:filename>',

  'security.logout': '/logout',

  'security.login': '/login',

  'security.verify': '/verify',

  'kerberos.static': '/kerberos/<path:filename>',

  'kerberos.login': '/kerberos/login',

  'kerberos.logout': '/kerberos/logout',

  'kerberos.update_ticket': '/kerberos/update_ticket',

  'kerberos.validate_ticket': '/kerberos/validate_ticket',

  'webserver.static': '/webserver/<path:filename>',

  'webserver.login': '/webserver/login',

  'webserver.logout': '/webserver/logout',

  'about.static': '/about/<path:filename>',

  'about.index': '/about/',

  'authenticate.static': '/authenticate/<path:filename>',

  'authenticate.login': '/authenticate/login',

  'browser.static': '/browser/static/<path:filename>',

  'browser.index': '/browser/',

  'browser.utils': '/browser/js/utils.js',

  'browser.exposed_urls': '/browser/js/endpoints.js',

  'browser.error_js': '/browser/js/error.js',

  'browser.messages_js': '/browser/js/messages.js',

  'browser.browser_css': '/browser/browser.css',

  'browser.nodes': '/browser/nodes/',

  'browser.check_corrupted_db_file': '/browser/check_corrupted_db_file',

  'browser.check_master_password': '/browser/master_password',

  'browser.reset_master_password': '/browser/master_password',

  'browser.set_master_password': '/browser/master_password',

  'NODE-server_group.static': '/browser/server_group/static/<path:filename>',

  'NODE-server_group.obj_id': '/browser/server_group/obj/<int:gid>',

  'NODE-server_group.obj': '/browser/server_group/obj/',

  'NODE-server_group.nodes_id': '/browser/server_group/nodes/<int:gid>',

  'NODE-server_group.nodes': '/browser/server_group/nodes/',

  'NODE-server_group.sql_id': '/browser/server_group/sql/<int:gid>',

  'NODE-server_group.msql_id': '/browser/server_group/msql/<int:gid>',

  'NODE-server_group.stats_id': '/browser/server_group/stats/<int:gid>',

  'NODE-server_group.dependency_id': '/browser/server_group/dependency/<int:gid>',

  'NODE-server_group.dependent_id': '/browser/server_group/dependent/<int:gid>',

  'NODE-server_group.children_id': '/browser/server_group/children/<int:gid>',

  'NODE-server.static': '/browser/server/static/<path:filename>',

  'NODE-server.obj_id': '/browser/server/obj/<int:gid>/<int:sid>',

  'NODE-server.obj': '/browser/server/obj/<int:gid>/',

  'NODE-server.nodes_id': '/browser/server/nodes/<int:gid>/<int:sid>',

  'NODE-server.nodes': '/browser/server/nodes/<int:gid>/',

  'NODE-server.sql_id': '/browser/server/sql/<int:gid>/<int:sid>',

  'NODE-server.msql_id': '/browser/server/msql/<int:gid>/<int:sid>',

  'NODE-server.stats_id': '/browser/server/stats/<int:gid>/<int:sid>',

  'NODE-server.dependency_id': '/browser/server/dependency/<int:gid>/<int:sid>',

  'NODE-server.dependent_id': '/browser/server/dependent/<int:gid>/<int:sid>',

  'NODE-server.children_id': '/browser/server/children/<int:gid>/<int:sid>',

  'NODE-server.supported_servers-js': '/browser/server/supported_servers.js',

  'NODE-server.reload_id': '/browser/server/reload/<int:gid>/<int:sid>',

  'NODE-server.restore_point_id': '/browser/server/restore_point/<int:gid>/<int:sid>',

  'NODE-server.connect_id': '/browser/server/connect/<int:gid>/<int:sid>',

  'NODE-server.change_password_id': '/browser/server/change_password/<int:gid>/<int:sid>',

  'NODE-server.wal_replay_id': '/browser/server/wal_replay/<int:gid>/<int:sid>',

  'NODE-server.check_pgpass_id': '/browser/server/check_pgpass/<int:gid>/<int:sid>',

  'NODE-server.clear_saved_password_id': '/browser/server/clear_saved_password/<int:gid>/<int:sid>',

  'NODE-server.clear_sshtunnel_password_id': '/browser/server/clear_sshtunnel_password/<int:gid>/<int:sid>',

  'NODE-database.static': '/browser/database/static/<path:filename>',

  'NODE-database.obj_id': '/browser/database/obj/<int:gid>/<int:sid>/<int:did>',

  'NODE-database.obj': '/browser/database/obj/<int:gid>/<int:sid>/',

  'NODE-database.nodes_id': '/browser/database/nodes/<int:gid>/<int:sid>/<int:did>',

  'NODE-database.nodes': '/browser/database/nodes/<int:gid>/<int:sid>/',

  'NODE-database.get_databases_id': '/browser/database/get_databases/<int:gid>/<int:sid>/<int:did>',

  'NODE-database.get_databases': '/browser/database/get_databases/<int:gid>/<int:sid>/',

  'NODE-database.sql_id': '/browser/database/sql/<int:gid>/<int:sid>/<int:did>',

  'NODE-database.msql_id': '/browser/database/msql/<int:gid>/<int:sid>/<int:did>',

  'NODE-database.msql': '/browser/database/msql/<int:gid>/<int:sid>/',

  'NODE-database.stats_id': '/browser/database/stats/<int:gid>/<int:sid>/<int:did>',

  'NODE-database.stats': '/browser/database/stats/<int:gid>/<int:sid>/',

  'NODE-database.dependency_id': '/browser/database/dependency/<int:gid>/<int:sid>/<int:did>',

  'NODE-database.dependent_id': '/browser/database/dependent/<int:gid>/<int:sid>/<int:did>',

  'NODE-database.children_id': '/browser/database/children/<int:gid>/<int:sid>/<int:did>',

  'NODE-database.connect_id': '/browser/database/connect/<int:gid>/<int:sid>/<int:did>',

  'NODE-database.get_encodings_id': '/browser/database/get_encodings/<int:gid>/<int:sid>/<int:did>',

  'NODE-database.get_encodings': '/browser/database/get_encodings/<int:gid>/<int:sid>/',

  'NODE-database.get_ctypes_id': '/browser/database/get_ctypes/<int:gid>/<int:sid>/<int:did>',

  'NODE-database.get_ctypes': '/browser/database/get_ctypes/<int:gid>/<int:sid>/',

  'NODE-database.get_icu_locale_id': '/browser/database/get_icu_locale/<int:gid>/<int:sid>/<int:did>',

  'NODE-database.get_icu_locale': '/browser/database/get_icu_locale/<int:gid>/<int:sid>/',

  'NODE-database.vopts': '/browser/database/vopts/<int:gid>/<int:sid>/',

  'NODE-database.delete_id': '/browser/database/delete/<int:gid>/<int:sid>/<int:did>',

  'NODE-database.delete': '/browser/database/delete/<int:gid>/<int:sid>/',

  'NODE-cast.static': '/browser/cast/static/<path:filename>',

  'NODE-cast.obj_id': '/browser/cast/obj/<int:gid>/<int:sid>/<int:did>/<int:cid>',

  'NODE-cast.obj': '/browser/cast/obj/<int:gid>/<int:sid>/<int:did>/',

  'NODE-cast.children_id': '/browser/cast/children/<int:gid>/<int:sid>/<int:did>/<int:cid>',

  'NODE-cast.delete_id': '/browser/cast/delete/<int:gid>/<int:sid>/<int:did>/<int:cid>',

  'NODE-cast.delete': '/browser/cast/delete/<int:gid>/<int:sid>/<int:did>/',

  'NODE-cast.nodes_id': '/browser/cast/nodes/<int:gid>/<int:sid>/<int:did>/<int:cid>',

  'NODE-cast.nodes': '/browser/cast/nodes/<int:gid>/<int:sid>/<int:did>/',

  'NODE-cast.sql_id': '/browser/cast/sql/<int:gid>/<int:sid>/<int:did>/<int:cid>',

  'NODE-cast.msql_id': '/browser/cast/msql/<int:gid>/<int:sid>/<int:did>/<int:cid>',

  'NODE-cast.msql': '/browser/cast/msql/<int:gid>/<int:sid>/<int:did>/',

  'NODE-cast.stats_id': '/browser/cast/stats/<int:gid>/<int:sid>/<int:did>/<int:cid>',

  'NODE-cast.dependency_id': '/browser/cast/dependency/<int:gid>/<int:sid>/<int:did>/<int:cid>',

  'NODE-cast.dependent_id': '/browser/cast/dependent/<int:gid>/<int:sid>/<int:did>/<int:cid>',

  'NODE-cast.get_type_id': '/browser/cast/get_type/<int:gid>/<int:sid>/<int:did>/<int:cid>',

  'NODE-cast.get_type': '/browser/cast/get_type/<int:gid>/<int:sid>/<int:did>/',

  'NODE-cast.get_functions_id': '/browser/cast/get_functions/<int:gid>/<int:sid>/<int:did>/<int:cid>',

  'NODE-cast.get_functions': '/browser/cast/get_functions/<int:gid>/<int:sid>/<int:did>/',

  'NODE-cast.compare_id': '/browser/cast/compare/<int:gid>/<int:sid>/<int:did>/<int:cid>',

  'NODE-cast.compare': '/browser/cast/compare/<int:gid>/<int:sid>/<int:did>/',

  'NODE-event_trigger.static': '/browser/event_trigger/static/<path:filename>',

  'NODE-event_trigger.obj_id': '/browser/event_trigger/obj/<int:gid>/<int:sid>/<int:did>/<int:etid>',

  'NODE-event_trigger.obj': '/browser/event_trigger/obj/<int:gid>/<int:sid>/<int:did>/',

  'NODE-event_trigger.nodes_id': '/browser/event_trigger/nodes/<int:gid>/<int:sid>/<int:did>/<int:etid>',

  'NODE-event_trigger.nodes': '/browser/event_trigger/nodes/<int:gid>/<int:sid>/<int:did>/',

  'NODE-event_trigger.children_id': '/browser/event_trigger/children/<int:gid>/<int:sid>/<int:did>/<int:etid>',

  'NODE-event_trigger.sql_id': '/browser/event_trigger/sql/<int:gid>/<int:sid>/<int:did>/<int:etid>',

  'NODE-event_trigger.msql_id': '/browser/event_trigger/msql/<int:gid>/<int:sid>/<int:did>/<int:etid>',

  'NODE-event_trigger.msql': '/browser/event_trigger/msql/<int:gid>/<int:sid>/<int:did>/',

  'NODE-event_trigger.stats_id': '/browser/event_trigger/stats/<int:gid>/<int:sid>/<int:did>/<int:etid>',

  'NODE-event_trigger.dependency_id': '/browser/event_trigger/dependency/<int:gid>/<int:sid>/<int:did>/<int:etid>',

  'NODE-event_trigger.dependent_id': '/browser/event_trigger/dependent/<int:gid>/<int:sid>/<int:did>/<int:etid>',

  'NODE-event_trigger.fopts_id': '/browser/event_trigger/fopts/<int:gid>/<int:sid>/<int:did>/<int:etid>',

  'NODE-event_trigger.fopts': '/browser/event_trigger/fopts/<int:gid>/<int:sid>/<int:did>/',

  'NODE-extension.static': '/browser/extension/static/<path:filename>',

  'NODE-extension.obj_id': '/browser/extension/obj/<int:gid>/<int:sid>/<int:did>/<int:eid>',

  'NODE-extension.obj': '/browser/extension/obj/<int:gid>/<int:sid>/<int:did>/',

  'NODE-extension.delete_id': '/browser/extension/delete/<int:gid>/<int:sid>/<int:did>/<int:eid>',

  'NODE-extension.delete': '/browser/extension/delete/<int:gid>/<int:sid>/<int:did>/',

  'NODE-extension.nodes_id': '/browser/extension/nodes/<int:gid>/<int:sid>/<int:did>/<int:eid>',

  'NODE-extension.nodes': '/browser/extension/nodes/<int:gid>/<int:sid>/<int:did>/',

  'NODE-extension.sql_id': '/browser/extension/sql/<int:gid>/<int:sid>/<int:did>/<int:eid>',

  'NODE-extension.msql_id': '/browser/extension/msql/<int:gid>/<int:sid>/<int:did>/<int:eid>',

  'NODE-extension.msql': '/browser/extension/msql/<int:gid>/<int:sid>/<int:did>/',

  'NODE-extension.stats_id': '/browser/extension/stats/<int:gid>/<int:sid>/<int:did>/<int:eid>',

  'NODE-extension.dependency_id': '/browser/extension/dependency/<int:gid>/<int:sid>/<int:did>/<int:eid>',

  'NODE-extension.dependent_id': '/browser/extension/dependent/<int:gid>/<int:sid>/<int:did>/<int:eid>',

  'NODE-extension.avails': '/browser/extension/avails/<int:gid>/<int:sid>/<int:did>/',

  'NODE-extension.schemas': '/browser/extension/schemas/<int:gid>/<int:sid>/<int:did>/',

  'NODE-extension.children_id': '/browser/extension/children/<int:gid>/<int:sid>/<int:did>/<int:eid>',

  'NODE-foreign_data_wrapper.static': '/browser/foreign_data_wrapper/static/<path:filename>',

  'NODE-foreign_data_wrapper.obj_id': '/browser/foreign_data_wrapper/obj/<int:gid>/<int:sid>/<int:did>/<int:fid>',

  'NODE-foreign_data_wrapper.obj': '/browser/foreign_data_wrapper/obj/<int:gid>/<int:sid>/<int:did>/',

  'NODE-foreign_data_wrapper.delete_id': '/browser/foreign_data_wrapper/delete/<int:gid>/<int:sid>/<int:did>/<int:fid>',

  'NODE-foreign_data_wrapper.delete': '/browser/foreign_data_wrapper/delete/<int:gid>/<int:sid>/<int:did>/',

  'NODE-foreign_data_wrapper.nodes_id': '/browser/foreign_data_wrapper/nodes/<int:gid>/<int:sid>/<int:did>/<int:fid>',

  'NODE-foreign_data_wrapper.nodes': '/browser/foreign_data_wrapper/nodes/<int:gid>/<int:sid>/<int:did>/',

  'NODE-foreign_data_wrapper.children_id': '/browser/foreign_data_wrapper/children/<int:gid>/<int:sid>/<int:did>/<int:fid>',

  'NODE-foreign_data_wrapper.sql_id': '/browser/foreign_data_wrapper/sql/<int:gid>/<int:sid>/<int:did>/<int:fid>',

  'NODE-foreign_data_wrapper.msql_id': '/browser/foreign_data_wrapper/msql/<int:gid>/<int:sid>/<int:did>/<int:fid>',

  'NODE-foreign_data_wrapper.msql': '/browser/foreign_data_wrapper/msql/<int:gid>/<int:sid>/<int:did>/',

  'NODE-foreign_data_wrapper.stats_id': '/browser/foreign_data_wrapper/stats/<int:gid>/<int:sid>/<int:did>/<int:fid>',

  'NODE-foreign_data_wrapper.dependency_id': '/browser/foreign_data_wrapper/dependency/<int:gid>/<int:sid>/<int:did>/<int:fid>',

  'NODE-foreign_data_wrapper.dependent_id': '/browser/foreign_data_wrapper/dependent/<int:gid>/<int:sid>/<int:did>/<int:fid>',

  'NODE-foreign_data_wrapper.get_handlers': '/browser/foreign_data_wrapper/get_handlers/<int:gid>/<int:sid>/<int:did>/',

  'NODE-foreign_data_wrapper.get_validators': '/browser/foreign_data_wrapper/get_validators/<int:gid>/<int:sid>/<int:did>/',

  'NODE-foreign_server.static': '/browser/foreign_server/static/<path:filename>',

  'NODE-foreign_server.obj_id': '/browser/foreign_server/obj/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>',

  'NODE-foreign_server.obj': '/browser/foreign_server/obj/<int:gid>/<int:sid>/<int:did>/<int:fid>/',

  'NODE-foreign_server.delete_id': '/browser/foreign_server/delete/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>',

  'NODE-foreign_server.delete': '/browser/foreign_server/delete/<int:gid>/<int:sid>/<int:did>/<int:fid>/',

  'NODE-foreign_server.nodes_id': '/browser/foreign_server/nodes/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>',

  'NODE-foreign_server.nodes': '/browser/foreign_server/nodes/<int:gid>/<int:sid>/<int:did>/<int:fid>/',

  'NODE-foreign_server.children_id': '/browser/foreign_server/children/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>',

  'NODE-foreign_server.sql_id': '/browser/foreign_server/sql/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>',

  'NODE-foreign_server.msql_id': '/browser/foreign_server/msql/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>',

  'NODE-foreign_server.msql': '/browser/foreign_server/msql/<int:gid>/<int:sid>/<int:did>/<int:fid>/',

  'NODE-foreign_server.stats_id': '/browser/foreign_server/stats/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>',

  'NODE-foreign_server.dependency_id': '/browser/foreign_server/dependency/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>',

  'NODE-foreign_server.dependent_id': '/browser/foreign_server/dependent/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>',

  'NODE-user_mapping.static': '/browser/user_mapping/static/<path:filename>',

  'NODE-user_mapping.obj_id': '/browser/user_mapping/obj/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>/<int:umid>',

  'NODE-user_mapping.obj': '/browser/user_mapping/obj/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>/',

  'NODE-user_mapping.delete_id': '/browser/user_mapping/delete/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>/<int:umid>',

  'NODE-user_mapping.delete': '/browser/user_mapping/delete/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>/',

  'NODE-user_mapping.nodes_id': '/browser/user_mapping/nodes/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>/<int:umid>',

  'NODE-user_mapping.nodes': '/browser/user_mapping/nodes/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>/',

  'NODE-user_mapping.children_id': '/browser/user_mapping/children/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>/<int:umid>',

  'NODE-user_mapping.sql_id': '/browser/user_mapping/sql/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>/<int:umid>',

  'NODE-user_mapping.msql_id': '/browser/user_mapping/msql/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>/<int:umid>',

  'NODE-user_mapping.msql': '/browser/user_mapping/msql/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>/',

  'NODE-user_mapping.stats_id': '/browser/user_mapping/stats/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>/<int:umid>',

  'NODE-user_mapping.dependency_id': '/browser/user_mapping/dependency/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>/<int:umid>',

  'NODE-user_mapping.dependent_id': '/browser/user_mapping/dependent/<int:gid>/<int:sid>/<int:did>/<int:fid>/<int:fsid>/<int:umid>',

  'NODE-language.static': '/browser/language/static/<path:filename>',

  'NODE-language.obj_id': '/browser/language/obj/<int:gid>/<int:sid>/<int:did>/<int:lid>',

  'NODE-language.obj': '/browser/language/obj/<int:gid>/<int:sid>/<int:did>/',

  'NODE-language.nodes_id': '/browser/language/nodes/<int:gid>/<int:sid>/<int:did>/<int:lid>',

  'NODE-language.nodes': '/browser/language/nodes/<int:gid>/<int:sid>/<int:did>/',

  'NODE-language.sql_id': '/browser/language/sql/<int:gid>/<int:sid>/<int:did>/<int:lid>',

  'NODE-language.msql_id': '/browser/language/msql/<int:gid>/<int:sid>/<int:did>/<int:lid>',

  'NODE-language.msql': '/browser/language/msql/<int:gid>/<int:sid>/<int:did>/',

  'NODE-language.stats_id': '/browser/language/stats/<int:gid>/<int:sid>/<int:did>/<int:lid>',

  'NODE-language.dependency_id': '/browser/language/dependency/<int:gid>/<int:sid>/<int:did>/<int:lid>',

  'NODE-language.dependent_id': '/browser/language/dependent/<int:gid>/<int:sid>/<int:did>/<int:lid>',

  'NODE-language.get_functions': '/browser/language/get_functions/<int:gid>/<int:sid>/<int:did>/',

  'NODE-language.get_templates': '/browser/language/get_templates/<int:gid>/<int:sid>/<int:did>/',

  'NODE-language.delete_id': '/browser/language/delete/<int:gid>/<int:sid>/<int:did>/<int:lid>',

  'NODE-language.delete': '/browser/language/delete/<int:gid>/<int:sid>/<int:did>/',

  'NODE-publication.static': '/browser/publication/static/<path:filename>',

  'NODE-publication.obj_id': '/browser/publication/obj/<int:gid>/<int:sid>/<int:did>/<int:pbid>',

  'NODE-publication.obj': '/browser/publication/obj/<int:gid>/<int:sid>/<int:did>/',

  'NODE-publication.nodes_id': '/browser/publication/nodes/<int:gid>/<int:sid>/<int:did>/<int:pbid>',

  'NODE-publication.nodes': '/browser/publication/nodes/<int:gid>/<int:sid>/<int:did>/',

  'NODE-publication.sql_id': '/browser/publication/sql/<int:gid>/<int:sid>/<int:did>/<int:pbid>',

  'NODE-publication.msql_id': '/browser/publication/msql/<int:gid>/<int:sid>/<int:did>/<int:pbid>',

  'NODE-publication.msql': '/browser/publication/msql/<int:gid>/<int:sid>/<int:did>/',

  'NODE-publication.stats_id': '/browser/publication/stats/<int:gid>/<int:sid>/<int:did>/<int:pbid>',

  'NODE-publication.dependency_id': '/browser/publication/dependency/<int:gid>/<int:sid>/<int:did>/<int:pbid>',

  'NODE-publication.dependent_id': '/browser/publication/dependent/<int:gid>/<int:sid>/<int:did>/<int:pbid>',

  'NODE-publication.get_schemas': '/browser/publication/get_schemas/<int:gid>/<int:sid>/<int:did>/',

  'NODE-publication.get_tables': '/browser/publication/get_tables/<int:gid>/<int:sid>/<int:did>/',

  'NODE-publication.get_all_columns': '/browser/publication/get_all_columns/<int:gid>/<int:sid>/<int:did>/',

  'NODE-publication.delete_id': '/browser/publication/delete/<int:gid>/<int:sid>/<int:did>/<int:pbid>',

  'NODE-publication.delete': '/browser/publication/delete/<int:gid>/<int:sid>/<int:did>/',

  'NODE-schema.static': '/browser/schema/static/<path:filename>',

  'NODE-schema.obj_id': '/browser/schema/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-schema.obj': '/browser/schema/obj/<int:gid>/<int:sid>/<int:did>/',

  'NODE-schema.children_id': '/browser/schema/children/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-schema.nodes_id': '/browser/schema/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-schema.nodes': '/browser/schema/nodes/<int:gid>/<int:sid>/<int:did>/',

  'NODE-schema.sql_id': '/browser/schema/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-schema.msql_id': '/browser/schema/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-schema.msql': '/browser/schema/msql/<int:gid>/<int:sid>/<int:did>/',

  'NODE-schema.stats_id': '/browser/schema/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-schema.dependency_id': '/browser/schema/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-schema.dependent_id': '/browser/schema/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-schema.delete_id': '/browser/schema/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-schema.delete': '/browser/schema/delete/<int:gid>/<int:sid>/<int:did>/',

  'NODE-aggregate.static': '/browser/aggregate/static/<path:filename>',

  'NODE-aggregate.obj_id': '/browser/aggregate/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:agid>',

  'NODE-aggregate.obj': '/browser/aggregate/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-aggregate.delete_id': '/browser/aggregate/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:agid>',

  'NODE-aggregate.delete': '/browser/aggregate/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-aggregate.children_id': '/browser/aggregate/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:agid>',

  'NODE-aggregate.nodes_id': '/browser/aggregate/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:agid>',

  'NODE-aggregate.nodes': '/browser/aggregate/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-aggregate.sql_id': '/browser/aggregate/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:agid>',

  'NODE-catalog_object.static': '/browser/catalog_object/static/<path:filename>',

  'NODE-catalog_object.obj_id': '/browser/catalog_object/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-catalog_object.obj': '/browser/catalog_object/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-catalog_object.children_id': '/browser/catalog_object/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-catalog_object.nodes_id': '/browser/catalog_object/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-catalog_object.nodes': '/browser/catalog_object/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-catalog_object.sql_id': '/browser/catalog_object/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-catalog_object.dependency_id': '/browser/catalog_object/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-catalog_object.dependent_id': '/browser/catalog_object/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-catalog_object_column.static': '/browser/catalog_object_column/static/<path:filename>',

  'NODE-catalog_object_column.obj_id': '/browser/catalog_object_column/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>/<int:clid>',

  'NODE-catalog_object_column.obj': '/browser/catalog_object_column/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>/',

  'NODE-catalog_object_column.nodes_id': '/browser/catalog_object_column/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>/<int:clid>',

  'NODE-catalog_object_column.nodes': '/browser/catalog_object_column/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>/',

  'NODE-catalog_object_column.sql_id': '/browser/catalog_object_column/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>/<int:clid>',

  'NODE-catalog_object_column.dependency_id': '/browser/catalog_object_column/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>/<int:clid>',

  'NODE-catalog_object_column.dependent_id': '/browser/catalog_object_column/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>/<int:clid>',

  'NODE-collation.static': '/browser/collation/static/<path:filename>',

  'NODE-collation.obj_id': '/browser/collation/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-collation.obj': '/browser/collation/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-collation.delete_id': '/browser/collation/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-collation.delete': '/browser/collation/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-collation.children_id': '/browser/collation/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-collation.nodes_id': '/browser/collation/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-collation.nodes': '/browser/collation/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-collation.sql_id': '/browser/collation/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-collation.msql_id': '/browser/collation/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-collation.msql': '/browser/collation/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-collation.stats_id': '/browser/collation/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-collation.dependency_id': '/browser/collation/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-collation.dependent_id': '/browser/collation/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-collation.get_collations_id': '/browser/collation/get_collations/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-collation.get_collations': '/browser/collation/get_collations/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-collation.compare_id': '/browser/collation/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:coid>',

  'NODE-collation.compare': '/browser/collation/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-domain.static': '/browser/domain/static/<path:filename>',

  'NODE-domain.obj_id': '/browser/domain/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>',

  'NODE-domain.obj': '/browser/domain/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-domain.delete_id': '/browser/domain/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>',

  'NODE-domain.delete': '/browser/domain/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-domain.children_id': '/browser/domain/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>',

  'NODE-domain.nodes_id': '/browser/domain/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>',

  'NODE-domain.nodes': '/browser/domain/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-domain.sql_id': '/browser/domain/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>',

  'NODE-domain.msql_id': '/browser/domain/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>',

  'NODE-domain.msql': '/browser/domain/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-domain.stats_id': '/browser/domain/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>',

  'NODE-domain.dependency_id': '/browser/domain/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>',

  'NODE-domain.dependent_id': '/browser/domain/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>',

  'NODE-domain.get_types_id': '/browser/domain/get_types/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>',

  'NODE-domain.get_types': '/browser/domain/get_types/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-domain.get_collations_id': '/browser/domain/get_collations/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>',

  'NODE-domain.get_collations': '/browser/domain/get_collations/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-domain.compare_id': '/browser/domain/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>',

  'NODE-domain.compare': '/browser/domain/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-domain_constraints.static': '/browser/domain_constraints/static/<path:filename>',

  'NODE-domain_constraints.obj_id': '/browser/domain_constraints/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>/<int:coid>',

  'NODE-domain_constraints.obj': '/browser/domain_constraints/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>/',

  'NODE-domain_constraints.children_id': '/browser/domain_constraints/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>/<int:coid>',

  'NODE-domain_constraints.nodes_id': '/browser/domain_constraints/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>/<int:coid>',

  'NODE-domain_constraints.nodes': '/browser/domain_constraints/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>/',

  'NODE-domain_constraints.sql_id': '/browser/domain_constraints/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>/<int:coid>',

  'NODE-domain_constraints.msql_id': '/browser/domain_constraints/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>/<int:coid>',

  'NODE-domain_constraints.msql': '/browser/domain_constraints/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>/',

  'NODE-domain_constraints.stats_id': '/browser/domain_constraints/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>/<int:coid>',

  'NODE-domain_constraints.dependency_id': '/browser/domain_constraints/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>/<int:coid>',

  'NODE-domain_constraints.dependent_id': '/browser/domain_constraints/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:doid>/<int:coid>',

  'NODE-foreign_table.static': '/browser/foreign_table/static/<path:filename>',

  'NODE-foreign_table.obj_id': '/browser/foreign_table/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.obj': '/browser/foreign_table/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-foreign_table.delete_id': '/browser/foreign_table/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.delete': '/browser/foreign_table/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-foreign_table.children_id': '/browser/foreign_table/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.nodes_id': '/browser/foreign_table/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.nodes': '/browser/foreign_table/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-foreign_table.sql_id': '/browser/foreign_table/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.msql_id': '/browser/foreign_table/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.msql': '/browser/foreign_table/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-foreign_table.stats_id': '/browser/foreign_table/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.dependency_id': '/browser/foreign_table/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.dependent_id': '/browser/foreign_table/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.get_collations_id': '/browser/foreign_table/get_collations/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.get_collations': '/browser/foreign_table/get_collations/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-foreign_table.get_types_id': '/browser/foreign_table/get_types/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.get_types': '/browser/foreign_table/get_types/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-foreign_table.get_foreign_servers_id': '/browser/foreign_table/get_foreign_servers/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.get_foreign_servers': '/browser/foreign_table/get_foreign_servers/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-foreign_table.get_tables_id': '/browser/foreign_table/get_tables/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.get_tables': '/browser/foreign_table/get_tables/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-foreign_table.set_trigger_id': '/browser/foreign_table/set_trigger/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.get_columns_id': '/browser/foreign_table/get_columns/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.get_columns': '/browser/foreign_table/get_columns/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-foreign_table.select_sql_id': '/browser/foreign_table/select_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.insert_sql_id': '/browser/foreign_table/insert_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.update_sql_id': '/browser/foreign_table/update_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.delete_sql_id': '/browser/foreign_table/delete_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.compare_id': '/browser/foreign_table/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:foid>',

  'NODE-foreign_table.compare': '/browser/foreign_table/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-trigger.static': '/browser/trigger/static/<path:filename>',

  'NODE-trigger.obj_id': '/browser/trigger/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-trigger.obj': '/browser/trigger/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-trigger.delete_id': '/browser/trigger/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-trigger.delete': '/browser/trigger/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-trigger.children_id': '/browser/trigger/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-trigger.nodes_id': '/browser/trigger/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-trigger.nodes': '/browser/trigger/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-trigger.sql_id': '/browser/trigger/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-trigger.msql_id': '/browser/trigger/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-trigger.msql': '/browser/trigger/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-trigger.stats_id': '/browser/trigger/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-trigger.dependency_id': '/browser/trigger/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-trigger.dependent_id': '/browser/trigger/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-trigger.get_triggerfunctions_id': '/browser/trigger/get_triggerfunctions/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-trigger.get_triggerfunctions': '/browser/trigger/get_triggerfunctions/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-trigger.enable_id': '/browser/trigger/enable/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-constraints.static': '/browser/constraints/static/<path:filename>',

  'NODE-constraints.nodes': '/browser/constraints/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-constraints.proplist': '/browser/constraints/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-constraints.delete': '/browser/constraints/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-constraints.delete': '/browser/constraints/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-check_constraint.static': '/browser/check_constraint/static/<path:filename>',

  'NODE-check_constraint.obj_id': '/browser/check_constraint/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-check_constraint.obj': '/browser/check_constraint/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-check_constraint.delete_id': '/browser/check_constraint/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-check_constraint.delete': '/browser/check_constraint/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-check_constraint.children_id': '/browser/check_constraint/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-check_constraint.nodes_id': '/browser/check_constraint/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-check_constraint.nodes': '/browser/check_constraint/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-check_constraint.sql_id': '/browser/check_constraint/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-check_constraint.msql_id': '/browser/check_constraint/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-check_constraint.msql': '/browser/check_constraint/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-check_constraint.stats_id': '/browser/check_constraint/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-check_constraint.dependency_id': '/browser/check_constraint/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-check_constraint.dependent_id': '/browser/check_constraint/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-check_constraint.validate_id': '/browser/check_constraint/validate/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-exclusion_constraint.static': '/browser/exclusion_constraint/static/<path:filename>',

  'NODE-exclusion_constraint.obj_id': '/browser/exclusion_constraint/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:exid>',

  'NODE-exclusion_constraint.obj': '/browser/exclusion_constraint/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-exclusion_constraint.delete_id': '/browser/exclusion_constraint/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:exid>',

  'NODE-exclusion_constraint.delete': '/browser/exclusion_constraint/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-exclusion_constraint.children_id': '/browser/exclusion_constraint/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:exid>',

  'NODE-exclusion_constraint.nodes_id': '/browser/exclusion_constraint/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:exid>',

  'NODE-exclusion_constraint.nodes': '/browser/exclusion_constraint/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-exclusion_constraint.sql_id': '/browser/exclusion_constraint/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:exid>',

  'NODE-exclusion_constraint.msql_id': '/browser/exclusion_constraint/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:exid>',

  'NODE-exclusion_constraint.msql': '/browser/exclusion_constraint/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-exclusion_constraint.stats_id': '/browser/exclusion_constraint/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:exid>',

  'NODE-exclusion_constraint.dependency_id': '/browser/exclusion_constraint/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:exid>',

  'NODE-exclusion_constraint.dependent_id': '/browser/exclusion_constraint/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:exid>',

  'NODE-foreign_key.static': '/browser/foreign_key/static/<path:filename>',

  'NODE-foreign_key.obj_id': '/browser/foreign_key/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:fkid>',

  'NODE-foreign_key.obj': '/browser/foreign_key/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-foreign_key.delete_id': '/browser/foreign_key/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:fkid>',

  'NODE-foreign_key.delete': '/browser/foreign_key/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-foreign_key.children_id': '/browser/foreign_key/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:fkid>',

  'NODE-foreign_key.nodes_id': '/browser/foreign_key/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:fkid>',

  'NODE-foreign_key.nodes': '/browser/foreign_key/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-foreign_key.sql_id': '/browser/foreign_key/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:fkid>',

  'NODE-foreign_key.msql_id': '/browser/foreign_key/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:fkid>',

  'NODE-foreign_key.msql': '/browser/foreign_key/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-foreign_key.stats_id': '/browser/foreign_key/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:fkid>',

  'NODE-foreign_key.dependency_id': '/browser/foreign_key/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:fkid>',

  'NODE-foreign_key.dependent_id': '/browser/foreign_key/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:fkid>',

  'NODE-foreign_key.indices': '/browser/foreign_key/indices/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-foreign_key.validate_id': '/browser/foreign_key/validate/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:fkid>',

  'NODE-foreign_key.get_coveringindex': '/browser/foreign_key/get_coveringindex/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-primary_key.static': '/browser/primary_key/static/<path:filename>',

  'NODE-primary_key.obj_id': '/browser/primary_key/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-primary_key.obj': '/browser/primary_key/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-primary_key.delete_id': '/browser/primary_key/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-primary_key.delete': '/browser/primary_key/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-primary_key.children_id': '/browser/primary_key/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-primary_key.nodes_id': '/browser/primary_key/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-primary_key.nodes': '/browser/primary_key/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-primary_key.sql_id': '/browser/primary_key/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-primary_key.msql_id': '/browser/primary_key/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-primary_key.msql': '/browser/primary_key/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-primary_key.stats_id': '/browser/primary_key/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-primary_key.dependency_id': '/browser/primary_key/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-primary_key.dependent_id': '/browser/primary_key/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-unique_constraint.static': '/browser/unique_constraint/static/<path:filename>',

  'NODE-unique_constraint.obj_id': '/browser/unique_constraint/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-unique_constraint.obj': '/browser/unique_constraint/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-unique_constraint.delete_id': '/browser/unique_constraint/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-unique_constraint.delete': '/browser/unique_constraint/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-unique_constraint.children_id': '/browser/unique_constraint/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-unique_constraint.nodes_id': '/browser/unique_constraint/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-unique_constraint.nodes': '/browser/unique_constraint/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-unique_constraint.sql_id': '/browser/unique_constraint/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-unique_constraint.msql_id': '/browser/unique_constraint/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-unique_constraint.msql': '/browser/unique_constraint/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-unique_constraint.stats_id': '/browser/unique_constraint/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-unique_constraint.dependency_id': '/browser/unique_constraint/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-unique_constraint.dependent_id': '/browser/unique_constraint/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:cid>',

  'NODE-foreign_table_column.static': '/browser/foreign_table_column/static/<path:filename>',

  'NODE-foreign_table_column.obj_id': '/browser/foreign_table_column/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-foreign_table_column.obj': '/browser/foreign_table_column/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-foreign_table_column.children_id': '/browser/foreign_table_column/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-foreign_table_column.nodes_id': '/browser/foreign_table_column/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-foreign_table_column.nodes': '/browser/foreign_table_column/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-foreign_table_column.sql_id': '/browser/foreign_table_column/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-foreign_table_column.msql_id': '/browser/foreign_table_column/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-foreign_table_column.msql': '/browser/foreign_table_column/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-foreign_table_column.stats_id': '/browser/foreign_table_column/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-foreign_table_column.dependency_id': '/browser/foreign_table_column/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-foreign_table_column.dependent_id': '/browser/foreign_table_column/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-fts_configuration.static': '/browser/fts_configuration/static/<path:filename>',

  'NODE-fts_configuration.obj_id': '/browser/fts_configuration/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:cfgid>',

  'NODE-fts_configuration.obj': '/browser/fts_configuration/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_configuration.children_id': '/browser/fts_configuration/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:cfgid>',

  'NODE-fts_configuration.delete_id': '/browser/fts_configuration/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:cfgid>',

  'NODE-fts_configuration.delete': '/browser/fts_configuration/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_configuration.nodes_id': '/browser/fts_configuration/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:cfgid>',

  'NODE-fts_configuration.nodes': '/browser/fts_configuration/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_configuration.sql_id': '/browser/fts_configuration/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:cfgid>',

  'NODE-fts_configuration.msql_id': '/browser/fts_configuration/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:cfgid>',

  'NODE-fts_configuration.msql': '/browser/fts_configuration/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_configuration.stats_id': '/browser/fts_configuration/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:cfgid>',

  'NODE-fts_configuration.dependency_id': '/browser/fts_configuration/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:cfgid>',

  'NODE-fts_configuration.dependent_id': '/browser/fts_configuration/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:cfgid>',

  'NODE-fts_configuration.parsers_id': '/browser/fts_configuration/parsers/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:cfgid>',

  'NODE-fts_configuration.parsers': '/browser/fts_configuration/parsers/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_configuration.copyConfig_id': '/browser/fts_configuration/copyConfig/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:cfgid>',

  'NODE-fts_configuration.copyConfig': '/browser/fts_configuration/copyConfig/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_configuration.tokens_id': '/browser/fts_configuration/tokens/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:cfgid>',

  'NODE-fts_configuration.tokens': '/browser/fts_configuration/tokens/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_configuration.dictionaries': '/browser/fts_configuration/dictionaries/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_configuration.compare_id': '/browser/fts_configuration/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:cfgid>',

  'NODE-fts_configuration.compare': '/browser/fts_configuration/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_dictionary.static': '/browser/fts_dictionary/static/<path:filename>',

  'NODE-fts_dictionary.obj_id': '/browser/fts_dictionary/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:dcid>',

  'NODE-fts_dictionary.obj': '/browser/fts_dictionary/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_dictionary.children_id': '/browser/fts_dictionary/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:dcid>',

  'NODE-fts_dictionary.delete_id': '/browser/fts_dictionary/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:dcid>',

  'NODE-fts_dictionary.delete': '/browser/fts_dictionary/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_dictionary.nodes_id': '/browser/fts_dictionary/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:dcid>',

  'NODE-fts_dictionary.nodes': '/browser/fts_dictionary/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_dictionary.sql_id': '/browser/fts_dictionary/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:dcid>',

  'NODE-fts_dictionary.msql_id': '/browser/fts_dictionary/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:dcid>',

  'NODE-fts_dictionary.msql': '/browser/fts_dictionary/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_dictionary.stats_id': '/browser/fts_dictionary/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:dcid>',

  'NODE-fts_dictionary.dependency_id': '/browser/fts_dictionary/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:dcid>',

  'NODE-fts_dictionary.dependent_id': '/browser/fts_dictionary/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:dcid>',

  'NODE-fts_dictionary.fetch_templates_id': '/browser/fts_dictionary/fetch_templates/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:dcid>',

  'NODE-fts_dictionary.fetch_templates': '/browser/fts_dictionary/fetch_templates/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_parser.static': '/browser/fts_parser/static/<path:filename>',

  'NODE-fts_parser.obj_id': '/browser/fts_parser/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pid>',

  'NODE-fts_parser.obj': '/browser/fts_parser/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_parser.children_id': '/browser/fts_parser/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pid>',

  'NODE-fts_parser.delete_id': '/browser/fts_parser/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pid>',

  'NODE-fts_parser.delete': '/browser/fts_parser/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_parser.nodes_id': '/browser/fts_parser/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pid>',

  'NODE-fts_parser.nodes': '/browser/fts_parser/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_parser.sql_id': '/browser/fts_parser/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pid>',

  'NODE-fts_parser.msql_id': '/browser/fts_parser/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pid>',

  'NODE-fts_parser.msql': '/browser/fts_parser/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_parser.stats_id': '/browser/fts_parser/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pid>',

  'NODE-fts_parser.dependency_id': '/browser/fts_parser/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pid>',

  'NODE-fts_parser.dependent_id': '/browser/fts_parser/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pid>',

  'NODE-fts_parser.start_functions_id': '/browser/fts_parser/start_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pid>',

  'NODE-fts_parser.start_functions': '/browser/fts_parser/start_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_parser.token_functions_id': '/browser/fts_parser/token_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pid>',

  'NODE-fts_parser.token_functions': '/browser/fts_parser/token_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_parser.end_functions_id': '/browser/fts_parser/end_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pid>',

  'NODE-fts_parser.end_functions': '/browser/fts_parser/end_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_parser.lextype_functions_id': '/browser/fts_parser/lextype_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pid>',

  'NODE-fts_parser.lextype_functions': '/browser/fts_parser/lextype_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_parser.headline_functions_id': '/browser/fts_parser/headline_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pid>',

  'NODE-fts_parser.headline_functions': '/browser/fts_parser/headline_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_template.static': '/browser/fts_template/static/<path:filename>',

  'NODE-fts_template.obj_id': '/browser/fts_template/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-fts_template.obj': '/browser/fts_template/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_template.children_id': '/browser/fts_template/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-fts_template.delete_id': '/browser/fts_template/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-fts_template.delete': '/browser/fts_template/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_template.nodes_id': '/browser/fts_template/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-fts_template.nodes': '/browser/fts_template/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_template.sql_id': '/browser/fts_template/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-fts_template.msql_id': '/browser/fts_template/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-fts_template.msql': '/browser/fts_template/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_template.stats_id': '/browser/fts_template/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-fts_template.dependency_id': '/browser/fts_template/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-fts_template.dependent_id': '/browser/fts_template/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-fts_template.get_lexize_id': '/browser/fts_template/get_lexize/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-fts_template.get_lexize': '/browser/fts_template/get_lexize/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-fts_template.get_init_id': '/browser/fts_template/get_init/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-fts_template.get_init': '/browser/fts_template/get_init/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-function.static': '/browser/function/static/<path:filename>',

  'NODE-function.obj_id': '/browser/function/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-function.obj': '/browser/function/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-function.delete_id': '/browser/function/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-function.delete': '/browser/function/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-function.children_id': '/browser/function/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-function.nodes_id': '/browser/function/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-function.nodes': '/browser/function/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-function.sql_id': '/browser/function/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-function.msql_id': '/browser/function/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-function.msql': '/browser/function/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-function.stats_id': '/browser/function/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-function.stats': '/browser/function/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-function.dependency_id': '/browser/function/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-function.dependent_id': '/browser/function/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-function.get_types_id': '/browser/function/get_types/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-function.get_types': '/browser/function/get_types/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-function.get_languages_id': '/browser/function/get_languages/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-function.get_languages': '/browser/function/get_languages/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-function.vopts': '/browser/function/vopts/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-function.select_sql_id': '/browser/function/select_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-function.exec_sql_id': '/browser/function/exec_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-function.get_support_functions_id': '/browser/function/get_support_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-function.get_support_functions': '/browser/function/get_support_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-trigger_function.static': '/browser/trigger_function/static/<path:filename>',

  'NODE-trigger_function.obj_id': '/browser/trigger_function/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-trigger_function.obj': '/browser/trigger_function/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-trigger_function.delete_id': '/browser/trigger_function/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-trigger_function.delete': '/browser/trigger_function/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-trigger_function.children_id': '/browser/trigger_function/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-trigger_function.nodes_id': '/browser/trigger_function/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-trigger_function.nodes': '/browser/trigger_function/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-trigger_function.sql_id': '/browser/trigger_function/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-trigger_function.msql_id': '/browser/trigger_function/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-trigger_function.msql': '/browser/trigger_function/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-trigger_function.stats_id': '/browser/trigger_function/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-trigger_function.stats': '/browser/trigger_function/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-trigger_function.dependency_id': '/browser/trigger_function/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-trigger_function.dependent_id': '/browser/trigger_function/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-trigger_function.get_types_id': '/browser/trigger_function/get_types/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-trigger_function.get_types': '/browser/trigger_function/get_types/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-trigger_function.get_languages_id': '/browser/trigger_function/get_languages/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-trigger_function.get_languages': '/browser/trigger_function/get_languages/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-trigger_function.vopts': '/browser/trigger_function/vopts/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-trigger_function.select_sql_id': '/browser/trigger_function/select_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-trigger_function.exec_sql_id': '/browser/trigger_function/exec_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-trigger_function.get_support_functions_id': '/browser/trigger_function/get_support_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-trigger_function.get_support_functions': '/browser/trigger_function/get_support_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-procedure.static': '/browser/procedure/static/<path:filename>',

  'NODE-procedure.obj_id': '/browser/procedure/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-procedure.obj': '/browser/procedure/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-procedure.delete_id': '/browser/procedure/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-procedure.delete': '/browser/procedure/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-procedure.children_id': '/browser/procedure/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-procedure.nodes_id': '/browser/procedure/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-procedure.nodes': '/browser/procedure/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-procedure.sql_id': '/browser/procedure/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-procedure.msql_id': '/browser/procedure/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-procedure.msql': '/browser/procedure/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-procedure.stats_id': '/browser/procedure/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-procedure.stats': '/browser/procedure/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-procedure.dependency_id': '/browser/procedure/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-procedure.dependent_id': '/browser/procedure/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-procedure.get_types_id': '/browser/procedure/get_types/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-procedure.get_types': '/browser/procedure/get_types/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-procedure.get_languages_id': '/browser/procedure/get_languages/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-procedure.get_languages': '/browser/procedure/get_languages/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-procedure.vopts': '/browser/procedure/vopts/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-procedure.select_sql_id': '/browser/procedure/select_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-procedure.exec_sql_id': '/browser/procedure/exec_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-procedure.get_support_functions_id': '/browser/procedure/get_support_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:fnid>',

  'NODE-procedure.get_support_functions': '/browser/procedure/get_support_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-operator.static': '/browser/operator/static/<path:filename>',

  'NODE-operator.obj_id': '/browser/operator/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:opid>',

  'NODE-operator.obj': '/browser/operator/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-operator.delete_id': '/browser/operator/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:opid>',

  'NODE-operator.delete': '/browser/operator/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-operator.children_id': '/browser/operator/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:opid>',

  'NODE-operator.nodes_id': '/browser/operator/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:opid>',

  'NODE-operator.nodes': '/browser/operator/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-operator.sql_id': '/browser/operator/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:opid>',

  'NODE-package.static': '/browser/package/static/<path:filename>',

  'NODE-package.obj_id': '/browser/package/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>',

  'NODE-package.obj': '/browser/package/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-package.delete_id': '/browser/package/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>',

  'NODE-package.delete': '/browser/package/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-package.children_id': '/browser/package/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>',

  'NODE-package.nodes_id': '/browser/package/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>',

  'NODE-package.nodes': '/browser/package/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-package.sql_id': '/browser/package/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>',

  'NODE-package.msql_id': '/browser/package/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>',

  'NODE-package.msql': '/browser/package/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-package.stats_id': '/browser/package/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>',

  'NODE-package.stats': '/browser/package/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-package.dependency_id': '/browser/package/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>',

  'NODE-package.dependent_id': '/browser/package/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>',

  'NODE-edbfunc.static': '/browser/edbfunc/static/<path:filename>',

  'NODE-edbfunc.obj_id': '/browser/edbfunc/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:edbfnid>',

  'NODE-edbfunc.obj': '/browser/edbfunc/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/',

  'NODE-edbfunc.nodes_id': '/browser/edbfunc/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:edbfnid>',

  'NODE-edbfunc.nodes': '/browser/edbfunc/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/',

  'NODE-edbfunc.sql_id': '/browser/edbfunc/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:edbfnid>',

  'NODE-edbfunc.dependency_id': '/browser/edbfunc/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:edbfnid>',

  'NODE-edbfunc.dependent_id': '/browser/edbfunc/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:edbfnid>',

  'NODE-edbfunc.compare_id': '/browser/edbfunc/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:edbfnid>',

  'NODE-edbfunc.compare': '/browser/edbfunc/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/',

  'NODE-edbproc.static': '/browser/edbproc/static/<path:filename>',

  'NODE-edbproc.obj_id': '/browser/edbproc/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:edbfnid>',

  'NODE-edbproc.obj': '/browser/edbproc/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/',

  'NODE-edbproc.nodes_id': '/browser/edbproc/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:edbfnid>',

  'NODE-edbproc.nodes': '/browser/edbproc/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/',

  'NODE-edbproc.sql_id': '/browser/edbproc/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:edbfnid>',

  'NODE-edbproc.dependency_id': '/browser/edbproc/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:edbfnid>',

  'NODE-edbproc.dependent_id': '/browser/edbproc/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:edbfnid>',

  'NODE-edbproc.compare_id': '/browser/edbproc/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:edbfnid>',

  'NODE-edbproc.compare': '/browser/edbproc/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/',

  'NODE-edbvar.static': '/browser/edbvar/static/<path:filename>',

  'NODE-edbvar.obj_id': '/browser/edbvar/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:varid>',

  'NODE-edbvar.obj': '/browser/edbvar/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/',

  'NODE-edbvar.nodes_id': '/browser/edbvar/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:varid>',

  'NODE-edbvar.nodes': '/browser/edbvar/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/',

  'NODE-edbvar.sql_id': '/browser/edbvar/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:varid>',

  'NODE-edbvar.compare_id': '/browser/edbvar/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/<int:varid>',

  'NODE-edbvar.compare': '/browser/edbvar/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:pkgid>/',

  'NODE-sequence.static': '/browser/sequence/static/<path:filename>',

  'NODE-sequence.obj_id': '/browser/sequence/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:seid>',

  'NODE-sequence.obj': '/browser/sequence/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-sequence.delete_id': '/browser/sequence/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:seid>',

  'NODE-sequence.delete': '/browser/sequence/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-sequence.children_id': '/browser/sequence/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:seid>',

  'NODE-sequence.nodes_id': '/browser/sequence/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:seid>',

  'NODE-sequence.nodes': '/browser/sequence/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-sequence.sql_id': '/browser/sequence/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:seid>',

  'NODE-sequence.msql_id': '/browser/sequence/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:seid>',

  'NODE-sequence.msql': '/browser/sequence/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-sequence.stats_id': '/browser/sequence/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:seid>',

  'NODE-sequence.stats': '/browser/sequence/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-sequence.dependency_id': '/browser/sequence/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:seid>',

  'NODE-sequence.dependent_id': '/browser/sequence/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:seid>',

  'NODE-synonym.static': '/browser/synonym/static/<path:filename>',

  'NODE-synonym.obj_id': '/browser/synonym/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<path:syid>',

  'NODE-synonym.obj': '/browser/synonym/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-synonym.delete_id': '/browser/synonym/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<path:syid>',

  'NODE-synonym.delete': '/browser/synonym/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-synonym.children_id': '/browser/synonym/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<path:syid>',

  'NODE-synonym.nodes_id': '/browser/synonym/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<path:syid>',

  'NODE-synonym.nodes': '/browser/synonym/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-synonym.sql_id': '/browser/synonym/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<path:syid>',

  'NODE-synonym.msql_id': '/browser/synonym/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<path:syid>',

  'NODE-synonym.msql': '/browser/synonym/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-synonym.stats_id': '/browser/synonym/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<path:syid>',

  'NODE-synonym.dependency_id': '/browser/synonym/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<path:syid>',

  'NODE-synonym.dependent_id': '/browser/synonym/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<path:syid>',

  'NODE-synonym.get_target_objects_id': '/browser/synonym/get_target_objects/<int:gid>/<int:sid>/<int:did>/<int:scid>/<path:syid>',

  'NODE-synonym.get_target_objects': '/browser/synonym/get_target_objects/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.static': '/browser/table/static/<path:filename>',

  'NODE-table.obj_id': '/browser/table/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.obj': '/browser/table/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.delete_id': '/browser/table/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.delete': '/browser/table/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.children_id': '/browser/table/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.nodes_id': '/browser/table/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.nodes': '/browser/table/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.sql_id': '/browser/table/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.msql_id': '/browser/table/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.msql': '/browser/table/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.stats_id': '/browser/table/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.stats': '/browser/table/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.dependency_id': '/browser/table/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.dependent_id': '/browser/table/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.get_oftype_id': '/browser/table/get_oftype/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.get_oftype': '/browser/table/get_oftype/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.get_inherits_id': '/browser/table/get_inherits/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.get_inherits': '/browser/table/get_inherits/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.get_relations_id': '/browser/table/get_relations/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.get_relations': '/browser/table/get_relations/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.truncate_id': '/browser/table/truncate/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.reset_id': '/browser/table/reset/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.set_trigger_id': '/browser/table/set_trigger/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.get_types_id': '/browser/table/get_types/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.get_types': '/browser/table/get_types/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.get_columns_id': '/browser/table/get_columns/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.get_columns': '/browser/table/get_columns/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.get_table_vacuum': '/browser/table/get_table_vacuum/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.get_toast_table_vacuum': '/browser/table/get_toast_table_vacuum/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.all_tables': '/browser/table/all_tables/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.get_access_methods': '/browser/table/get_access_methods/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.get_table_access_methods': '/browser/table/get_table_access_methods/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.get_oper_class': '/browser/table/get_oper_class/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.get_operator': '/browser/table/get_operator/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.get_attach_tables_id': '/browser/table/get_attach_tables/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.get_attach_tables': '/browser/table/get_attach_tables/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.select_sql_id': '/browser/table/select_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.insert_sql_id': '/browser/table/insert_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.update_sql_id': '/browser/table/update_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.delete_sql_id': '/browser/table/delete_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.count_rows_id': '/browser/table/count_rows/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.compare_id': '/browser/table/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.compare': '/browser/table/compare/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-table.get_op_class_id': '/browser/table/get_op_class/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-table.get_op_class': '/browser/table/get_op_class/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-column.static': '/browser/column/static/<path:filename>',

  'NODE-column.obj_id': '/browser/column/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-column.obj': '/browser/column/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-column.children_id': '/browser/column/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-column.nodes_id': '/browser/column/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-column.nodes': '/browser/column/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-column.sql_id': '/browser/column/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-column.msql_id': '/browser/column/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-column.msql': '/browser/column/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-column.stats_id': '/browser/column/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-column.dependency_id': '/browser/column/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-column.dependent_id': '/browser/column/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<string:clid>',

  'NODE-compound_trigger.static': '/browser/compound_trigger/static/<path:filename>',

  'NODE-compound_trigger.obj_id': '/browser/compound_trigger/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-compound_trigger.obj': '/browser/compound_trigger/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-compound_trigger.delete_id': '/browser/compound_trigger/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-compound_trigger.delete': '/browser/compound_trigger/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-compound_trigger.children_id': '/browser/compound_trigger/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-compound_trigger.nodes_id': '/browser/compound_trigger/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-compound_trigger.nodes': '/browser/compound_trigger/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-compound_trigger.sql_id': '/browser/compound_trigger/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-compound_trigger.msql_id': '/browser/compound_trigger/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-compound_trigger.msql': '/browser/compound_trigger/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-compound_trigger.stats_id': '/browser/compound_trigger/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-compound_trigger.dependency_id': '/browser/compound_trigger/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-compound_trigger.dependent_id': '/browser/compound_trigger/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-compound_trigger.enable_id': '/browser/compound_trigger/enable/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:trid>',

  'NODE-index.static': '/browser/index/static/<path:filename>',

  'NODE-index.obj_id': '/browser/index/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:idx>',

  'NODE-index.obj': '/browser/index/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-index.delete_id': '/browser/index/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:idx>',

  'NODE-index.delete': '/browser/index/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-index.children_id': '/browser/index/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:idx>',

  'NODE-index.nodes_id': '/browser/index/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:idx>',

  'NODE-index.nodes': '/browser/index/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-index.sql_id': '/browser/index/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:idx>',

  'NODE-index.msql_id': '/browser/index/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:idx>',

  'NODE-index.msql': '/browser/index/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-index.stats_id': '/browser/index/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:idx>',

  'NODE-index.stats': '/browser/index/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-index.dependency_id': '/browser/index/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:idx>',

  'NODE-index.dependent_id': '/browser/index/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:idx>',

  'NODE-index.get_collations_id': '/browser/index/get_collations/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:idx>',

  'NODE-index.get_collations': '/browser/index/get_collations/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-index.get_access_methods_id': '/browser/index/get_access_methods/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:idx>',

  'NODE-index.get_access_methods': '/browser/index/get_access_methods/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-index.get_op_class_id': '/browser/index/get_op_class/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:idx>',

  'NODE-index.get_op_class': '/browser/index/get_op_class/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-partition.static': '/browser/partition/static/<path:filename>',

  'NODE-partition.obj_id': '/browser/partition/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:ptid>',

  'NODE-partition.obj': '/browser/partition/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-partition.delete_id': '/browser/partition/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:ptid>',

  'NODE-partition.delete': '/browser/partition/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-partition.nodes_id': '/browser/partition/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:ptid>',

  'NODE-partition.nodes': '/browser/partition/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-partition.children_id': '/browser/partition/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:ptid>',

  'NODE-partition.sql_id': '/browser/partition/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:ptid>',

  'NODE-partition.msql_id': '/browser/partition/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:ptid>',

  'NODE-partition.detach_id': '/browser/partition/detach/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:ptid>',

  'NODE-partition.truncate_id': '/browser/partition/truncate/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:ptid>',

  'NODE-partition.set_trigger_id': '/browser/partition/set_trigger/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:ptid>',

  'NODE-partition.get_table_access_methods': '/browser/partition/get_table_access_methods/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-row_security_policy.static': '/browser/row_security_policy/static/<path:filename>',

  'NODE-row_security_policy.obj_id': '/browser/row_security_policy/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:plid>',

  'NODE-row_security_policy.obj': '/browser/row_security_policy/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-row_security_policy.delete_id': '/browser/row_security_policy/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:plid>',

  'NODE-row_security_policy.delete': '/browser/row_security_policy/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-row_security_policy.nodes_id': '/browser/row_security_policy/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:plid>',

  'NODE-row_security_policy.nodes': '/browser/row_security_policy/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-row_security_policy.sql_id': '/browser/row_security_policy/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:plid>',

  'NODE-row_security_policy.msql_id': '/browser/row_security_policy/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:plid>',

  'NODE-row_security_policy.msql': '/browser/row_security_policy/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-row_security_policy.stats_id': '/browser/row_security_policy/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:plid>',

  'NODE-row_security_policy.dependency_id': '/browser/row_security_policy/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:plid>',

  'NODE-row_security_policy.dependent_id': '/browser/row_security_policy/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:plid>',

  'NODE-rule.static': '/browser/rule/static/<path:filename>',

  'NODE-rule.obj_id': '/browser/rule/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:rid>',

  'NODE-rule.obj': '/browser/rule/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-rule.children_id': '/browser/rule/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:rid>',

  'NODE-rule.delete_id': '/browser/rule/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:rid>',

  'NODE-rule.delete': '/browser/rule/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-rule.nodes_id': '/browser/rule/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:rid>',

  'NODE-rule.nodes': '/browser/rule/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-rule.sql_id': '/browser/rule/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:rid>',

  'NODE-rule.msql_id': '/browser/rule/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:rid>',

  'NODE-rule.msql': '/browser/rule/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/',

  'NODE-rule.stats_id': '/browser/rule/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:rid>',

  'NODE-rule.dependency_id': '/browser/rule/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:rid>',

  'NODE-rule.dependent_id': '/browser/rule/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:rid>',

  'NODE-rule.configs_id': '/browser/rule/configs/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>/<int:rid>',

  'NODE-type.static': '/browser/type/static/<path:filename>',

  'NODE-type.obj_id': '/browser/type/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.obj': '/browser/type/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-type.delete_id': '/browser/type/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.delete': '/browser/type/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-type.children_id': '/browser/type/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.nodes_id': '/browser/type/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.nodes': '/browser/type/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-type.sql_id': '/browser/type/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.msql_id': '/browser/type/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.msql': '/browser/type/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-type.stats_id': '/browser/type/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.dependency_id': '/browser/type/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.dependent_id': '/browser/type/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.get_types_id': '/browser/type/get_types/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.get_types': '/browser/type/get_types/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-type.get_stypes_id': '/browser/type/get_stypes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.get_stypes': '/browser/type/get_stypes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-type.get_subopclass_id': '/browser/type/get_subopclass/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.get_subopclass': '/browser/type/get_subopclass/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-type.get_stypediff_id': '/browser/type/get_stypediff/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.get_stypediff': '/browser/type/get_stypediff/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-type.get_canonical_id': '/browser/type/get_canonical/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.get_canonical': '/browser/type/get_canonical/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-type.get_collations_id': '/browser/type/get_collations/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.get_collations': '/browser/type/get_collations/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-type.get_external_functions_id': '/browser/type/get_external_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:tid>',

  'NODE-type.get_external_functions': '/browser/type/get_external_functions/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-view.static': '/browser/view/static/<path:filename>',

  'NODE-view.obj_id': '/browser/view/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.obj': '/browser/view/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-view.children_id': '/browser/view/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.delete_id': '/browser/view/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.delete': '/browser/view/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-view.nodes_id': '/browser/view/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.nodes': '/browser/view/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-view.sql_id': '/browser/view/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.msql_id': '/browser/view/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.msql': '/browser/view/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-view.stats_id': '/browser/view/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.stats': '/browser/view/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-view.dependency_id': '/browser/view/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.dependent_id': '/browser/view/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.configs_id': '/browser/view/configs/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.get_tblspc_id': '/browser/view/get_tblspc/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.get_tblspc': '/browser/view/get_tblspc/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-view.select_sql_id': '/browser/view/select_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.select_sql': '/browser/view/select_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-view.insert_sql_id': '/browser/view/insert_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.insert_sql': '/browser/view/insert_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-view.get_table_vacuum_id': '/browser/view/get_table_vacuum/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.get_table_vacuum': '/browser/view/get_table_vacuum/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-view.get_toast_table_vacuum_id': '/browser/view/get_toast_table_vacuum/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-view.get_toast_table_vacuum': '/browser/view/get_toast_table_vacuum/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-mview.static': '/browser/mview/static/<path:filename>',

  'NODE-mview.refresh_data_id': '/browser/mview/refresh_data/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.check_utility_exists_id': '/browser/mview/check_utility_exists/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.get_access_methods': '/browser/mview/get_access_methods/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-mview.obj_id': '/browser/mview/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.obj': '/browser/mview/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-mview.children_id': '/browser/mview/children/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.delete_id': '/browser/mview/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.delete': '/browser/mview/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-mview.nodes_id': '/browser/mview/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.nodes': '/browser/mview/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-mview.sql_id': '/browser/mview/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.msql_id': '/browser/mview/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.msql': '/browser/mview/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-mview.stats_id': '/browser/mview/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.stats': '/browser/mview/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-mview.dependency_id': '/browser/mview/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.dependent_id': '/browser/mview/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.configs_id': '/browser/mview/configs/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.get_tblspc_id': '/browser/mview/get_tblspc/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.get_tblspc': '/browser/mview/get_tblspc/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-mview.select_sql_id': '/browser/mview/select_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.select_sql': '/browser/mview/select_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-mview.insert_sql_id': '/browser/mview/insert_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.insert_sql': '/browser/mview/insert_sql/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-mview.get_table_vacuum_id': '/browser/mview/get_table_vacuum/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.get_table_vacuum': '/browser/mview/get_table_vacuum/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-mview.get_toast_table_vacuum_id': '/browser/mview/get_toast_table_vacuum/<int:gid>/<int:sid>/<int:did>/<int:scid>/<int:vid>',

  'NODE-mview.get_toast_table_vacuum': '/browser/mview/get_toast_table_vacuum/<int:gid>/<int:sid>/<int:did>/<int:scid>/',

  'NODE-catalog.static': '/browser/catalog/static/<path:filename>',

  'NODE-catalog.obj_id': '/browser/catalog/obj/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-catalog.obj': '/browser/catalog/obj/<int:gid>/<int:sid>/<int:did>/',

  'NODE-catalog.children_id': '/browser/catalog/children/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-catalog.nodes_id': '/browser/catalog/nodes/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-catalog.nodes': '/browser/catalog/nodes/<int:gid>/<int:sid>/<int:did>/',

  'NODE-catalog.sql_id': '/browser/catalog/sql/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-catalog.msql_id': '/browser/catalog/msql/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-catalog.msql': '/browser/catalog/msql/<int:gid>/<int:sid>/<int:did>/',

  'NODE-catalog.stats_id': '/browser/catalog/stats/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-catalog.dependency_id': '/browser/catalog/dependency/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-catalog.dependent_id': '/browser/catalog/dependent/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-catalog.delete_id': '/browser/catalog/delete/<int:gid>/<int:sid>/<int:did>/<int:scid>',

  'NODE-catalog.delete': '/browser/catalog/delete/<int:gid>/<int:sid>/<int:did>/',

  'NODE-subscription.static': '/browser/subscription/static/<path:filename>',

  'NODE-subscription.obj_id': '/browser/subscription/obj/<int:gid>/<int:sid>/<int:did>/<int:subid>',

  'NODE-subscription.obj': '/browser/subscription/obj/<int:gid>/<int:sid>/<int:did>/',

  'NODE-subscription.nodes_id': '/browser/subscription/nodes/<int:gid>/<int:sid>/<int:did>/<int:subid>',

  'NODE-subscription.nodes': '/browser/subscription/nodes/<int:gid>/<int:sid>/<int:did>/',

  'NODE-subscription.sql_id': '/browser/subscription/sql/<int:gid>/<int:sid>/<int:did>/<int:subid>',

  'NODE-subscription.msql_id': '/browser/subscription/msql/<int:gid>/<int:sid>/<int:did>/<int:subid>',

  'NODE-subscription.msql': '/browser/subscription/msql/<int:gid>/<int:sid>/<int:did>/',

  'NODE-subscription.stats_id': '/browser/subscription/stats/<int:gid>/<int:sid>/<int:did>/<int:subid>',

  'NODE-subscription.stats': '/browser/subscription/stats/<int:gid>/<int:sid>/<int:did>/',

  'NODE-subscription.dependency_id': '/browser/subscription/dependency/<int:gid>/<int:sid>/<int:did>/<int:subid>',

  'NODE-subscription.dependent_id': '/browser/subscription/dependent/<int:gid>/<int:sid>/<int:did>/<int:subid>',

  'NODE-subscription.get_publications': '/browser/subscription/get_publications/<int:gid>/<int:sid>/<int:did>/',

  'NODE-subscription.delete_id': '/browser/subscription/delete/<int:gid>/<int:sid>/<int:did>/<int:subid>',

  'NODE-subscription.delete': '/browser/subscription/delete/<int:gid>/<int:sid>/<int:did>/',

  'NODE-dbms_job_scheduler.static': '/browser/dbms_job_scheduler/static/<path:filename>',

  'NODE-dbms_job_scheduler.obj_id': '/browser/dbms_job_scheduler/obj/<int:gid>/<int:sid>/<int:did>/<int:jsid>',

  'NODE-dbms_job_scheduler.obj': '/browser/dbms_job_scheduler/obj/<int:gid>/<int:sid>/<int:did>/',

  'NODE-dbms_job_scheduler.children_id': '/browser/dbms_job_scheduler/children/<int:gid>/<int:sid>/<int:did>/<int:jsid>',

  'NODE-dbms_job_scheduler.nodes_id': '/browser/dbms_job_scheduler/nodes/<int:gid>/<int:sid>/<int:did>/<int:jsid>',

  'NODE-dbms_job_scheduler.nodes': '/browser/dbms_job_scheduler/nodes/<int:gid>/<int:sid>/<int:did>/',

  'NODE-dbms_job.static': '/browser/dbms_job/static/<path:filename>',

  'NODE-dbms_job.obj_id': '/browser/dbms_job/obj/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsjobid>',

  'NODE-dbms_job.obj': '/browser/dbms_job/obj/<int:gid>/<int:sid>/<int:did>/<int:jsid>/',

  'NODE-dbms_job.nodes_id': '/browser/dbms_job/nodes/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsjobid>',

  'NODE-dbms_job.nodes': '/browser/dbms_job/nodes/<int:gid>/<int:sid>/<int:did>/<int:jsid>/',

  'NODE-dbms_job.msql_id': '/browser/dbms_job/msql/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsjobid>',

  'NODE-dbms_job.msql': '/browser/dbms_job/msql/<int:gid>/<int:sid>/<int:did>/<int:jsid>/',

  'NODE-dbms_job.sql_id': '/browser/dbms_job/sql/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsjobid>',

  'NODE-dbms_job.get_procedures': '/browser/dbms_job/get_procedures/<int:gid>/<int:sid>/<int:did>/<int:jsid>/',

  'NODE-dbms_job.enable_disable_id': '/browser/dbms_job/enable_disable/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsjobid>',

  'NODE-dbms_job.get_programs': '/browser/dbms_job/get_programs/<int:gid>/<int:sid>/<int:did>/<int:jsid>/',

  'NODE-dbms_job.get_schedules': '/browser/dbms_job/get_schedules/<int:gid>/<int:sid>/<int:did>/<int:jsid>/',

  'NODE-dbms_job.run_job_id': '/browser/dbms_job/run_job/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsjobid>',

  'NODE-dbms_program.static': '/browser/dbms_program/static/<path:filename>',

  'NODE-dbms_program.obj_id': '/browser/dbms_program/obj/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsprid>',

  'NODE-dbms_program.obj': '/browser/dbms_program/obj/<int:gid>/<int:sid>/<int:did>/<int:jsid>/',

  'NODE-dbms_program.nodes_id': '/browser/dbms_program/nodes/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsprid>',

  'NODE-dbms_program.nodes': '/browser/dbms_program/nodes/<int:gid>/<int:sid>/<int:did>/<int:jsid>/',

  'NODE-dbms_program.msql_id': '/browser/dbms_program/msql/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsprid>',

  'NODE-dbms_program.msql': '/browser/dbms_program/msql/<int:gid>/<int:sid>/<int:did>/<int:jsid>/',

  'NODE-dbms_program.sql_id': '/browser/dbms_program/sql/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsprid>',

  'NODE-dbms_program.get_procedures': '/browser/dbms_program/get_procedures/<int:gid>/<int:sid>/<int:did>/<int:jsid>/',

  'NODE-dbms_program.enable_disable_id': '/browser/dbms_program/enable_disable/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsprid>',

  'NODE-dbms_schedule.static': '/browser/dbms_schedule/static/<path:filename>',

  'NODE-dbms_schedule.obj_id': '/browser/dbms_schedule/obj/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsscid>',

  'NODE-dbms_schedule.obj': '/browser/dbms_schedule/obj/<int:gid>/<int:sid>/<int:did>/<int:jsid>/',

  'NODE-dbms_schedule.nodes_id': '/browser/dbms_schedule/nodes/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsscid>',

  'NODE-dbms_schedule.nodes': '/browser/dbms_schedule/nodes/<int:gid>/<int:sid>/<int:did>/<int:jsid>/',

  'NODE-dbms_schedule.msql_id': '/browser/dbms_schedule/msql/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsscid>',

  'NODE-dbms_schedule.msql': '/browser/dbms_schedule/msql/<int:gid>/<int:sid>/<int:did>/<int:jsid>/',

  'NODE-dbms_schedule.sql_id': '/browser/dbms_schedule/sql/<int:gid>/<int:sid>/<int:did>/<int:jsid>/<int:jsscid>',

  'NODE-pga_job.static': '/browser/pga_job/static/<path:filename>',

  'NODE-pga_job.obj_id': '/browser/pga_job/obj/<int:gid>/<int:sid>/<int:jid>',

  'NODE-pga_job.obj': '/browser/pga_job/obj/<int:gid>/<int:sid>/',

  'NODE-pga_job.nodes_id': '/browser/pga_job/nodes/<int:gid>/<int:sid>/<int:jid>',

  'NODE-pga_job.nodes': '/browser/pga_job/nodes/<int:gid>/<int:sid>/',

  'NODE-pga_job.sql_id': '/browser/pga_job/sql/<int:gid>/<int:sid>/<int:jid>',

  'NODE-pga_job.msql_id': '/browser/pga_job/msql/<int:gid>/<int:sid>/<int:jid>',

  'NODE-pga_job.msql': '/browser/pga_job/msql/<int:gid>/<int:sid>/',

  'NODE-pga_job.run_now_id': '/browser/pga_job/run_now/<int:gid>/<int:sid>/<int:jid>',

  'NODE-pga_job.classes': '/browser/pga_job/classes/<int:gid>/<int:sid>/',

  'NODE-pga_job.children_id': '/browser/pga_job/children/<int:gid>/<int:sid>/<int:jid>',

  'NODE-pga_job.stats_id': '/browser/pga_job/stats/<int:gid>/<int:sid>/<int:jid>',

  'NODE-pga_schedule.static': '/browser/pga_schedule/static/<path:filename>',

  'NODE-pga_schedule.obj_id': '/browser/pga_schedule/obj/<int:gid>/<int:sid>/<int:jid>/<int:jscid>',

  'NODE-pga_schedule.obj': '/browser/pga_schedule/obj/<int:gid>/<int:sid>/<int:jid>/',

  'NODE-pga_schedule.nodes_id': '/browser/pga_schedule/nodes/<int:gid>/<int:sid>/<int:jid>/<int:jscid>',

  'NODE-pga_schedule.nodes': '/browser/pga_schedule/nodes/<int:gid>/<int:sid>/<int:jid>/',

  'NODE-pga_schedule.msql_id': '/browser/pga_schedule/msql/<int:gid>/<int:sid>/<int:jid>/<int:jscid>',

  'NODE-pga_schedule.msql': '/browser/pga_schedule/msql/<int:gid>/<int:sid>/<int:jid>/',

  'NODE-pga_schedule.sql_id': '/browser/pga_schedule/sql/<int:gid>/<int:sid>/<int:jid>/<int:jscid>',

  'NODE-pga_jobstep.static': '/browser/pga_jobstep/static/<path:filename>',

  'NODE-pga_jobstep.obj_id': '/browser/pga_jobstep/obj/<int:gid>/<int:sid>/<int:jid>/<int:jstid>',

  'NODE-pga_jobstep.obj': '/browser/pga_jobstep/obj/<int:gid>/<int:sid>/<int:jid>/',

  'NODE-pga_jobstep.nodes_id': '/browser/pga_jobstep/nodes/<int:gid>/<int:sid>/<int:jid>/<int:jstid>',

  'NODE-pga_jobstep.nodes': '/browser/pga_jobstep/nodes/<int:gid>/<int:sid>/<int:jid>/',

  'NODE-pga_jobstep.msql_id': '/browser/pga_jobstep/msql/<int:gid>/<int:sid>/<int:jid>/<int:jstid>',

  'NODE-pga_jobstep.msql': '/browser/pga_jobstep/msql/<int:gid>/<int:sid>/<int:jid>/',

  'NODE-pga_jobstep.sql_id': '/browser/pga_jobstep/sql/<int:gid>/<int:sid>/<int:jid>/<int:jstid>',

  'NODE-pga_jobstep.stats_id': '/browser/pga_jobstep/stats/<int:gid>/<int:sid>/<int:jid>/<int:jstid>',

  'NODE-resource_group.static': '/browser/resource_group/static/<path:filename>',

  'NODE-resource_group.obj_id': '/browser/resource_group/obj/<int:gid>/<int:sid>/<int:rg_id>',

  'NODE-resource_group.obj': '/browser/resource_group/obj/<int:gid>/<int:sid>/',

  'NODE-resource_group.nodes_id': '/browser/resource_group/nodes/<int:gid>/<int:sid>/<int:rg_id>',

  'NODE-resource_group.nodes': '/browser/resource_group/nodes/<int:gid>/<int:sid>/',

  'NODE-resource_group.sql_id': '/browser/resource_group/sql/<int:gid>/<int:sid>/<int:rg_id>',

  'NODE-resource_group.msql_id': '/browser/resource_group/msql/<int:gid>/<int:sid>/<int:rg_id>',

  'NODE-resource_group.msql': '/browser/resource_group/msql/<int:gid>/<int:sid>/',

  'NODE-resource_group.stats_id': '/browser/resource_group/stats/<int:gid>/<int:sid>/<int:rg_id>',

  'NODE-resource_group.dependency_id': '/browser/resource_group/dependency/<int:gid>/<int:sid>/<int:rg_id>',

  'NODE-resource_group.dependent_id': '/browser/resource_group/dependent/<int:gid>/<int:sid>/<int:rg_id>',

  'NODE-role.static': '/browser/role/static/<path:filename>',

  'NODE-role.obj_id': '/browser/role/obj/<int:gid>/<int:sid>/<int:rid>',

  'NODE-role.obj': '/browser/role/obj/<int:gid>/<int:sid>/',

  'NODE-role.nodes_id': '/browser/role/nodes/<int:gid>/<int:sid>/<int:rid>',

  'NODE-role.nodes': '/browser/role/nodes/<int:gid>/<int:sid>/',

  'NODE-role.sql_id': '/browser/role/sql/<int:gid>/<int:sid>/<int:rid>',

  'NODE-role.msql_id': '/browser/role/msql/<int:gid>/<int:sid>/<int:rid>',

  'NODE-role.msql': '/browser/role/msql/<int:gid>/<int:sid>/',

  'NODE-role.dependency_id': '/browser/role/dependency/<int:gid>/<int:sid>/<int:rid>',

  'NODE-role.dependent_id': '/browser/role/dependent/<int:gid>/<int:sid>/<int:rid>',

  'NODE-role.children_id': '/browser/role/children/<int:gid>/<int:sid>/<int:rid>',

  'NODE-role.vopts': '/browser/role/vopts/<int:gid>/<int:sid>/',

  'NODE-role.variables_id': '/browser/role/variables/<int:gid>/<int:sid>/<int:rid>',

  'NODE-role.reassign_id': '/browser/role/reassign/<int:gid>/<int:sid>/<int:rid>',

  'NODE-tablespace.static': '/browser/tablespace/static/<path:filename>',

  'NODE-tablespace.obj_id': '/browser/tablespace/obj/<int:gid>/<int:sid>/<int:tsid>',

  'NODE-tablespace.obj': '/browser/tablespace/obj/<int:gid>/<int:sid>/',

  'NODE-tablespace.nodes_id': '/browser/tablespace/nodes/<int:gid>/<int:sid>/<int:tsid>',

  'NODE-tablespace.nodes': '/browser/tablespace/nodes/<int:gid>/<int:sid>/',

  'NODE-tablespace.children_id': '/browser/tablespace/children/<int:gid>/<int:sid>/<int:tsid>',

  'NODE-tablespace.sql_id': '/browser/tablespace/sql/<int:gid>/<int:sid>/<int:tsid>',

  'NODE-tablespace.msql_id': '/browser/tablespace/msql/<int:gid>/<int:sid>/<int:tsid>',

  'NODE-tablespace.msql': '/browser/tablespace/msql/<int:gid>/<int:sid>/',

  'NODE-tablespace.stats_id': '/browser/tablespace/stats/<int:gid>/<int:sid>/<int:tsid>',

  'NODE-tablespace.stats': '/browser/tablespace/stats/<int:gid>/<int:sid>/',

  'NODE-tablespace.dependency_id': '/browser/tablespace/dependency/<int:gid>/<int:sid>/<int:tsid>',

  'NODE-tablespace.dependent_id': '/browser/tablespace/dependent/<int:gid>/<int:sid>/<int:tsid>',

  'NODE-tablespace.vopts': '/browser/tablespace/vopts/<int:gid>/<int:sid>/',

  'NODE-tablespace.move_objects_id': '/browser/tablespace/move_objects/<int:gid>/<int:sid>/<int:tsid>',

  'NODE-tablespace.move_objects_sql_id': '/browser/tablespace/move_objects_sql/<int:gid>/<int:sid>/<int:tsid>',

  'NODE-replica_nodes.static': '/browser/replica_nodes/static/<path:filename>',

  'NODE-replica_nodes.obj_id': '/browser/replica_nodes/obj/<int:gid>/<int:sid>/<int:pid>',

  'NODE-replica_nodes.obj': '/browser/replica_nodes/obj/<int:gid>/<int:sid>/',

  'NODE-replica_nodes.nodes_id': '/browser/replica_nodes/nodes/<int:gid>/<int:sid>/<int:pid>',

  'NODE-replica_nodes.nodes': '/browser/replica_nodes/nodes/<int:gid>/<int:sid>/',

  'NODE-replica_nodes.replication_slots_id': '/browser/replica_nodes/replication_slots/<int:gid>/<int:sid>/<int:pid>',

  'NODE-replica_nodes.replication_slots': '/browser/replica_nodes/replication_slots/<int:gid>/<int:sid>/',

  'NODE-pgd_replication_groups.static': '/browser/pgd_replication_groups/static/<path:filename>',

  'NODE-pgd_replication_groups.obj_id': '/browser/pgd_replication_groups/obj/<int:gid>/<int:sid>/<int:node_group_id>',

  'NODE-pgd_replication_groups.obj': '/browser/pgd_replication_groups/obj/<int:gid>/<int:sid>/',

  'NODE-pgd_replication_groups.nodes_id': '/browser/pgd_replication_groups/nodes/<int:gid>/<int:sid>/<int:node_group_id>',

  'NODE-pgd_replication_groups.nodes': '/browser/pgd_replication_groups/nodes/<int:gid>/<int:sid>/',

  'NODE-pgd_replication_groups.children_id': '/browser/pgd_replication_groups/children/<int:gid>/<int:sid>/<int:node_group_id>',

  'NODE-pgd_replication_servers.static': '/browser/pgd_replication_servers/static/<path:filename>',

  'NODE-pgd_replication_servers.obj_id': '/browser/pgd_replication_servers/obj/<int:gid>/<int:sid>/<int:node_group_id>/<int:node_id>',

  'NODE-pgd_replication_servers.obj': '/browser/pgd_replication_servers/obj/<int:gid>/<int:sid>/<int:node_group_id>/',

  'NODE-pgd_replication_servers.nodes_id': '/browser/pgd_replication_servers/nodes/<int:gid>/<int:sid>/<int:node_group_id>/<int:node_id>',

  'NODE-pgd_replication_servers.nodes': '/browser/pgd_replication_servers/nodes/<int:gid>/<int:sid>/<int:node_group_id>/',

  'NODE-pgd_replication_servers.children_id': '/browser/pgd_replication_servers/children/<int:gid>/<int:sid>/<int:node_group_id>/<int:node_id>',

  'dashboard.static': '/dashboard/static/<path:filename>',

  'dashboard.script': '/dashboard/dashboard.js',

  'dashboard.get_by_database_id': '/dashboard/<int:sid>/<int:did>',

  'dashboard.get_by_sever_id': '/dashboard/<int:sid>',

  'dashboard.index': '/dashboard/',

  'dashboard.dashboard_stats_did': '/dashboard/dashboard_stats/<int:sid>/<int:did>',

  'dashboard.dashboard_stats_sid': '/dashboard/dashboard_stats/<int:sid>',

  'dashboard.dashboard_stats': '/dashboard/dashboard_stats',

  'dashboard.get_activity_by_database_id': '/dashboard/activity/<int:sid>/<int:did>',

  'dashboard.get_activity_by_server_id': '/dashboard/activity/<int:sid>',

  'dashboard.activity': '/dashboard/activity/',

  'dashboard.get_locks_by_database_id': '/dashboard/locks/<int:sid>/<int:did>',

  'dashboard.get_locks_by_server_id': '/dashboard/locks/<int:sid>',

  'dashboard.locks': '/dashboard/locks/',

  'dashboard.get_prepared_by_database_id': '/dashboard/prepared/<int:sid>/<int:did>',

  'dashboard.get_prepared_by_server_id': '/dashboard/prepared/<int:sid>',

  'dashboard.prepared': '/dashboard/prepared/',

  'dashboard.config': '/dashboard/config/<int:sid>',

  'dashboard.log_formats': '/dashboard/log_formats/<int:sid>',

  'dashboard.log_formats': '/dashboard/log_formats',

  'dashboard.get_logs_by_server_id': '/dashboard/logs/<log_format>/<disp_format>/<int:sid>/<int:page>',

  'dashboard.logs': '/dashboard/logs/<log_format>/<disp_format>/<int:sid>',

  'dashboard.cancel_query': '/dashboard/cancel_query/<int:sid>/<int:did>/<int:pid>',

  'dashboard.cancel_query': '/dashboard/cancel_query/<int:sid>/<int:pid>',

  'dashboard.terminate_session': '/dashboard/terminate_session/<int:sid>/<int:did>/<int:pid>',

  'dashboard.terminate_session': '/dashboard/terminate_session/<int:sid>/<int:pid>',

  'dashboard.check_system_statistics_did': '/dashboard/check_extension/system_statistics/<int:sid>/<int:did>',

  'dashboard.check_system_statistics_sid': '/dashboard/check_extension/system_statistics/<int:sid>',

  'dashboard.check_system_statistics': '/dashboard/check_extension/system_statistics',

  'dashboard.system_statistics_did': '/dashboard/system_statistics/<int:sid>/<int:did>',

  'dashboard.system_statistics_sid': '/dashboard/system_statistics/<int:sid>',

  'dashboard.system_statistics': '/dashboard/system_statistics',

  'dashboard.replication_stats': '/dashboard/replication_stats/<int:sid>',

  'dashboard.replication_slots': '/dashboard/replication_slots/<int:sid>',

  'dashboard.pgd.cluster_nodes': '/dashboard/pgd/cluster_nodes/<int:sid>',

  'dashboard.pgd.raft_status': '/dashboard/pgd/raft_status/<int:sid>',

  'dashboard.pgd.charts': '/dashboard/pgd/charts/<int:sid>',

  'dashboard.pgd.outgoing': '/dashboard/pgd/outgoing/<int:sid>',

  'dashboard.pgd.incoming': '/dashboard/pgd/incoming/<int:sid>',

  'help.static': '/help/help/<path:filename>',

  'misc.static': '/misc/static/<path:filename>',

  'misc.index': '/misc/',

  'misc.ping': '/misc/ping',

  'misc.cleanup': '/misc/cleanup',

  'misc.log_heartbeat': '/misc/heartbeat/log',

  'misc.stop_heartbeat': '/misc/heartbeat/stop',

  'misc.get_heartbeat': '/misc/get_heartbeat/<int:sid>',

  'misc.shutdown': '/misc/shutdown',

  'misc.validate_binary_path': '/misc/validate_binary_path',

  'misc.upgrade_check': '/misc/upgrade_check',

  'bgprocess.static': '/misc/bgprocess/static/<path:filename>',

  'bgprocess.list': '/misc/bgprocess/',

  'bgprocess.detailed_status': '/misc/bgprocess/<pid>/<int:out>/<int:err>/',

  'bgprocess.status': '/misc/bgprocess/<pid>',

  'bgprocess.acknowledge': '/misc/bgprocess/<pid>',

  'bgprocess.update_cloud_details': '/misc/bgprocess/update_cloud_details/<pid>',

  'bgprocess.stop_process': '/misc/bgprocess/stop/<pid>',

  'dependencies.static': '/misc/dependencies/static/<path:filename>',

  'dependents.static': '/misc/dependents/static/<path:filename>',

  'file_manager.static': '/file_manager/static/<path:filename>',

  'file_manager.index': '/file_manager/',

  'file_manager.utility': '/file_manager/utility.js',

  'file_manager.init': '/file_manager/init',

  'file_manager.delete_trans_id': '/file_manager/delete_trans_id/<int:trans_id>',

  'file_manager.save_last_dir': '/file_manager/save_last_dir/<int:trans_id>',

  'file_manager.save_file_dialog_view': '/file_manager/save_file_dialog_view/<int:trans_id>',

  'file_manager.save_show_hidden_file_option': '/file_manager/save_show_hidden_file_option/<int:trans_id>',

  'file_manager.filemanager': '/file_manager/filemanager/<int:trans_id>/',

  'statistics.static': '/misc/statistics/static/<path:filename>',

  'preferences.static': '/preferences/static/<path:filename>',

  'preferences.script': '/preferences/preferences.js',

  'preferences.get_by_name': '/preferences/<module>/<preference>',

  'preferences.index': '/preferences/',

  'preferences.get_all': '/preferences/get_all',

  'preferences.get_all_cli': '/preferences/get_all_cli',

  'preferences.update': '/preferences/',

  'preferences.update_pref': '/preferences/update',

  'preferences.reset_prefs': '/preferences/',

  'redirects.static': '/static/<path:filename>',

  'redirects.index': '/',

  'redirects.favicon': '/favicon.ico',

  'settings.static': '/settings/static/<path:filename>',

  'settings.index': '/settings/',

  'settings.script': '/settings/settings.js',

  'settings.store': '/settings/store/<setting>/<value>',

  'settings.store_bulk': '/settings/store',

  'settings.reset_layout': '/settings/layout',

  'settings.reset_tree_state': '/settings/reset_tree_state',

  'settings.save_tree_state': '/settings/save_tree_state/',

  'settings.get_tree_state': '/settings/get_tree_state/',

  'settings.save_file_format_setting': '/settings/save_file_format_setting/',

  'settings.get_file_format_setting': '/settings/get_file_format_setting/',

  'tools.static': '/tools/static/<path:filename>',

  'tools.index': '/tools/',

  'tools.translations': '/tools/translations.js',

  'tools.initialize': '/tools/initialize/',

  'backup.static': '/backup/<path:filename>',

  'backup.index': '/backup/',

  'backup.script': '/backup/backup.js',

  'backup.create_object_job': '/backup/job/<int:sid>/object',

  'backup.create_server_job': '/backup/job/<int:sid>',

  'backup.utility_exists': '/backup/utility_exists/<int:sid>/<backup_obj_type>',

  'backup.schema_objects': '/backup/objects/<int:sid>/<int:did>/<int:scid>',

  'backup.objects': '/backup/objects/<int:sid>/<int:did>',

  'debugger.static': '/debugger/static/<path:filename>',

  'debugger.index': '/debugger/',

  'debugger.init_for_trigger': '/debugger/init/<node_type>/<int:sid>/<int:did>/<int:scid>/<int:fid>/<int:trid>',

  'debugger.init_for_function': '/debugger/init/<node_type>/<int:sid>/<int:did>/<int:scid>/<int:fid>',

  'debugger.direct': '/debugger/direct/<int:trans_id>',

  'debugger.initialize_target_for_trigger': '/debugger/initialize_target/<debug_type>/<int:trans_id>/<int:sid>/<int:did>/<int:scid>/<int:func_id>/<int:tri_id>',

  'debugger.initialize_target_for_function': '/debugger/initialize_target/<debug_type>/<int:trans_id>/<int:sid>/<int:did>/<int:scid>/<int:func_id>',

  'debugger.close': '/debugger/close/<int:trans_id>',

  'debugger.restart': '/debugger/restart/<int:trans_id>',

  'debugger.start_listener': '/debugger/start_listener/<int:trans_id>',

  'debugger.execute_query': '/debugger/execute_query/<int:trans_id>/<query_type>',

  'debugger.messages': '/debugger/messages/<int:trans_id>/',

  'debugger.start_execution': '/debugger/start_execution/<int:trans_id>/<int:port_num>',

  'debugger.set_breakpoint': '/debugger/set_breakpoint/<int:trans_id>/<int:line_no>/<int:set_type>',

  'debugger.clear_all_breakpoint': '/debugger/clear_all_breakpoint/<int:trans_id>',

  'debugger.deposit_value': '/debugger/deposit_value/<int:trans_id>',

  'debugger.select_frame': '/debugger/select_frame/<int:trans_id>/<int:frame_id>',

  'debugger.get_arguments': '/debugger/get_arguments/<int:sid>/<int:did>/<int:scid>/<int:func_id>',

  'debugger.set_arguments': '/debugger/set_arguments/<int:sid>/<int:did>/<int:scid>/<int:func_id>',

  'debugger.clear_arguments': '/debugger/clear_arguments/<int:sid>/<int:did>/<int:scid>/<int:func_id>',

  'debugger.poll_end_execution_result': '/debugger/poll_end_execution_result/<int:trans_id>/',

  'debugger.poll_result': '/debugger/poll_result/<int:trans_id>/',

  'erd.static': '/erd/static/<path:filename>',

  'erd.panel': '/erd/panel/<int:trans_id>',

  'erd.initialize': '/erd/initialize/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

  'erd.prequisite': '/erd/prequisite/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

  'erd.sql': '/erd/sql/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

  'erd.close': '/erd/close/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

  'grant_wizard.static': '/grant_wizard/<path:filename>',

  'grant_wizard.index': '/grant_wizard/',

  'grant_wizard.script': '/grant_wizard/grant_wizard.js',

  'grant_wizard.acl': '/grant_wizard/acl/<int:sid>/<int:did>/',

  'grant_wizard.objects': '/grant_wizard/<int:sid>/<int:did>/<int:node_id>/<node_type>/',

  'grant_wizard.modified_sql': '/grant_wizard/sql/<int:sid>/<int:did>/',

  'grant_wizard.apply': '/grant_wizard/<int:sid>/<int:did>/',

  'import_export.static': '/import_export/static/<path:filename>',

  'import_export.index': '/import_export/',

  'import_export.script': '/import_export/js/import_export.js',

  'import_export.create_job': '/import_export/job/<int:sid>',

  'import_export.get_settings': '/import_export/get_settings/',

  'import_export.utility_exists': '/import_export/utility_exists/<int:sid>',

  'import_export_servers.static': '/import_export_servers/static/<path:filename>',

  'import_export_servers.index': '/import_export_servers/',

  'import_export_servers.script': '/import_export_servers/js/import_export_servers.js',

  'import_export_servers.get_servers': '/import_export_servers/get_servers',

  'import_export_servers.load_servers': '/import_export_servers/load_servers',

  'import_export_servers.save': '/import_export_servers/save',

  'maintenance.static': '/maintenance/static/<path:filename>',

  'maintenance.index': '/maintenance/',

  'maintenance.script': '/maintenance/js/maintenance.js',

  'maintenance.create_job': '/maintenance/job/<int:sid>/<int:did>',

  'maintenance.utility_exists': '/maintenance/utility_exists/<int:sid>',

  'psql.static': '/psql/static/<path:filename>',

  'psql.script': '/psql/psql.js',

  'psql.panel': '/psql/panel/<int:trans_id>',

  'restore.static': '/restore/<path:filename>',

  'restore.index': '/restore/',

  'restore.script': '/restore/restore.js',

  'restore.create_job': '/restore/job/<int:sid>',

  'restore.utility_exists': '/restore/utility_exists/<int:sid>',

  'schema_diff.static': '/schema_diff/static/<path:filename>',

  'schema_diff.index': '/schema_diff/',

  'schema_diff.panel': '/schema_diff/panel/<int:trans_id>/<path:editor_title>',

  'schema_diff.initialize': '/schema_diff/initialize/<int:trans_id>',

  'schema_diff.close': '/schema_diff/close/<int:trans_id>',

  'schema_diff.servers': '/schema_diff/servers',

  'schema_diff.get_server': '/schema_diff/get_server/<int:sid>/<int:did>',

  'schema_diff.connect_server': '/schema_diff/server/connect/<int:sid>',

  'schema_diff.connect_database': '/schema_diff/database/connect/<int:sid>/<int:did>',

  'schema_diff.databases': '/schema_diff/databases/<int:sid>',

  'schema_diff.schemas': '/schema_diff/schemas/<int:sid>/<int:did>',

  'schema_diff.ddl_compare': '/schema_diff/ddl_compare/<int:trans_id>/<int:source_sid>/<int:source_did>/<int:source_scid>/<int:target_sid>/<int:target_did>/<int:target_scid>/<int:source_oid>/<int:target_oid>/<node_type>/<comp_status>/',

  'search_objects.static': '/search_objects/<path:filename>',

  'search_objects.index': '/search_objects/',

  'search_objects.types': '/search_objects/types/<int:sid>/<int:did>',

  'search_objects.search': '/search_objects/search/<int:sid>/<int:did>',

  'sqleditor.static': '/sqleditor/static/<path:filename>',

  'sqleditor.index': '/sqleditor/',

  'sqleditor.filter': '/sqleditor/filter',

  'sqleditor.initialize_viewdata': '/sqleditor/initialize/viewdata/<int:trans_id>/<int:cmd_type>/<obj_type>/<int:sgid>/<int:sid>/<int:did>/<int:obj_id>',

  'sqleditor.panel': '/sqleditor/panel/<int:trans_id>',

  'sqleditor.initialize_sqleditor': '/sqleditor/initialize/sqleditor/<int:trans_id>/<int:sgid>/<int:sid>',

  'sqleditor.initialize_sqleditor_with_did': '/sqleditor/initialize/sqleditor/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

  'sqleditor.update_sqleditor_connection': '/sqleditor/initialize/sqleditor/update_connection/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

  'sqleditor.close': '/sqleditor/close/<int:trans_id>',

  'sqleditor.filter_validate': '/sqleditor/filter/validate/<int:sid>/<int:did>/<int:obj_id>',

  'sqleditor.view_data_start': '/sqleditor/view_data/start/<int:trans_id>',

  'sqleditor.query_tool_start': '/sqleditor/query_tool/start/<int:trans_id>',

  'sqleditor.poll': '/sqleditor/poll/<int:trans_id>',

  'sqleditor.fetch_window': '/sqleditor/fetch_window/<int:trans_id>/<int:from_rownum>/<int:to_rownum>',

  'sqleditor.fetch_all_from_start': '/sqleditor/fetch_all_from_start/<int:trans_id>/<int:limit>',

  'sqleditor.save': '/sqleditor/save/<int:trans_id>',

  'sqleditor.inclusive_filter': '/sqleditor/filter/inclusive/<int:trans_id>',

  'sqleditor.exclusive_filter': '/sqleditor/filter/exclusive/<int:trans_id>',

  'sqleditor.remove_filter': '/sqleditor/filter/remove/<int:trans_id>',

  'sqleditor.set_limit': '/sqleditor/limit/<int:trans_id>',

  'sqleditor.cancel_transaction': '/sqleditor/cancel/<int:trans_id>',

  'sqleditor.get_object_name': '/sqleditor/object/get/<int:trans_id>',

  'sqleditor.auto_commit': '/sqleditor/auto_commit/<int:trans_id>',

  'sqleditor.auto_rollback': '/sqleditor/auto_rollback/<int:trans_id>',

  'sqleditor.autocomplete': '/sqleditor/autocomplete/<int:trans_id>',

  'sqleditor.script': '/sqleditor/sqleditor.js',

  'sqleditor.load_file': '/sqleditor/load_file/',

  'sqleditor.save_file': '/sqleditor/save_file/',

  'sqleditor.query_tool_download': '/sqleditor/query_tool/download/<int:trans_id>',

  'sqleditor.connection_status': '/sqleditor/status/<int:trans_id>',

  'sqleditor.get_filter_data': '/sqleditor/filter_dialog/<int:trans_id>',

  'sqleditor._check_server_connection_status': '/sqleditor/get_server_connection/<int:sgid>/<int:sid>',

  'sqleditor.get_new_connection_servers': '/sqleditor/new_connection_dialog',

  'sqleditor.get_new_connection_data': '/sqleditor/new_connection_dialog/<int:sgid>/<int:sid>',

  'sqleditor.get_new_connection_database': '/sqleditor/new_connection_database/<int:sgid>/<int:sid>',

  'sqleditor.get_new_connection_user': '/sqleditor/new_connection_user/<int:sgid>/<int:sid>',

  'sqleditor.get_new_connection_role': '/sqleditor/new_connection_role/<int:sgid>/<int:sid>',

  'sqleditor.connect_server': '/sqleditor/connect_server/<int:sid>',

  'sqleditor.set_filter_data': '/sqleditor/filter_dialog/<int:trans_id>',

  'sqleditor.add_query_history': '/sqleditor/query_history/<int:trans_id>',

  'sqleditor.clear_query_history': '/sqleditor/query_history/<int:trans_id>',

  'sqleditor.get_query_history': '/sqleditor/query_history/<int:trans_id>',

  'sqleditor.get_macro': '/sqleditor/get_macros/<int:macro_id>/<int:trans_id>',

  'sqleditor.get_macros': '/sqleditor/get_macros/<int:trans_id>',

  'sqleditor.set_macros': '/sqleditor/set_macros/<int:trans_id>',

  'sqleditor.get_user_macros': '/sqleditor/get_user_macros',

  'user_management.static': '/user_management/<path:filename>',

  'user_management.index': '/user_management/',

  'user_management.script': '/user_management/user_management.js',

  'user_management.current_user_info': '/user_management/current_user.js',

  'user_management.user': '/user_management/user/<int:uid>',

  'user_management.users': '/user_management/user/',

  'user_management.change_owner': '/user_management/change_owner',

  'user_management.shared_servers': '/user_management/shared_servers/<int:uid>',

  'user_management.admin_users': '/user_management/admin_users/<int:uid>',

  'user_management.role': '/user_management/role/<int:rid>',

  'user_management.roles': '/user_management/role/',

  'user_management.auth_sources': '/user_management/auth_sources/',

  'user_management.save': '/user_management/save',

  'user_management.auth_sources': '/user_management/auth_sources/',

  'user_management.change_owner': '/user_management/change_owner',

  'user_management.shared_servers': '/user_management/shared_servers/<int:uid>',

  'user_management.admin_users': '/user_management/admin_users/<int:uid>',

  'user_management.save': '/user_management/save',

  'pgadmin.root': ''
}

export  function url_for (endpoint, substitutions) {
  let rawURL = endpoints[endpoint];

  // captures things of the form <path:substitutionName>
  let substitutionGroupsRegExp = /(<)([^:^>]*:)?([^>]+)(>)/g,
    interpolated = rawURL;

  if (!rawURL)
    return rawURL;

  interpolated = interpolated.replace(
    substitutionGroupsRegExp,
    function (_origin, _1, _2, substitutionName) {
      if (substitutionName in substitutions) {
        return substitutions[substitutionName];
      }
      return _origin;
    }
  );

  return interpolated;
};

export function generate_url(baseUrl, treeInfo, actionType, nodeType, pickFunction, itemDataID) {
  let ref = '';
  _.each(
    _.sortBy(
      _.pickBy(treeInfo, pickFunction),
      function (treeInfoItems) {
        return treeInfoItems.priority;
      }
    ),
    function (treeInfoItems) {
      ref = `${ref}/${encodeURI(treeInfoItems._id)}`;
    }
  );
  ref = itemDataID ? `${ref}/${itemDataID}` : `${ref}/`;

  return `${baseUrl}${nodeType}/${actionType}${ref}`;
}

export default url_for;
