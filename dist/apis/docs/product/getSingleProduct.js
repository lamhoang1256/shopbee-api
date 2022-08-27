"use strict";
/** Lấy chi tiết sản phẩm
 * @swagger
 * /product/{id}:
 *  get:
 *      summary: Lấy chi tiết sản phẩm
 *      tags: [Product]
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Product ID
 *      responses:
 *          200:
 *              description: Success
 */
