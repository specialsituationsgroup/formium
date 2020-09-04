/**
 * Copyright (c) Formium, Inc. and its affiliates.
 *
 * This source code is licensed under the Business Source License license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 *
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* eslint-disable @typescript-eslint/consistent-type-assertions */

/**
 * Customer access level of a user
 * @public
 */
export interface CustomerAccess {
  customerId: string;

  access: CustomerAccessAccess;
}

export enum CustomerAccessAccess {
  NONE = <any>'NONE',
  MEMBER = <any>'MEMBER',
  ADMIN = <any>'ADMIN',
}
