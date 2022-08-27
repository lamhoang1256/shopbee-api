"use strict";
/** Đăng nhập
 * @swagger
 * /auth/sign-in:
 *  post:
 *    summary: Đăng nhập
 *    tags: [Auth]
 *    requestBody:
 *      content:
 *         application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: user@example.com
 *                 password:
 *                   type: string
 *                   example: 11111111
 *    responses:
 *       200:
 *         description: Success
 */
