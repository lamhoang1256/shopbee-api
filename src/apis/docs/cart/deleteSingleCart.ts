/** Xóa 1 sản phẩm trong giỏ hàng
 * @swagger
 * /cart/{id}:
 *  delete:
 *      summary: Xóa 1 sản phẩm trong giỏ hàng
 *      tags: [Cart]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Cart ID
 *      responses:
 *          200:
 *              description: Success
 */
