"use strict";
/** Thêm sản phẩm vào giỏ hàng
 * @swagger
 * /cart/add-to-cart:
 *  post:
 *      summary: Thêm sản phẩm vào giỏ hàng
 *      tags: [Cart]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                type: object
 *                required:
 *                  - productId
 *                  - quantity
 *                properties:
 *                   productId:
 *                     type: string
 *                     example: 630398b2844724923bb97196
 *                   quantity:
 *                     type: number
 *                     example: 1
 *      responses:
 *          200:
 *              description: Success
 */
