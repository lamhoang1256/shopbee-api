"use strict";
/** Thêm nhận xét mới
 * @swagger
 * /review:
 *  post:
 *      summary: Thêm nhận xét mới
 *      tags: [Review]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                type: object
 *                required:
 *                  - productId
 *                  - rating
 *                  - comment
 *                properties:
 *                   productId:
 *                     type: string
 *                     example: 630398b2844724923bb9719b
 *                   rating:
 *                     type: number
 *                     example: 4
 *                   comment:
 *                     type: string
 *                     example: Sản phẩm dùng tốt
 *      responses:
 *          200:
 *              description: Success
 */
