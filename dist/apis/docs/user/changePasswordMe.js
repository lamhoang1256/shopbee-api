"use strict";
/** Đổi mật khẩu của bạn
 * @swagger
 * /user/change-password:
 *  put:
 *      summary: Đổi mật khẩu của bạn
 *      tags: [User]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                type: object
 *                properties:
 *                   currentPassword:
 *                     type: string
 *                     example: 11111111
 *                   newPassword:
 *                     type: string
 *                     example: 22222222
 *      responses:
 *          200:
 *              description: Success
 */
