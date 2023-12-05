/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export type OntologyMetadataAuditEvent =
  | "EXPERIMENTAL_ACTION_TYPES_ORGS_SERVICE_SET_ORGANIZATIONS"
  | "EXPERIMENTAL_ACTION_TYPES_ORGS_SERVICE_GET_ORGANIZATIONS"
  | "ACTION_TYPES_SERVICE_LOAD_ACTION_TYPES"
  | "ACTION_TYPES_SERVICE_LOAD_ACTION_TYPES_VERSIONED"
  | "ACTION_TYPES_SERVICE_LOAD_ALL_ACTION_TYPES"
  | "ACTION_TYPES_SERVICE_MODIFY_ACTION_TYPES"
  | "ACTION_TYPES_SERVICE_LOAD_ALL_ACTION_TYPES_FROM_ONTOLOGY"
  | "ACTION_TYPES_SERVICE_PAGE_LOAD_ALL_ACTION_TYPES_FROM_ONTOLOGY"
  | "ACTION_TYPES_SERVICE_LOAD_ACTION_TYPES_FROM_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_BULK_LOAD_ONTOLOGY_ENTITIES"
  | "ONTOLOGY_METADATA_SERVICE_BULK_LOAD_ONTOLOGY_ENTITIES_BY_DATASOURCES"
  | "ONTOLOGY_METADATA_SERVICE_GET_FEATURE_CONFIGURATIONS"
  | "ONTOLOGY_METADATA_SERVICE_GET_ACTION_TYPES_FOR_OBJECT_TYPE"
  | "ONTOLOGY_METADATA_SERVICE_GET_MODIFICATION_HISTORY"
  | "ONTOLOGY_METADATA_SERVICE_GET_ENTITY_MODIFICATION_HISTORY"
  | "ONTOLOGY_METADATA_SERVICE_GET_ONTOLOGY_RIDS_FOR_ONTOLOGY_ENTITIES"
  | "ONTOLOGY_METADATA_SERVICE_GET_ORGANIZATION_RIDS_FOR_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_GET_RELATIONS_FOR_OBJECT_TYPES"
  | "ONTOLOGY_METADATA_SERVICE_GET_LINK_TYPES_FOR_OBJECT_TYPES"
  | "ONTOLOGY_METADATA_SERVICE_GET_OBJECT_TYPES_FOR_SHARED_PROPERTY_TYPES"
  | "ONTOLOGY_METADATA_SERVICE_GET_OBJECT_TYPES_FOR_INTERFACE_TYPES"
  | "ONTOLOGY_METADATA_SERVICE_GET_OBJECT_TYPES_FOR_TYPE_GROUPS"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ONTOLOGY_ENTITIES"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_OBJECT_TYPES_FROM_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_ONTOLOGIES"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_ONTOLOGY_ENTITIES"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_SHARED_PROPERTY_TYPES_FROM_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_INTERFACE_TYPES_FROM_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_TYPE_GROUPS_FROM_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ONTOLOGY_DATASOURCES"
  | "ONTOLOGY_METADATA_SERVICE_MODIFY_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_MODIFICATION"
  | "ONTOLOGT_METADATA_SERVICE_SYSTEM_ENTITY_METADATA_MODIFICATION"
  | "ONTOLOGY_METADATA_SERVICE_MODIFICATION_CHECK_UNIQUE_IDENTIFIERS"
  | "ONTOLOGY_METADATA_SERVICE_MODIFICATION_IMPORT_SHARED_PROPERTY_TYPE"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_RULE_SETS"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_RULE_SETS"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_CUSTOM_OBJECT_TYPE_TRAITS_FROM_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_WORKFLOWS_FROM_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_CREATE_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_ONTOLOGIES_INTERNAL"
  | "ONTOLOGY_METADATA_SERVICE_UPDATE_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_DELETE_ONTOLOGY"
  | "ONTOLOGY_METADATA_SERVICE_LOAD_ALL_CUSTOM_OBJECT_TYPE_TRAITS_PAGE"
  | "ONTOLOGY_METADATA_SEARCH_SERVICE_OBJECT_TYPES"
  | "ONTOLOGY_METADATA_SEARCH_SERVICE_SEARCH_OBJECT_TYPES"
  | "ONTOLOGY_METADATA_SEARCH_SERVICE_SEARCH_ACTION_TYPES"
  | "ONTOLOGY_METADATA_SEARCH_SERVICE_SEARCH_INTERFACE_TYPES"
  | "ONTOLOGY_METADATA_SEARCH_SERVICE_SEARCH_SHARED_PROPERTY_TYPES"
  | "ONTOLOGY_METADATA_SEARCH_SERVICE_SEARCH_TYPE_GROUPS"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_REPORT_USAGE_METADATA"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_GET_USAGE"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_GET_USAGE_V2"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_GET_DEPRECATION_USAGE"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_GET_USAGE_SETTINGS_BY_ORGANIZATION"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_GET_USAGE_SETTINGS_BY_USER"
  | "ONTOLOGY_METADATA_SERVICE_USAGE_SET_USAGE_SETTINGS_BY_ORGANIZATION"
  | "ONTOLOGY_METADATA_SERVICE_GET_ONTOLOGY_SUMMARY"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_ONTOLOGY_CREATE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_ONTOLOGY_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_OBJECT_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_OBJECT_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_OBJECT_TYPE_PERMISSIONS_FOR_USERS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_LINK_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_LINK_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_LINK_TYPE_PERMISSIONS_FOR_USERS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_ACTION_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_ACTION_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_ACTION_TYPE_PERMISSIONS_FOR_USERS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_RULE_SET_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_WORKFLOW_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_SHARED_PROPERTY_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_SHARED_PROPERTY_TYPE_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_BULK_TYPE_GROUP_PERMISSIONS"
  | "ONTOLOGY_PERMISSION_SERVICE_UPDATE_ENTITY_ROLES"
  | "ONTOLOGY_PERMISSION_SERVICE_BULK_UPDATE_ENTITY_ROLES"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_EDITORS_FOR_OBJECT_TYPE"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_SUGGESTED_ROLES_FOR_OBJECT_TYPE"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_SUGGESTED_ROLES_FOR_OBJECT_TYPE_DATASOURCE"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_SUGGESTED_ROLES_FOR_LINK_TYPE"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_SUGGESTED_ROLES_FOR_LINK_TYPE_DATASOURCE"
  | "ONTOLOGY_PERMISSION_SERVICE_GET_SUGGESTED_ROLES_FOR_ACTION_TYPE"
  | "ONTOLOGY_PROVENANCE_SERVICE_REGISTER_DEPENDENCY"
  | "ONTOLOGY_PROVENANCE_SERVICE_TAG_DEPENDENT"
  | "ONTOLOGY_PROVENANCE_SERVICE_GET_DEPENDENTS"
  | "ONTOLOGY_PROVENANCE_SERVICE_GET_DEPENDENCIES"
  | "ONTOLOGY_PROVENANCE_SERVICE_GET_DEPENDENCIES_V2"
  | "ONTOLOGY_ASSOCIATION_METADATA_SERVICE_CREATE_ASSOCIATION"
  | "ONTOLOGY_ASSOCIATION_METADATA_SERVICE_LOAD_ONTOLOGY_ENTITY_ASSOCIATIONS"
  | "ONTOLOGY_ASSOCIATION_METADATA_SERVICE_LOAD_RESOURCE_ASSOCIATIONS"
  | "ONTOLOGY_ASSOCIATION_METADATA_SERVICE_UPDATE_ASSOCIATION"
  | "ONTOLOGY_ASSOCIATION_METADATA_SERVICE_DELETE_ASSOCIATIONS"
  | "ONTOLOGY_METADATA_APPROVALS_SERVICE_CREATE_ONTOLOGY_BRANCH"
  | "ONTOLOGY_METADATA_APPROVALS_SERVICE_LOAD_ALL_BRANCHES_WITH_PROPOSAL"
  | "ONTOLOGY_METADATA_APPROVALS_SERVICE_LOAD_BRANCH_WITH_PROPOSAL"
  | "ONTOLOGY_METADATA_APPROVALS_SERVICE_MODIFY_BRANCH_WITH_PROPOSAL"
  | "ONTOLOGY_ENTITY_METADATA_SERVICE_LOAD_ENTITY_METADATA"
  | "ONTOLOGY_SCHEMA_MIGRATION_SERVICE_LOAD_OBJECT_TYPE_SCHEMA_MIGRATIONS"
  | "ONTOLOGY_SCHEMA_MIGRATION_SERVICE_BULK_LOAD_OBJECT_TYPE_SCHEMA_MIGRATIONS";
