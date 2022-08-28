"use strict";
/** Xóa sản phẩm khỏi danh sách yêu thích
 * @swagger
 * /wishlist/{id}:
 *  delete:
 *      summary: Xóa sản phẩm khỏi danh sách yêu thích
 *      tags: [Wishlist]
 *      security:
 *        - bearerAuth: []
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
