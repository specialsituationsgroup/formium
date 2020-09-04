/**
 * Copyright (c) Formium, Inc. and its affiliates.
 *
 * This source code is licensed under the Business Source License found in the
 * LICENSE file in the root directory of this source tree.
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

import { FormElement } from './FormElement';
/* eslint-disable @typescript-eslint/consistent-type-assertions */

/**
 * Form schema
 *
 * @public
 */
export interface FormSchema {
  /**
   * page ids of the form
   */
  pageIds?: Array<string>;

  /**
   * elements of the form
   */
  fields: { [key: string]: FormElement };
}
