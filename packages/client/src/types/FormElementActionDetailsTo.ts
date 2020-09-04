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

/* eslint-disable @typescript-eslint/consistent-type-assertions */

/**
 * Form element action details
 *
 * @public
 */

export interface FormElementActionDetailsTo {
  /**
   * Specifies where the Logic Jump leads---to another field, a Hidden Field, or thank you screen.
   */
  type: FormElementActionDetailsToType;

  /**
   * The \"ref\" value for the field, Hidden Field, or thank you screen the Logic Jump leads to.
   */
  value: string;
}

export enum FormElementActionDetailsToType {
  FIELD = <any>'FIELD',
  HIDDEN = <any>'HIDDEN',
  THANK_YOU = <any>'THANK_YOU',
}
