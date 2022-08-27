"use strict";
/** Tạo mới accessToken
 * @swagger
 * /auth/refresh-token:
 *  post:
 *    summary: Tạo mới accessToken
 *    tags: [Auth]
 *    parameters:
 *       - in: query
 *         name: refreshToken
 *         required: true
 *         schema:
 *           type: string
 *           description: refreshToken để tạo mới một accessToken
 *    responses:
 *       200:
 *         description: Success
 */
