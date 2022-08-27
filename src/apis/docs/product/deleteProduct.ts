/** Xóa sản phẩm
 * @swagger
 * /product/{id}:
 *  delete:
 *      summary: Xóa sản phẩm
 *      tags: [Product]
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
