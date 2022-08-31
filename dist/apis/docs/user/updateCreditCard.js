"use strict";
/** Cập nhật thẻ tín dụng bản thân
 * @swagger
 * /user/credit-card:
 *  put:
 *      summary: Cập nhật thẻ tín dụng bản thân
 *      tags: [User]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                type: object
 *                properties:
 *                   number:
 *                     type: string
 *                     example: 4111111111111111
 *                   name:
 *                     type: string
 *                     example: "NGUYEN HOANG LAM"
 *                   cvc:
 *                     type: string
 *                     example: "139"
 *                   expiry:
 *                     type: string
 *                     example: "09/24"
 *      responses:
 *          200:
 *              description: Success
 */
