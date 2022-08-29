/** Xóa đơn hàng
 * @swagger
 * /order/{id}:
 *  delete:
 *      summary: Xóa đơn hàng
 *      tags: [Order]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Order ID
 *      responses:
 *          200:
 *              description: Success
 */
